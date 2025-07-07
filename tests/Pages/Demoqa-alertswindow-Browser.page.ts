import test, { Page, expect } from '@playwright/test'
export class Browserwindow {
    async window(page: Page) {
          await page.goto('https://demoqa.com/alertsWindows')
            await page.getByText('Browser Windows').click()
            const [newpage] = await Promise.all([
                page.waitForEvent('popup'),
                page.getByRole('button', {name: 'New Tab'}).click()
            ])
            await newpage.waitForLoadState()
            await expect(newpage).toHaveURL('https://demoqa.com/sample')
            await newpage.close() 
            
            const [newWindow] = await Promise.all([
                page.waitForEvent('popup'),
                page.locator('[id="windowButton"]').click()
            ])
            await newWindow.waitForLoadState()
            await expect(newWindow).toHaveURL('https://demoqa.com/sample')
            await newWindow.close()
            const [newwindowmsg] = await Promise.all([
                page.waitForEvent('popup'),
                page.locator('[id="messageWindowButton"]').click()
            ])
            await newwindowmsg.waitForLoadState()
            await expect(newwindowmsg).toHaveURL('https://demoqa.com/browser-windows')
            await newwindowmsg.close()
        }
    }

