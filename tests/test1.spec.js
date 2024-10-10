// await page.goto('https://letcode.in/table');
import{test,expect} from '@playwright/test';
let valitem = "man@letcode.in";
//test.describe.configure({mode:"parallel"})


test("@web Trial Run ",async({page})=>{

    


    await page.goto('https://letcode.in/table');
    let rowcnt = await page.locator('#simpletable tbody tr').count();
    console.log(rowcnt);

    for(let i=0;i<rowcnt;i++)
    {
       let content =  await page.locator('#simpletable tbody tr').nth(i).textContent();
       console.log(content);
       if(content.includes(valitem))
       {
        await page.locator('#simpletable tbody tr').nth(i).locator('[type="checkbox"]').click()
        expect(await page.locator('#simpletable tbody tr').nth(i).locator('[type="checkbox"]')).toBeChecked();
       }

       
    }

});

test("@API checkparallel",async()=>{

    console.log("Test for parallel");
});

