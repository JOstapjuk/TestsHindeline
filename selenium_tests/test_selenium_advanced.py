import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.support.ui import Select
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service


@pytest.fixture(scope="function")
def driver():
    """Create and configure Chrome driver with advanced options"""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")
    
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)
    driver.implicitly_wait(10)
    driver.maximize_window()
    
    yield driver
    driver.quit()


class TestAdvancedSelenium:
    """Advanced Selenium testing techniques"""
    
    def test_action_chains_hover(self, driver):
        """Test hover action using ActionChains"""
        driver.get("https://the-internet.herokuapp.com/hovers")
        
        # Find hover elements
        hover_elements = driver.find_elements(By.CSS_SELECTOR, ".figure")
        assert len(hover_elements) >= 3
        
        # Create ActionChains object
        actions = ActionChains(driver)
        
        # Hover over first element
        actions.move_to_element(hover_elements[0]).perform()
        
        # Wait for hover effect and verify
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".figcaption"))
        )
        
        caption = driver.find_element(By.CSS_SELECTOR, ".figcaption")
        assert caption.is_displayed()
        assert "name: user1" in caption.text
    
    def test_drag_and_drop(self, driver):
        """Test drag and drop functionality"""
        driver.get("https://the-internet.herokuapp.com/drag_and_drop")
        
        # Find draggable elements
        box_a = driver.find_element(By.ID, "column-a")
        box_b = driver.find_element(By.ID, "column-b")
        
        # Perform drag and drop
        actions = ActionChains(driver)
        actions.drag_and_drop(box_a, box_b).perform()
        
        # Verify the change
        time.sleep(1)  # Allow for animation
        
        # Check if the headers have switched
        header_a = driver.find_element(By.CSS_SELECTOR, "#column-a header")
        header_b = driver.find_element(By.CSS_SELECTOR, "#column-b header")
        
        # The headers should have switched after drag and drop
        assert header_a.text == "B" and header_b.text == "A"
    
    def test_keyboard_shortcuts(self, driver):
        """Test keyboard shortcuts and key combinations"""
        driver.get("https://www.google.com")
        
        # Accept cookies if present
        try:
            accept_button = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, "L2AGLb"))
            )
            accept_button.click()
        except:
            pass
        
        search_box = driver.find_element(By.NAME, "q")
        search_box.click()
        
        # Use keyboard shortcuts
        actions = ActionChains(driver)
        actions.send_keys("selenium testing")
        actions.key_down(Keys.CONTROL).send_keys("a").key_up(Keys.CONTROL)  # Select all
        actions.send_keys("pytest selenium")  # Replace selected text
        actions.perform()
        
        # Verify the text
        assert search_box.get_attribute("value") == "pytest selenium"
    
    def test_file_upload(self, driver):
        """Test file upload functionality"""
        driver.get("https://the-internet.herokuapp.com/upload")
        
        # Create a temporary file
        import tempfile
        import os
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:
            f.write("This is a test file for upload testing.")
            temp_file_path = f.name
        
        try:
            # Find file input and upload file
            file_input = driver.find_element(By.ID, "file-upload")
            file_input.send_keys(temp_file_path)
            
            # Click upload button
            upload_button = driver.find_element(By.ID, "file-submit")
            upload_button.click()
            
            # Verify upload success
            success_message = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "h3"))
            )
            assert "File Uploaded!" in success_message.text
            
            # Verify filename is displayed
            uploaded_file = driver.find_element(By.ID, "uploaded-files")
            assert os.path.basename(temp_file_path) in uploaded_file.text
            
        finally:
            # Clean up temporary file
            os.unlink(temp_file_path)
    
    def test_alert_handling(self, driver):
        """Test JavaScript alert handling"""
        driver.get("https://the-internet.herokuapp.com/javascript_alerts")
        
        # Test JavaScript Alert
        alert_button = driver.find_element(By.CSS_SELECTOR, "button[onclick='jsAlert()']")
        alert_button.click()
        
        # Switch to alert and handle it
        alert = WebDriverWait(driver, 5).until(EC.alert_is_present())
        assert alert.text == "I am a JS Alert"
        alert.accept()
        
        # Verify result message
        result = driver.find_element(By.ID, "result")
        assert "You successfully clicked an alert" in result.text
        
        # Test JavaScript Confirm (OK)
        confirm_button = driver.find_element(By.CSS_SELECTOR, "button[onclick='jsConfirm()']")
        confirm_button.click()
        
        confirm_alert = WebDriverWait(driver, 5).until(EC.alert_is_present())
        assert confirm_alert.text == "I am a JS Confirm"
        confirm_alert.accept()
        
        confirm_result = driver.find_element(By.ID, "result")
        assert "You clicked: Ok" in confirm_result.text
        
        # Test JavaScript Prompt
        prompt_button = driver.find_element(By.CSS_SELECTOR, "button[onclick='jsPrompt()']")
        prompt_button.click()
        
        prompt_alert = WebDriverWait(driver, 5).until(EC.alert_is_present())
        assert prompt_alert.text == "I am a JS prompt"
        prompt_alert.send_keys("Test Input")
        prompt_alert.accept()
        
        prompt_result = driver.find_element(By.ID, "result")
        assert "You entered: Test Input" in prompt_result.text
    
    def test_iframe_handling(self, driver):
        """Test iframe interaction"""
        driver.get("https://the-internet.herokuapp.com/iframe")
        
        # Switch to iframe
        iframe = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "mce_0_ifr"))
        )
        driver.switch_to.frame(iframe)
        
        # Interact with content inside iframe
        editor = driver.find_element(By.ID, "tinymce")
        editor.clear()
        editor.send_keys("This text was added via Selenium!")
        
        # Verify text was added
        assert "This text was added via Selenium!" in editor.text
        
        # Switch back to main content
        driver.switch_to.default_content()
        
        # Verify we're back in main content
        header = driver.find_element(By.CSS_SELECTOR, "h3")
        assert "An iFrame" in header.text
    
    def test_window_resize_and_screenshot(self, driver):
        """Test window resizing and screenshot capture"""
        driver.get("https://www.google.com")
        
        # Test different window sizes
        driver.set_window_size(800, 600)
        size_1 = driver.get_window_size()
        assert size_1['width'] == 800
        assert size_1['height'] == 600
        
        driver.set_window_size(1920, 1080)
        size_2 = driver.get_window_size()
        assert size_2['width'] == 1920
        assert size_2['height'] == 1080
        
        # Take screenshot
        screenshot_path = "/tmp/selenium_screenshot.png"
        driver.save_screenshot(screenshot_path)
        
        # Verify screenshot was created
        import os
        assert os.path.exists(screenshot_path)
        assert os.path.getsize(screenshot_path) > 0
        
        # Clean up
        os.remove(screenshot_path)
    
    def test_cookies_management(self, driver):
        """Test cookie management"""
        driver.get("https://www.google.com")
        
        # Add a cookie
        driver.add_cookie({
            'name': 'test_cookie',
            'value': 'test_value',
            'domain': '.google.com'
        })
        
        # Verify cookie was added
        cookies = driver.get_cookies()
        cookie_names = [cookie['name'] for cookie in cookies]
        assert 'test_cookie' in cookie_names
        
        # Get specific cookie
        test_cookie = driver.get_cookie('test_cookie')
        assert test_cookie['value'] == 'test_value'
        
        # Delete cookie
        driver.delete_cookie('test_cookie')
        
        # Verify cookie was deleted
        cookies_after = driver.get_cookies()
        cookie_names_after = [cookie['name'] for cookie in cookies_after]
        assert 'test_cookie' not in cookie_names_after
    
    def test_wait_strategies(self, driver):
        """Test different wait strategies"""
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/1")
        
        # Test explicit wait with custom condition
        start_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "#start button"))
        )
        start_button.click()
        
        # Wait for loading to complete and text to appear
        loading_text = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "loading"))
        )
        assert loading_text.is_displayed()
        
        # Wait for loading to disappear and finish text to appear
        finish_text = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "finish"))
        )
        assert "Hello World!" in finish_text.text
        
        # Test wait for element to be invisible
        WebDriverWait(driver, 10).until(
            EC.invisibility_of_element_located((By.ID, "loading"))
        )
        assert not loading_text.is_displayed()
