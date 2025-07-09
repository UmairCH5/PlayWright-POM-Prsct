import test, { Page, expect } from '@playwright/test'
import { DemoqaEllementPage } from '../Pages/DemoQA-Ellements.page'

test ('Demoqa Ellement POM', async({ page }) =>{
    const EllementPage = new DemoqaEllementPage()
    await EllementPage.goto(page)
    
})