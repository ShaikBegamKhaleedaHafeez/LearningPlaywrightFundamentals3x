import {test,expect} from '@playwright/test';
// <input type="email"
// class="text-input W(100%)"
// name="username"
//  vwo-html-translate-attr="placeholder"
// vwo-html-translate-placeholder="login:enterEmailID"
//  id="login-username"
//  data-qa="hocewoqisi"
// placeholder="Enter email ID">

//default locators : id, name, class, tagname,custom locator
//CSS selector
//id -> #id
//className -> .
//name -> [name='value']
//Tag -> [tag]
test('Verify Login Page', async({page})=>{
    await page.goto("https://app.vwo.com/#/login", {
        waitUntil: 'domcontentloaded',
        timeout: 6000,
        referer: "https://sdet.live"
    });
    let userName = page.locator("#login-username");
    let password = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");
    await userName.fill("abc@gmail.com");
    await password.fill("pass123");
    await loginButton.click();
    // page.waitForTimeout(5000);

    let errorMsg = page.locator("#js-notification-box-msg");
    await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");
    await page.pause();

})
