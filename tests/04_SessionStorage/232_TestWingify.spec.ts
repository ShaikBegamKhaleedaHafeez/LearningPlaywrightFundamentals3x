import {test, expect} from '@playwright/test';

//Load the saved session
test.use({
    storageState : './user-session.json'
})

test("go directly to dashboard - no login", async({page})=>{
    await page.goto("https://app.wingify.com/#/dashboard/");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded - no login needed");
    await page.waitForTimeout(3000);
})