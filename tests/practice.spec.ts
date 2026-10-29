import{test,expect}from '@playwright/test';
test('login page',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill('Password123');
    //await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Submit' }).press('Enter');
    // Verify successful login
    await expect(page.getByText('Logged In Successfully')).toBeVisible();
});

test('select option',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    await page.pause();
   // await page.getByLabel('Sort by:').selectOption('col_lang');
    await page.locator('#sortBy').selectOption({label:'Language'});
});

test.only('verfy radio and checkbox',async({page})=>
{
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    await page.pause();

    //radiobutton
    await page.getByLabel('Java').check();
    await expect(page.getByLabel('Java')).toBeChecked();

    //checkbox 1
    await page.getByLabel('Beginner').check();

    //checkbox 2
    await page.getByLabel('Intermediate').check();
    await expect(page.getByLabel('Intermediate')).toBeChecked();

    //checkbox 3 uncheck
    await page.getByLabel('Advanced').uncheck();
     

});

test('verfy logo',async({page})=>
{
    await page.goto('https://playwright.dev/');
    await expect(page.getByAltText('Playwright logo')).toBeVisible(); 

});