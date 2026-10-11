import {test, expect} from '@playwright/test';
test("verify the error message in the wingify free trail", async({page})=>{
    await page.goto("https://app.wingify.com/#/login");
    let username =  page.getByRole("textbox",{name: "Email"});
    let password =  page.getByRole("textbox",{name: "Password"});
    await username.fill('admin@vwo.com');
    await password.fill('12345');
    await page.pause();
})