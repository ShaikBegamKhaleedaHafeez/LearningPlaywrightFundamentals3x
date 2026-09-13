import {test, expect} from '@playwright/test';
test.skip('test', async({page})=>{
    //never executes
});
test.only('login as Khaleeda', async({page})=>{
    //only this test runs, all other tests are ignored
});
test.fail('cart total is wrong, BUG - 451',async()=>{
    expect(90).toBe(100);
} )
test.fixme('upload 5GB', async()=>{
    //skipped test, will be fixed in future9
});
test('full regression report', async()=>{
    test.slow();
    console.log(test.info().timeout);

});
test('mobile layout', async({page, browserName})=>{
    test.fixme(browserName === 'firefox', 'Firefox does not support mobile layout');
    await page.goto('https://sdet.live');
});