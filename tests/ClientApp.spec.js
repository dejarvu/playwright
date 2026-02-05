const {test, expect} = require('@playwright/test')

test('Login page test', async({page})=>

{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('ayodeji@mailsac.com');
    await page.locator('#userPassword').fill('Ayodeji123#');
    await page.locator("[value = 'Login']").click();

    await page.waitForLoadState('networkidle');
    //await page.locator('.card-body b').first().waitFor(); 
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);


     await page.pause();
});
