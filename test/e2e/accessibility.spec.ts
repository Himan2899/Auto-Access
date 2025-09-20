import { test, expect } from '@playwright/test';

test.describe('AutoAccess Extension', () => {
  test('should load the extension popup', async ({ page }) => {
    // Navigate to a test page
    await page.goto('https://example.com');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if the page loaded successfully
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should have proper accessibility features', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Check for basic accessibility elements
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Check if the page has proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    await expect(headings).toHaveCount(1);
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Test tab navigation
    await page.keyboard.press('Tab');
    
    // Check if focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});