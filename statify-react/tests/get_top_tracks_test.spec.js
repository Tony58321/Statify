//Test written by Aaron P.
import { test, expect } from '@playwright/test';



//This section is borrowed from Antonio's valid_login.spec.js test 
/*************************************************************************************/
test('authorization redirect test', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Click "Log in with Spotify"
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();

  // Wait for the Spotify authorization page to load
  await page.waitForURL(/accounts\.spotify\.com\/en\/authorize/);

  // Click the "Agree" button automatically
  await page.getByRole('button', { name: /Agree/i }).click();

  // Wait for redirect back to the app
  await page.waitForURL(/localhost:5173\/callback/);

  
  // Click the "Tracks" button automatically
  await page.getByRole('button', { name: /Tracks/i }).click();
  //populate number field so we get the top 5 tracks over last 4 weeks
  await page.fill('input[id="input-amount"]', '5');
  //next press the button to fetch the top tracks
  await page.getByRole('button', { name: /Get Top Tracks/i }).click();

  
  
  // Search to see if the tracks test is there
  await expect(page.locator('text=1.')).toBeVisible();
  await expect(page.locator('text=2.')).toBeVisible();
  await expect(page.locator('text=3.')).toBeVisible();
  await expect(page.locator('text=4.')).toBeVisible();
  await expect(page.locator('text=5.')).toBeVisible();
});
/*************************************************************************************/
