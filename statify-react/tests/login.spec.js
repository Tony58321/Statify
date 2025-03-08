// Test written by: James Grant
import { test, expect } from '@playwright/test';


// This test checks if pressing the login button redirects to the authorization page (since we are using a saved session)
test('login redirect test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();
  await expect(page).toHaveTitle(/Authorize - Spotify/i);
});


// This test checks if pressing the "not you?" button redirects to the spotify login
test('not you redirect test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();
  await page.getByText('Not you?').click();
  await expect(page).toHaveTitle(/Login - Spotify/i);
});


// This test enters invalid login info
test('invalid login test', async ({ page }) => {
  // Start from the statify welcome page
  await page.goto('http://localhost:5173');
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();

  // Now we are on the Spotify authorize page, since we had a saved session
  await page.getByText('Not you?').click();

  // now we are on the Spotify Login page
  await page.getByPlaceholder("Email or username").fill("invalid@email.com");
  await page.getByPlaceholder("Password").fill("abcde");

  await page.getByRole('button', { name: /Log In/i }).click();
  await expect(page).toHaveTitle(/Login - Spotify/i);  // should remain on same page
});


