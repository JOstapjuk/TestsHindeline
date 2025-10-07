# 🧪 Comprehensive Testing Playground

A complete testing environment for Python pytest, Selenium web automation, JavaScript testing, and GitHub Actions CI/CD. Perfect for students learning automated testing or developers looking to implement comprehensive testing strategies.

## ✨ Features

- **🐍 Python Testing**: Complete pytest setup with unit tests, integration tests, and web scraping tests
- **🌐 Selenium Testing**: Web browser automation with Chrome, Firefox, and advanced interactions
- **🟨 JavaScript Testing**: Browser-based testing with custom framework and Playwright
- **🔄 GitHub Actions**: Full CI/CD pipeline with automated testing, security scanning, and reporting
- **📊 Test Reports**: HTML reports, coverage analysis, and comprehensive test artifacts
- **🎓 Educational**: Extensive examples and documentation for learning testing concepts

## 🚀 Quick Start

### Prerequisites
- Python 3.8+ (3.11 recommended)
- Node.js 18+
- Git
- Chrome/Chromium browser

### Installation

1. **Clone or download the project**
2. **Set up Python environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up JavaScript environment**:
   ```bash
   npm install
   npx playwright install
   ```

4. **Run tests**:
   ```bash
   # Python tests
   pytest python_tests/ -v
   
   # Selenium tests
   pytest selenium_tests/ -v
   
   # JavaScript tests
   npx playwright test
   
   # Or run everything
   npm run all-tests
   ```

## 📁 Project Structure

```
testing_v2/
├── python_tests/           # Python pytest tests
│   ├── test_basic.py      # Basic operations testing
│   └── test_web_scraping.py # HTTP requests & HTML parsing
├── selenium_tests/         # Selenium web automation
│   ├── test_selenium_basic.py    # Basic web navigation
│   └── test_selenium_advanced.py # Advanced interactions
├── javascript_tests/       # JavaScript testing environment
│   ├── index.html         # Interactive testing playground
│   ├── test-framework.js  # Custom JavaScript test framework
│   ├── tests.js          # Comprehensive test suite
│   ├── app.js            # Application logic
│   └── playwright-tests.spec.js # Playwright browser tests
├── .github/workflows/     # GitHub Actions CI/CD
│   └── test.yml          # Main automated testing pipeline
├── requirements.txt       # Python dependencies
├── package.json          # Node.js dependencies & scripts
├── pytest.ini           # Pytest configuration
├── playwright.config.js  # Playwright configuration
├── instructions.txt      # Detailed setup and usage guide
└── README.md            # This file
```

## 🎯 What You Can Learn

### Testing Concepts
- **Unit Testing**: Testing individual functions and methods
- **Integration Testing**: Testing component interactions
- **End-to-End Testing**: Full application workflow testing
- **Test-Driven Development (TDD)**: Writing tests before code
- **Continuous Integration**: Automated testing in CI/CD pipelines

### Testing Tools
- **Pytest**: Python testing framework with fixtures and parametrization
- **Selenium**: Web browser automation for UI testing
- **Playwright**: Modern web testing with cross-browser support
- **GitHub Actions**: CI/CD automation and workflow management

### Advanced Features
- **Test Coverage**: Measuring and analyzing test coverage
- **Test Reporting**: HTML reports and test result visualization
- **Parallel Testing**: Running tests concurrently for faster execution
- **Cross-Browser Testing**: Testing across different browsers
- **Performance Testing**: Measuring and optimizing test performance

## 🧪 Test Examples

### Python Tests
```python
def test_addition():
    assert 2 + 2 == 4
    assert 10 + 5 == 15

@pytest.mark.parametrize("input,expected", [
    (2, 4), (3, 9), (4, 16)
])
def test_square(input, expected):
    assert input ** 2 == expected
```

### Selenium Tests
```python
def test_google_search(driver):
    driver.get("https://www.google.com")
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("pytest selenium testing")
    search_box.send_keys(Keys.RETURN)
    
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "search"))
    )
    results = driver.find_elements(By.CSS_SELECTOR, "h3")
    assert len(results) > 0
```

### JavaScript Tests
```javascript
test('Addition should work correctly', () => {
    assertEqual(2 + 2, 4);
    assertEqual(10 + 5, 15);
});

test('String operations should work', () => {
    const str = "Hello World";
    assertEqual(str.length, 11);
    assertEqual(str.toUpperCase(), "HELLO WORLD");
});
```

## 🔄 GitHub Actions CI/CD

The project includes a comprehensive GitHub Actions workflow that:

- **Tests on multiple Python versions** (3.8, 3.9, 3.10, 3.11)
- **Runs Selenium tests** with Chrome browser
- **Executes JavaScript tests** with Playwright
- **Performs security scanning** with Bandit and Safety
- **Checks code quality** with linting and formatting
- **Generates test reports** and coverage analysis
- **Runs on every push and pull request**

## 📚 Learning Path

### For Beginners
1. Start with `python_tests/test_basic.py` to understand basic testing concepts
2. Open `javascript_tests/index.html` to explore interactive testing
3. Read through `instructions.txt` for detailed explanations
4. Try modifying existing tests to understand how they work

### For Intermediate Users
1. Explore advanced Selenium features in `test_selenium_advanced.py`
2. Learn about test fixtures and parametrization
3. Experiment with GitHub Actions workflows
4. Practice writing tests for your own code

### For Advanced Users
1. Customize the CI/CD pipeline for your needs
2. Add performance testing and monitoring
3. Implement advanced test data management strategies
4. Explore test automation best practices

## 🛠️ Available Commands

### Python Testing
```bash
pytest python_tests/ -v                    # Run Python tests
pytest python_tests/ --cov --cov-report=html  # With coverage
pytest -m "not slow" -v                    # Skip slow tests
```

### Selenium Testing
```bash
pytest selenium_tests/ -v                  # Run Selenium tests
pytest selenium_tests/ --browser=chrome    # Specific browser
```

### JavaScript Testing
```bash
npx playwright test                        # Run Playwright tests
npx playwright test --headed               # With visible browser
npx playwright test --ui                   # Interactive UI mode
```

### All Tests
```bash
npm run all-tests                          # Run everything
npm run python-test                        # Python tests only
npm run selenium-test                      # Selenium tests only
npm run test                               # JavaScript tests only
```

## 📖 Documentation

- **[instructions.txt](instructions.txt)**: Comprehensive setup and usage guide
- **[Pytest Documentation](https://docs.pytest.org/)**: Official pytest docs
- **[Selenium Documentation](https://selenium-python.readthedocs.io/)**: Selenium Python docs
- **[Playwright Documentation](https://playwright.dev/)**: Playwright testing docs
- **[GitHub Actions Documentation](https://docs.github.com/en/actions)**: CI/CD workflows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tests or improvements
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter issues:

1. Check the [troubleshooting section](instructions.txt#troubleshooting) in instructions.txt
2. Review the test code for examples
3. Check GitHub Issues if using a public repository
4. Consult the official documentation for specific tools

## 🎓 Educational Use

This project is designed for educational purposes and can be used in:

- **Computer Science Courses**: Testing and software engineering
- **Bootcamps**: Web development and automation training
- **Self-Study**: Learning automated testing concepts
- **Professional Development**: Improving testing skills

---

**Happy Testing!** 🚀

Start with the [instructions.txt](instructions.txt) file for detailed setup and usage information.