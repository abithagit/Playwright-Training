import{test,expect}from'@playwright/test';
test('Google Launch',async({page})=>
{
    await page.goto('https://www.google.com/');
});

test('Verify Title',async({page})=>
{
    await page.goto('https://www.google.com/');
    //await expect(page).toHaveTitle(/Google/);
    console.log(await page.title());
});
