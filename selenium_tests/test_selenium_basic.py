import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
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


def test_google_search(driver):
    """Test basic Google search functionality"""
    driver.get("https://www.google.com")
    
    # Find search box and perform search
    search_box = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.NAME, "q"))
    )
    search_box.send_keys("pytest selenium testing")
    search_box.send_keys("\n")
    
    # Wait for results and verify
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "search"))
    )
    
    # Verify search results contain expected text
    results = driver.find_elements(By.CSS_SELECTOR, "h3")
    assert len(results) > 0, "No search results found"


def test_element_interaction(driver):
    """Test basic element interaction"""
    driver.get("https://www.google.com")
    
    # Test element is present and visible
    search_box = driver.find_element(By.NAME, "q")
    assert search_box.is_displayed()
    assert search_box.is_enabled()
    
    # Test element can be interacted with
    search_box.send_keys("test")
    assert search_box.get_attribute("value") == "test"
