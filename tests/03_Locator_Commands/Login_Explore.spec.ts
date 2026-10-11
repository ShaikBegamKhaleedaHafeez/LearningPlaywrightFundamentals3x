import {test, expect} from '@playwright/test';
test("Login", async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/",{
        waitUntil: 'domcontentloaded',
    });
    let makeAppointmentButton = page.locator("#btn-make-appointment");
    await makeAppointmentButton.click();

    let username = page.locator("#txt-username");
    let password = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");

    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();

    const heading = page.locator('h2',{hasText: 'Make Appointment'});
    await expect(heading).toContainText("Make Appointment");
    await page.pause();
})