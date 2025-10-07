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

  test('should run math operations test', async ({ page }) => {
    await page.click('button:has-text("Test Math Operations")');
    
    const result = page.locator('#math-result');
    await expect(result).toHaveClass(/success/);
    await expect(result).toContainText('Math Operations Test Passed');
  });
});
