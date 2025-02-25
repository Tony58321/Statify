// Test written by: Antonio Rodriguez
// This test checks if the page loads correctly and has the correct title
import { test, expect } from '@playwright/test';

test('page load test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000); // Give it 3 seconds to render
  await expect(page).toHaveTitle(/Statify/i);
});