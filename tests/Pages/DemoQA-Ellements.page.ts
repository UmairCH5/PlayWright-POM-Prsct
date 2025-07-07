import { Page, expect } from '@playwright/test'

export class DemoqaEllementPage {
  async goto(page: Page) {
    await page.goto('https://demoqa.com/elements')
  }
  async TextBox(page: Page) {
    await page.getByText('Text Box').click()
    await page.getByPlaceholder('Full Name').fill('Umair Anwar')
    await page.getByPlaceholder('name@example.com').fill('umair@gmail.com')
    await page.getByPlaceholder('Current Address').fill('Lahore, Pak')
    await page.locator('#permanentAddress').fill('Burewala')
    await page.getByRole('button', { name: 'Submit' }).click()
  }
  async CheckBox(page: Page) {
      await page.getByText('Check Box').click()
    await page.getByRole('button', { name: 'Toggle' }).click()
    await page.getByText('Home').check()
  }
  async RadioButton(page: Page) {
     await page.getByText('Radio Button').click()
    await page.locator('.custom-control-label').nth(1).check()
    await page.locator('.custom-control-label').nth(0).check()
  }
  async WebTables(page: Page) {
     await page.getByText('Web Tables').click()
    await page.getByRole('button', { name: 'Add' }).click()
    await page.getByPlaceholder('First Name').fill('Umair')
    await page.getByPlaceholder('Last Name').fill('Anwar')
    await page.getByPlaceholder('name@example.com').fill('umair@mil.com')
    await page.getByRole('textbox', { name: 'Age' }).fill('23')
    await page.getByRole('textbox', { name: 'Salary' }).fill('1000')
    await page.getByRole('textbox', { name: 'Department' }).fill('SQA')
    await page.getByRole('button', { name: 'Submit' }).click()
    await page.locator('#delete-record-2').click()
  }
  async Buttons(page: Page) {
     await page.getByText('Buttons').click()
    await page.getByRole('button', { name: 'Double Click Me' }).dblclick()
    await page.locator('#rightClickBtn').click({ button: 'right' })
    await page.getByRole('button', { name: 'Click Me', exact: true }).click()
    await page.getByText('Upload and Download').click()
    await page.locator('#downloadButton').click()
    await page.setInputFiles('.form-control-file', 'C:/Users/Dell/Desktop/pratc/tests/Screenshot (31).png')
    await page.getByText('Dynamic Properties').click()
    await page.getByText('Color Change').click()
  }
}