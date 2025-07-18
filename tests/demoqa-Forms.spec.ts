import { test, expect } from '@playwright/test'
test('Demo QA:', async ({ page }) => {
    test.setTimeout(50000)
    await page.goto('https://demoqa.com/forms')
    await page.getByText('Practice Form').click()
    await page.getByPlaceholder('First Name').fill('Umair')
    await page.getByPlaceholder('Last Name').fill('Anwar')
    await page.getByPlaceholder('name@example.com').fill('umair@gmail.com')
    await page.locator('[class="custom-control-label"]').nth(0).check()
    await page.getByPlaceholder('Mobile Number').fill('03126646427')
    await page.locator('#dateOfBirthInput').click()
    await page.getByRole('option', { name: 'Choose Wednesday, July 16th,' }).click()
    await page.locator('#subjectsInput').fill('Eng')
    await page.locator('#react-select-2-option-0').click()
    await page.waitForTimeout(3000)
    await page.locator('#hobbies-checkbox-1').check({ force: true });
    await page.setInputFiles('[class="form-control-file"]', 'C:/Users/Dell/Desktop/pratc/tests/Screenshot (31).png')
    await page.getByPlaceholder('Current Address').fill('Lahore, Pak')
    await page.getByText('Select State').click()
    await page.locator('#react-select-3-option-0').click()
    await page.getByText('Select City').click()
    await page.getByText('Gurgaon').click()
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect (page.locator('.modal-body')).toBeVisible()
    await expect (page.locator('.modal-body')).toContainText('Umair Anwar')
    await expect (page.locator('.modal-body')).toContainText('umair@gmail.com')
    await expect (page.locator('.modal-body')).toContainText('Male')
    await expect (page.locator('.modal-body')).toContainText('0312664642')
    await expect (page.locator('.modal-body')).toContainText('16 July,2025')
    await expect (page.locator('.modal-body')).toContainText('English')
    await expect (page.locator('.modal-body')).toContainText('Sports')
    await expect (page.locator('.modal-body')).toContainText('Screenshot (31).png')
    await expect (page.locator('.modal-body')).toContainText('Lahore, Pak')
    await expect (page.locator('.modal-body')).toContainText('NCR Gurgaon')
    await page.getByText('Close').scrollIntoViewIfNeeded()
    await page.getByText('Close').click({force: true})
})
