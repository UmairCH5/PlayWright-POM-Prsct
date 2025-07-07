import { test, expect } from '@playwright/test'
test('Demoqa-BrokenLink', async({page}) =>{
    await page.goto('https://demoqa.com/broken')
    await page.getByText('Click Here for Broken Link').getAttribute('href')
    await page.getByText('Click Here for Broken Link').getAttribute('href')
    const validLinkResponse = page.request.get('https://demoqa.com/')
    console.log(`Valid Link status: ${(await validLinkResponse).status()}`)
    expect((await validLinkResponse).status()).toBeLessThan(400)
    const brokenLinkRespone = page.request.get('http://the-internet.herokuapp.com/status_codes/500')
    console.log(`Broken link status: ${((await brokenLinkRespone).status)}`)
    expect((await brokenLinkRespone).status()).toBeGreaterThanOrEqual(400)
})