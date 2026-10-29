import{test,expect}from '@playwright/test';
test('Amazon Launch',async({page})=>
{
    await page.goto('https://www.amazon.in/');
    const search = page.getByLabel('Search Amazon.in');
    //const search = page.getByPlaceholder('Search Amazon.in');
    //await page.pause();
    await search.fill('laptop');
   // await expect(page.getByPlaceholder('Search Amazon.in')).toHaveValue('laptop');
});
    