import test, { Page, expect } from '@playwright/test'
import { Browserwindow } from "../Pages/Demoqa-alertswindow-Browser.page";
test ('Browserwindow', async({ page }) =>{
    const Tab = new Browserwindow()
    await Tab.window(page)
})