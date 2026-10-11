import { test, expect } from '@playwright/test';

test('Verify the error message in the Wingify Free Trial', async ({ page }) => {
  await page.goto('https://wingify.com/free-trial/', {
    waitUntil: 'domcontentloaded',
    timeout:6000
  });

  const email = page.locator('#free-trial-step1-email');

  await email.fill('dadafs');

  await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox').click();
  await page.locator('#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox').click();
  await page.locator('//button[@data-qa="page-su-submit"]').first().click();
  const errorMessage = page.locator("//div[contains(@class,'invalid-reason')]").first();
  const errorMessageText = await errorMessage.textContent();

  expect(errorMessageText).toContain('The email address you entered is incorrect.');
  await page.pause();
});