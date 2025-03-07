// // Test written by Antonio Rodriguez
import { test, expect } from '@playwright/test';

test('authorization redirect test', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Click "Log in with Spotify"
  await page.getByRole('button', { name: /Log in with Spotify/i }).click();

  // Force Playwright to pause before continuing
  console.log("PAUSE - Manually enter login details");
  await page.pause(); // Playwright will stop here and let you manually enter credentials

  // Resume test execution after manual login by pressing play
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
