# 🧪 Testing Playground - Student Learning Guide

Welcome! This guide will teach you how to write automated tests by doing hands-on projects. You'll implement functions and then write tests to make sure they work correctly.

## 🚀 Quick Setup

### 1. Install Required Tools
```bash
# Create Python environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install testing tools
pip install -r requirements.txt
npm install
npx playwright install
```

### 2. Verify Everything Works
```bash
pytest python_tests/ -v
npx playwright test
```

## 🎯 Your Mission

You'll create functions and write tests for them. Here's what you need to do:

### Python Testing (2-3 hours)
- **Goal**: Implement 10 functions and write 10-15 tests
- **Files**: `my_functions.py` and `test_my_functions.py`

### Selenium Testing (1-2 hours)  
- **Goal**: Write 5-8 web browser tests
- **File**: `my_web_tests.py`

### JavaScript Testing (1-2 hours)
- **Goal**: Write 8-10 browser-based tests
- **File**: `tests.js` (in browser playground)

## 🐍 Python Testing Tasks

### Step 1: Implement Functions
Edit `python_tests/my_functions.py` and implement these 10 functions:

- `add_numbers(a, b)` - Add two numbers
- `multiply_numbers(a, b)` - Multiply two numbers  
- `is_even(number)` - Check if number is even
- `reverse_string(text)` - Reverse a string
- `count_vowels(text)` - Count vowels in text
- `factorial(n)` - Calculate factorial
- `is_palindrome(text)` - Check if text is palindrome
- `find_max(numbers)` - Find largest number in list
- `remove_duplicates(items)` - Remove duplicates from list
- `validate_email(email)` - Check if email is valid

### Step 2: Write Tests
Edit `python_tests/test_my_functions.py` and write tests for each function.

### Step 3: Run Tests
```bash
pytest python_tests/test_my_functions.py -v
```

**Goal**: Make all tests pass by implementing the functions correctly!

## 🌐 Selenium Testing Tasks

### Step 1: Write Web Tests
Edit `selenium_tests/my_web_tests.py` and write tests that visit:

- Google homepage
- Wikipedia
- GitHub  
- Python.org
- httpbin.org
- Stack Overflow

### Step 2: Run Tests
```bash
pytest selenium_tests/my_web_tests.py -v
```

**Goal**: Write 5-8 tests that visit different websites and check they work!

## 🟨 JavaScript Testing Tasks

### Step 1: Open Interactive Playground
```bash
open javascript_tests/index.html  # Mac
start javascript_tests/index.html  # Windows
```

### Step 2: Add Your Tests
Edit `javascript_tests/tests.js` and add 8-10 custom tests for:

- Math operations
- String manipulation
- Array methods
- Object properties
- Date operations
- JSON handling

### Step 3: Run Tests
1. Refresh the webpage
2. Click "Run All Tests"
3. See your results!

**Goal**: Write 8-10 JavaScript tests that explore different features!

## 📊 Testing Checklist

### Python Tests (Target: 10-15 tests)
- [ ] Implement all 10 functions in `my_functions.py`
- [ ] Write tests for each function
- [ ] All tests pass: `pytest python_tests/test_my_functions.py -v`

### Selenium Tests (Target: 5-8 tests)
- [ ] Write test for Google
- [ ] Write test for Wikipedia
- [ ] Write test for GitHub
- [ ] Write test for Python.org
- [ ] Write test for httpbin.org
- [ ] Write test for Stack Overflow
- [ ] All tests pass: `pytest selenium_tests/my_web_tests.py -v`

### JavaScript Tests (Target: 8-10 tests)
- [ ] Write custom math test
- [ ] Write custom string test
- [ ] Write custom array test
- [ ] Write custom object test
- [ ] Write 6 more custom tests
- [ ] All tests pass in browser

## 🎯 Learning Goals

By the end, you should understand:
- ✅ How to write Python functions and test them
- ✅ How to write tests that check if functions work correctly
- ✅ How to test websites automatically with Selenium
- ✅ How to test JavaScript code in browsers
- ✅ How automated testing works with GitHub Actions

## 🆘 Need Help?

### Common Issues:
- **Tests fail**: Check your function implementations
- **Can't find files**: Make sure you're in the right folder
- **Browser won't open**: Try `pytest --browser=visible` for Selenium tests
- **JavaScript tests don't run**: Refresh the webpage

### Useful Commands:
```bash
# Run your Python tests
pytest python_tests/test_my_functions.py -v

# Run your Selenium tests
pytest selenium_tests/my_web_tests.py -v

# Open JavaScript playground
open javascript_tests/index.html
```

## 🎉 Success!

Once you complete all tasks, you'll have:
- 10+ Python functions with tests
- 5+ Selenium web tests  
- 8+ JavaScript tests
- Experience with automated testing

**Total Time**: 4-7 hours of hands-on learning

**Remember**: Start with simple tests and build up complexity. The goal is to practice testing, not to write perfect code!

Happy Testing! 🚀