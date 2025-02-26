// Test written by: James Grant
import { test, expect } from '@playwright/test';


// This test checks if pressing the login button redirects to the spotify login
test('login redirect test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();
  await expect(page).toHaveTitle(/Login - Spotify/i);
});


// This test enters invalid login info
test('invalid login test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();

  await page.getByPlaceholder("Email or username").fill("invalid@email.com");
  await page.getByPlaceholder("Password").fill("abcde");

  await page.getByRole('button', { name: /Log In/i }).click();
  await expect(page).toHaveTitle(/Login - Spotify/i);  // should remain on same page
});


/*
// This test enters valid login info and ensures that it redirects to the authorization page
test('authorization redirect test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();

  await page.getByPlaceholder("Email or username").fill("statify100@gmail.com");
  await page.getByPlaceholder("Password").fill("StatifyIsVeryAwesome3000");

  await page.getByRole('button', { name: /Log In/i }).click();
  await expect(page).toHaveTitle(/Authorize - Spotify/i);
});
*/