import {test, expect} from '@playwright/test'
test("Verify URL after Logging in with Invalid Credentials", async({page})=>{
    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter",
        {
            waitUntil: 'domcontentloaded',
            timeout: 50000
        }
    )
    let username = page.locator("#email");
    let password = page.locator("#password");
    await username.fill("afdsfds@gmail.com");
    await password.fill("dasfsd");

    let loginButton = page.locator("#password");
    await loginButton.click();
    let rememberMe = page.locator("//input[@name='remember']");
    await rememberMe.click();
    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.pause();

})