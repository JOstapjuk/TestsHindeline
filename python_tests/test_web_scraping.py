import pytest
import requests
from bs4 import BeautifulSoup


class TestWebScraping:
    """Web scraping tests using requests and BeautifulSoup"""
    
    def test_httpbin_get_request(self):
        """Test basic GET request to httpbin"""
        response = requests.get("https://httpbin.org/get")
        assert response.status_code == 200
        assert response.headers["content-type"] == "application/json"
    
    def test_httpbin_post_request(self):
        """Test POST request to httpbin"""
        data = {"key": "value", "test": "data"}
        response = requests.post("https://httpbin.org/post", json=data)
        assert response.status_code == 200
        response_data = response.json()
        assert response_data["json"]["key"] == "value"
    
    def test_httpbin_status_codes(self):
        """Test different status codes"""
        # Test 200 OK
        response = requests.get("https://httpbin.org/status/200")
        assert response.status_code == 200
        
        # Test 404 Not Found
        response = requests.get("https://httpbin.org/status/404")
        assert response.status_code == 404
        
        # Test 500 Server Error
        response = requests.get("https://httpbin.org/status/500")
        assert response.status_code == 500
    
    def test_html_parsing(self):
        """Test HTML parsing with BeautifulSoup"""
        html_content = """
        <html>
            <body>
                <h1>Test Page</h1>
                <p class="intro">This is a test paragraph.</p>
                <div id="content">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </body>
        </html>
        """
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Test finding elements
        assert soup.h1.text == "Test Page"
        assert soup.find('p', class_='intro').text == "This is a test paragraph."
        assert soup.find('div', id='content') is not None
        
        # Test finding multiple elements
        list_items = soup.find_all('li')
        assert len(list_items) == 3
        assert list_items[0].text == "Item 1"
        assert list_items[1].text == "Item 2"
        assert list_items[2].text == "Item 3"
    
    def test_response_time(self):
        """Test response time is reasonable"""
        import time
        
        start_time = time.time()
        response = requests.get("https://httpbin.org/delay/1")
        end_time = time.time()
        
        assert response.status_code == 200
        assert (end_time - start_time) < 5  # Should complete within 5 seconds
    
    @pytest.mark.slow
    def test_slow_endpoint(self):
        """Test slow endpoint (marked as slow for pytest configuration)"""
        response = requests.get("https://httpbin.org/delay/3")
        assert response.status_code == 200
