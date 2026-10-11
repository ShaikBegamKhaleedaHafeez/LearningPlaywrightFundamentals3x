import {test, expect} from '@playwright/test';
test("verify the error message in the wingify free trail", async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let makeAppointmentBtn = page.getByRole("link", {name: "Make Appointment"});
    await makeAppointmentBtn.click();
    await page.pause();
})