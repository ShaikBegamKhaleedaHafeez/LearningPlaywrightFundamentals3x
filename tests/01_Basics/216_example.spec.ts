import { test, expect } from '@playwright/test';

// // test('has title', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Playwright/);
// // });

// test('test', async ({ page }) => {
//   await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
//   await page.getByRole('textbox', { name: 'Email Address' }).click();
//   await page.getByRole('textbox', { name: 'Email Address' }).fill('kdklajasd');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('djlaksj');
// });

test('viewer', async({page})=>{
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('admin', async({page})=>{
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
})