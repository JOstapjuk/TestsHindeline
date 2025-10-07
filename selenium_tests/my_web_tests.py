# My Web Tests - Write tests that visit websites and check they work!

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

@pytest.fixture(scope="function")
def driver():
    """Create browser for testing"""
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    service = Service(ChromeDriverManager().install())

    driver = webdriver.Chrome(service=service, options=options)
    driver.implicitly_wait(10)
    yield driver
    driver.quit()

def test_visit_google(driver):
    """Test visiting Google homepage"""
    driver.get("https://www.google.com")
    assert "Google" in driver.title

def test_visit_httpbin(driver):
    """Test visiting httpbin.org"""
    driver.get("https://httpbin.org/")
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )
    assert "httpbin" in driver.title.lower()

# TODO: Write 3-5 more web tests!
# Ideas for websites to test:
# - https://www.wikipedia.org
# - https://www.github.com
# - https://www.stackoverflow.com
# - https://httpbin.org/get
# - https://www.python.org

def test_visit_wikipedia(driver):
    """Test visiting Wikipedia"""
    # TODO: Write this test
    # 1. Visit https://www.wikipedia.org
    # 2. Check that the page loads (title contains "Wikipedia")
    # 3. Find the search box and verify it exists
    driver.get("https://www.wikipedia.org")
    assert "Wikipedia" in driver.title
    search_box = driver.find_element(By.ID, "searchInput")
    assert search_box.is_displayed()

def test_visit_github(driver):
    """Test visiting GitHub"""
    # TODO: Write this test
    # 1. Visit https://www.github.com
    # 2. Check that the page loads
    # 3. Find a button or link and verify it's clickable
    driver.get("https://github.com")
    assert "GitHub" in driver.title
    header = driver.find_element(By.TAG_NAME, "header")
    assert header.is_displayed()

def test_visit_python_org(driver):
    """Test visiting Python.org"""
    # TODO: Write this test
    # 1. Visit https://www.python.org
    # 2. Check that the page loads
    # 3. Find an element with text "Python" and verify it exists
    driver.get("https://www.python.org")
    assert "Python" in driver.title
    download_button = driver.find_element(By.LINK_TEXT, "Downloads")
    assert download_button.is_displayed()

def test_visit_httpbin_get(driver):
    """Test visiting httpbin.org/get"""
    driver.get("https://httpbin.org/get")
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )
    page_source = driver.page_source
    # simple check: contains 'url' keyword
    assert '"url"' in page_source

def test_visit_stackoverflow(driver):
    """Test visiting Stack Overflow"""
    driver.get("https://www.stackoverflow.com")
    assert "Stack Overflow" in driver.title
    search_box = driver.find_element(By.NAME, "q")
    assert search_box.is_enabled()

# Bonus: Write a test that interacts with a webpage
def test_interact_with_website(driver):
    """Test interacting with a webpage"""
    # TODO: Write this test
    # 1. Visit a website
    # 2. Find an element (button, link, input field)
    # 3. Interact with it (click, type text)
    # 4. Verify something changed
    driver.get("https://www.wikipedia.org")
    search_box = driver.find_element(By.ID, "searchInput")
    search_box.send_keys("Python programming")
    search_box.submit()
    WebDriverWait(driver, 10).until(
        EC.title_contains("Python")
    )
    assert "Python" in driver.title

# Helper function examples (you can use these!)
def find_element_by_text(driver, text):
    """Find an element containing specific text"""
    return driver.find_element(By.XPATH, f"//*[contains(text(), '{text}')]")

def wait_for_element(driver, locator, timeout=10):
    """Wait for an element to appear"""
    return WebDriverWait(driver, timeout).until(
        EC.presence_of_element_located(locator)
    )
