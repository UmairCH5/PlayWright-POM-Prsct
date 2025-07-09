import test, { Page, expect } from '@playwright/test'
export class Alerts {
    async Check(page: Page) {
        test.setTimeout(60000)
         await page.goto('https://demoqa.com/alertsWindows')
    await page.getByText('Alerts', {exact: true}).click()
    page.once('dialog', async dialog=> {
        console.log(`Immidiate alert: ${dialog.message()}`)
        await dialog.accept()
    })
    await page.locator('[id="alertButton"]').click()
    page.once('dialog', async dialog=> {
        console.log(`Alert after 5 sec: ${dialog.message()}`)
        await dialog.accept()
    })
    await page.locator('[id="timerAlertButton"]').click()
    await page.waitForTimeout(6000)
    page.once('dialog', async dialoge=> {
        console.log(`Confirm box: ${dialoge.message()}`)
        await dialoge.accept()
    })
    await page.locator('[id="confirmButton"]').click()
    page.once('dialog', async dialog=> {
        console.log(`prompt box: ${dialog.message()}`)
        await dialog.accept('Umair')
    })
    await page.locator('[id="promtButton"]').click()
    }
}