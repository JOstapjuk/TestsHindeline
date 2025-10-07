// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('JavaScript Testing Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./index.html');
  });

  test('should load the main page', async ({ page }) => {
    await expect(page).toHaveTitle(/JavaScript Testing Playground/);
    await expect(page.locator('h1')).toContainText('🧪 JavaScript Testing Playground');
  });

  test('should run all tests successfully', async ({ page }) => {
    // Click the "Run All Tests" button
    await page.click('button:has-text("Run All Tests")');
    
    // Wait for test results to appear
    await page.waitForSelector('#test-results:not(.hidden)');
    
    // Check that test results are displayed
    const testResults = page.locator('#test-results');
    await expect(testResults).toBeVisible();
    
    // Verify that we have test results (should contain "Tests completed")
    const resultsText = await testResults.textContent();
    expect(resultsText).toContain('Test Results');
  });

  test('should test math operations', async ({ page }) => {
    await page.click('button:has-text("Test Math Operations")');
    
    const result = page.locator('#math-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Math Operations Test Passed');
  });

  test('should test string operations', async ({ page }) => {
    await page.click('button:has-text("Test String Operations")');
    
    const result = page.locator('#string-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('String Operations Test Passed');
  });

  test('should test array operations', async ({ page }) => {
    await page.click('button:has-text("Test Array Operations")');
    
    const result = page.locator('#array-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Array Operations Test Passed');
  });

  test('should test object operations', async ({ page }) => {
    await page.click('button:has-text("Test Object Operations")');
    
    const result = page.locator('#object-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Object Operations Test Passed');
  });

  test('should test element manipulation', async ({ page }) => {
    await page.click('button:has-text("Test Element Manipulation")');
    
    const result = page.locator('#element-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Element Manipulation Test Passed');
  });

  test('should test event handling', async ({ page }) => {
    await page.click('button:has-text("Test Event Handling")');
    
    const result = page.locator('#event-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Event Handling Test Passed');
  });

  test('should test form validation', async ({ page }) => {
    await page.click('button:has-text("Test Form Validation")');
    
    const result = page.locator('#form-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Form Validation Test Passed');
  });

  test('should test form submission', async ({ page }) => {
    await page.click('button:has-text("Test Form Submission")');
    
    const result = page.locator('#form-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Form Submission Test Passed');
  });

  test('should test todo functionality', async ({ page }) => {
    await page.click('button:has-text("Test Todo Functionality")');
    
    const result = page.locator('#todo-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Todo Functionality Test Passed');
  });

  test('should add a todo item', async ({ page }) => {
    const todoInput = page.locator('#todo-input');
    await todoInput.fill('Test todo item');
    await page.click('button:has-text("Add Todo")');
    
    // Check that the todo was added to the list
    const todoList = page.locator('#todo-list');
    await expect(todoList).toContainText('Test todo item');
  });

  test('should test promises', async ({ page }) => {
    await page.click('button:has-text("Test Promises")');
    
    // Wait a bit for async operations to complete
    await page.waitForTimeout(1000);
    
    const result = page.locator('#async-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Async Test Passed');
  });

  test('should test async/await', async ({ page }) => {
    await page.click('button:has-text("Test Async/Await")');
    
    const result = page.locator('#async-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Async/Await Test Passed');
  });

  test('should test fetch API', async ({ page }) => {
    await page.click('button:has-text("Test Fetch API")');
    
    const result = page.locator('#fetch-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Fetch API Test Passed');
  });

  test('should clear test results', async ({ page }) => {
    // First run some tests to populate results
    await page.click('button:has-text("Run All Tests")');
    await page.waitForSelector('#test-results:not(.hidden)');
    
    // Then clear results
    await page.click('button:has-text("Clear Results")');
    
    // Check that results are hidden
    const testResults = page.locator('#test-results');
    await expect(testResults).toHaveClass(/hidden/);
  });

  test('should handle form input validation', async ({ page }) => {
    // Test invalid email
    await page.fill('#email', 'invalid-email');
    const emailInput = page.locator('#email');
    await expect(emailInput).not.toBeValid();
    
    // Test valid email
    await page.fill('#email', 'test@example.com');
    await expect(emailInput).toBeValid();
    
    // Test required field
    await page.fill('#name', '');
    const nameInput = page.locator('#name');
    await expect(nameInput).not.toBeValid();
    
    await page.fill('#name', 'John Doe');
    await expect(nameInput).toBeValid();
  });

  test('should handle click events', async ({ page }) => {
    const clickButton = page.locator('#click-test-btn');
    const eventLog = page.locator('#event-log');
    
    await clickButton.click();
    
    // Check that event was logged
    await expect(eventLog).toContainText('Button clicked');
  });

  test('should handle input events', async ({ page }) => {
    const inputField = page.locator('#input-test');
    const eventLog = page.locator('#event-log');
    
    await inputField.fill('test input');
    
    // Check that input event was logged
    await expect(eventLog).toContainText('Input changed: test input');
  });

  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE size
    
    // Verify page still loads and functions
    await expect(page.locator('h1')).toBeVisible();
    await page.click('button:has-text("Test Math Operations")');
    
    const result = page.locator('#math-result');
    await expect(result).toHaveClass(/success/);
  });
});
