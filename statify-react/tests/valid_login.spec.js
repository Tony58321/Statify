// Test written by Antonio Rodriguez

import { test, expect } from '@playwright/test';

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

  // Ensure the login was successful
  await expect(page.locator('text=Welcome, statify')).toBeVisible();
});


// import { test } from '@playwright/test';
// import fs from 'fs';

// test('Save Spotify Login Session', async ({ page }) => {
//   await page.goto('https://accounts.spotify.com/en/login');

//   console.log("PAUSE - Manually log in to Spotify now.");
//   await page.pause(); // Manually enter login credentials

//   // Save session (cookies + local storage)
//   const storageState = await page.context().storageState();
//   fs.writeFileSync('spotify-session.json', JSON.stringify(storageState));
// });
