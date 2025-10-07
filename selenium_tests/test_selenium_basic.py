import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service


@pytest.fixture(scope="function")
def driver():
    """Create and configure Chrome driver"""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")  # Run in headless mode for CI/CD
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)
    driver.implicitly_wait(10)
    
    yield driver
    driver.quit()


class TestBasicWebNavigation:
    """Basic web navigation tests"""
    
    def test_google_search(self, driver):
        """Test basic Google search functionality"""
        driver.get("https://www.google.com")
        
        # Accept cookies if present
        try:
            accept_button = WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, "L2AGLb"))
            )
            accept_button.click()
        except:
            pass  # Cookies dialog might not appear
        
        # Find search box and perform search
        search_box = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "q"))
        )
        search_box.send_keys("pytest selenium testing")
        search_box.send_keys(Keys.RETURN)
        
        # Wait for results and verify
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "search"))
        )
        
        # Verify search results contain expected text
        results = driver.find_elements(By.CSS_SELECTOR, "h3")
        assert len(results) > 0, "No search results found"
    
    def test_wikipedia_navigation(self, driver):
        """Test Wikipedia page navigation"""
        driver.get("https://en.wikipedia.org/wiki/Python_(programming_language)")
        
        # Wait for page to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "firstHeading"))
        )
        
        # Verify page title
        title = driver.find_element(By.ID, "firstHeading")
        assert "Python" in title.text
        
        # Find and click a link
        link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Guido van Rossum"))
        )
        link.click()
        
        # Verify navigation to new page
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "firstHeading"))
        )
        new_title = driver.find_element(By.ID, "firstHeading")
        assert "Guido van Rossum" in new_title.text
    
    def test_form_interaction(self, driver):
        """Test form interaction on a test page"""
        driver.get("https://httpbin.org/forms/post")
        
        # Fill out form fields
        custname = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "custname"))
        )
        custname.send_keys("Test User")
        
        email = driver.find_element(By.NAME, "email")
        email.send_keys("test@example.com")
        
        size = driver.find_element(By.CSS_SELECTOR, "input[value='large']")
        size.click()
        
        topping = driver.find_element(By.CSS_SELECTOR, "input[value='bacon']")
        topping.click()
        
        delivery = driver.find_element(By.NAME, "delivery")
        delivery.send_keys("ASAP")
        
        comments = driver.find_element(By.NAME, "comments")
        comments.send_keys("This is a test order")
        
        # Submit form
        submit_button = driver.find_element(By.CSS_SELECTOR, "input[type='submit']")
        submit_button.click()
        
        # Wait for response and verify
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "pre"))
        )
        
        # Check that form data was submitted
        response_text = driver.find_element(By.TAG_NAME, "pre").text
        assert "Test User" in response_text
        assert "test@example.com" in response_text
    
    def test_javascript_execution(self, driver):
        """Test JavaScript execution in browser"""
        driver.get("https://www.google.com")
        
        # Execute JavaScript
        title = driver.execute_script("return document.title;")
        assert "Google" in title
        
        # Modify page with JavaScript
        driver.execute_script("document.body.style.backgroundColor = 'red';")
        bg_color = driver.execute_script("return document.body.style.backgroundColor;")
        assert bg_color == "red"
    
    def test_window_handling(self, driver):
        """Test window and tab handling"""
        # Open first page
        driver.get("https://www.google.com")
        first_window = driver.current_window_handle
        
        # Open new tab with JavaScript
        driver.execute_script("window.open('https://www.wikipedia.org', '_blank');")
        
        # Switch to new window
        WebDriverWait(driver, 10).until(lambda d: len(d.window_handles) == 2)
        new_window = [w for w in driver.window_handles if w != first_window][0]
        driver.switch_to.window(new_window)
        
        # Verify we're on Wikipedia
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "searchInput"))
        )
        assert "wikipedia" in driver.current_url.lower()
        
        # Switch back to original window
        driver.switch_to.window(first_window)
        assert "google" in driver.current_url.lower()


class TestElementInteraction:
    """Test various element interaction methods"""
    
    def test_dropdown_selection(self, driver):
        """Test dropdown/select element interaction"""
        driver.get("https://httpbin.org/forms/post")
        
        # Find and interact with size dropdown (radio buttons)
        size_options = driver.find_elements(By.NAME, "size")
        assert len(size_options) >= 3  # Should have small, medium, large options
        
        # Select large size
        large_option = driver.find_element(By.CSS_SELECTOR, "input[value='large']")
        large_option.click()
        assert large_option.is_selected()
    
    def test_checkbox_interaction(self, driver):
        """Test checkbox interaction"""
        driver.get("https://httpbin.org/forms/post")
        
        # Find checkboxes
        checkboxes = driver.find_elements(By.CSS_SELECTOR, "input[type='checkbox']")
        assert len(checkboxes) > 0
        
        # Select first checkbox
        first_checkbox = checkboxes[0]
        if not first_checkbox.is_selected():
            first_checkbox.click()
        assert first_checkbox.is_selected()
        
        # Deselect checkbox
        first_checkbox.click()
        assert not first_checkbox.is_selected()
    
    def test_element_visibility(self, driver):
        """Test element visibility and presence"""
        driver.get("https://www.google.com")
        
        # Test element is present and visible
        search_box = driver.find_element(By.NAME, "q")
        assert search_box.is_displayed()
        assert search_box.is_enabled()
        
        # Test element can be interacted with
        search_box.send_keys("test")
        assert search_box.get_attribute("value") == "test"
    
    def test_wait_conditions(self, driver):
        """Test various wait conditions"""
        driver.get("https://www.google.com")
        
        # Test explicit wait for element to be clickable
        search_box = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.NAME, "q"))
        )
        assert search_box is not None
        
        # Test wait for text to be present
        search_box.send_keys("pytest")
        search_box.send_keys(Keys.RETURN)
        
        # Wait for search results
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "search"))
        )
        
        # Verify search results are loaded
        results = driver.find_elements(By.CSS_SELECTOR, "h3")
        assert len(results) > 0
