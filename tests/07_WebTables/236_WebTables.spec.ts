import { test, expect } from '@playwright/test';
import type { Locator } from '@playwright/test';
test('Verify the TestCase', async({page})=>{
	await page.goto("https://app.thetestingacademy.com/playwright");


	await page.pause();
})
