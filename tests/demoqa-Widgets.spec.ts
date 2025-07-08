import { test, expect } from '@playwright/test'
test ('demoqa widgets', async( {page} ) => {
    test.setTimeout(800_000)
    await page.goto('https://demoqa.com/widgets')
    await page.getByText('Accordian').click()
    await page.locator('[id="section1Heading"]').click()
    await expect(page.locator('[id="section1Content"]')).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
    await page.locator('[id="section2Heading"]').click()
    await expect(page.locator('[id="section2Content"]')).toContainText('Contrary to popular belief, Lorem Ipsum is not simply random text.')
    await page.locator('[id="section3Heading"]').click()
    await expect(page.locator('[id="section3Content"]')).toContainText('It is a long established fact that a reader will be distracted')
    await page.getByText('Auto Complete').click()
    const multipleInput = page.locator('#autoCompleteMultipleContainer input')
    await multipleInput.fill('red')
    await multipleInput.press('Enter')
    await multipleInput.fill('blue')
    await multipleInput.press('Enter')
    const tags = page.locator('.auto-complete__multi-value__label')
    await page.waitForTimeout(1000)
    await expect(tags).toHaveText(['Red', 'Blue'])
    const Singlecontainer = page.locator('#autoCompleteSingleContainer input')
    await Singlecontainer.fill('red')
    await Singlecontainer.press('Enter')
    const Tags1 = page.locator('.auto-complete__single-value')
    await expect(Tags1).toHaveText('Red')
    await page.getByText('Date Picker').click()
    await page.locator('#datePickerMonthYearInput').click()
    await page.getByRole('option', { name: 'Choose Friday, July 18th,' }).click()
    await page.locator('[id="dateAndTimePickerInput"]').click()
    await page.getByRole('option', {name: 'Choose Friday, July 18th, 2025'}).click()
    await page.getByText('17:00').click()
    await expect(page.locator('#dateAndTimePickerInput')).toHaveValue('July 18, 2025 5:00 PM')
    await page.getByText('Slider').click()
    const slider = page.getByRole('slider') 
    await slider.focus()
    const CurrentValue = await slider.inputValue()
    const initialValue = parseInt(CurrentValue)
    const TargetValue = 80
    for (let i = initialValue; i<TargetValue; i ++) {
        await slider.press('ArrowRight')  
    }
    await expect(page.locator('[id="sliderValue"]')).toHaveValue('80')
    await page.getByText('Progress Bar').click()
    const startstopbtn = page.locator('#startStopButton')
    const progressbar = page.locator('#progressBar')
    await startstopbtn.click()
    await page.waitForTimeout(4000)
    await startstopbtn.click()
    await page.getByText('Tabs').click()
    await page.click('#demo-tab-what')
    await expect(page.locator('[class="tab-content"]')).toBeVisible()
    await expect(page.locator('[class="tab-content"]')).toContainText(
    'Lorem Ipsum is simply dummy text of the printing')
    await page.click('#demo-tab-origin')
    await expect(page.locator('[class="tab-content"]')).toBeVisible()
    await expect(page.locator('[class="tab-content"]')).toContainText(
    'Contrary to popular belief, Lorem Ipsum is not simply random text')
    await page.click('#demo-tab-use')
    await expect(page.locator('[class="tab-content"]')).toBeVisible()
    await expect(page.locator('[class="tab-content"]')).toContainText(
    'It is a long established fact that a reader will be distracted')
    await page.getByText('Tool Tips').click()
    await page.locator('#toolTipButton').hover()
    await expect(page.locator('[class="tooltip-inner"]')).toBeVisible()
    await page.waitForTimeout(500)
    await page.locator('#toolTipTextField').hover()
    await expect(page.locator('[class="tooltip-inner"]')).toBeVisible()
    await page.waitForTimeout(500)
    await page.getByText('Contrary').hover()
    await expect(page.locator('[class="tooltip-inner"]')).toBeVisible()
    await page.getByText('Menu', {exact: true}).click()
    const mainItem1 = page.getByRole('link', { name: 'Main Item 1' });
    await mainItem1.hover();
    await expect(mainItem1).toBeVisible();
    const mainItem2 = page.getByRole('link', { name: 'Main Item 2' });
    await mainItem2.click();
    await expect(mainItem2).toBeVisible();
    const mainItem3 = page.getByRole('link', { name: 'Main Item 3' });
    await mainItem3.hover();
    await expect(mainItem3).toBeVisible();
    await page.getByText('Select Menu').click()
    await page.locator('#withOptGroup').click()
    await page.getByText('Group 1, option 1', { exact: true }).click()
    await page.locator('#selectOne').click()
    await page.getByText('Mrs.').click()
    await page.locator('#oldSelectMenu').click()
    await page.selectOption('#oldSelectMenu', '2')
    await page.getByText('Select...', {exact: true})
    await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click()
    await page.locator('#react-select-6-option-0').click()
    await page.locator('#react-select-6-option-1').click()
    await page.locator('#react-select-6-option-2').click()

})