import test, { Page, expect } from '@playwright/test'
import { DemoqaFormPage } from '../Pages/Demoqa-form.page'

test ('Demoqa-Form-POM', async ({ page }) => {
    const FormPage = new DemoqaFormPage()
    await FormPage.goto(page)
    await FormPage.FillForm(page)
    await FormPage.SubmitForm(page)
    await FormPage.AssertionForm(page)
    await FormPage.CloseForm(page)
})