import pytest
import requests
from bs4 import BeautifulSoup


def test_httpbin_get_request():
    """Test basic GET request to httpbin"""
    response = requests.get("https://httpbin.org/get")
    assert response.status_code == 200
    assert response.headers["content-type"] == "application/json"


def test_html_parsing():
    """Test HTML parsing with BeautifulSoup"""
    html_content = """
    <html>
        <body>
            <h1>Test Page</h1>
            <p class="intro">This is a test paragraph.</p>
        </body>
    </html>
    """
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Test finding elements
    assert soup.h1.text == "Test Page"
    assert soup.find('p', class_='intro').text == "This is a test paragraph."
