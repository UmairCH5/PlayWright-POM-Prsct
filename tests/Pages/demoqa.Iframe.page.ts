import test, { Page, expect } from '@playwright/test'
export class Iframes {
    async Iframecheck(page: Page) {
    await page.goto('https://demoqa.com/alertsWindows')
  await page.getByText('Frames', {exact: true}).click()
  const frame1Heading = page.frameLocator('#frame1').locator('#sampleHeading')
  await expect(frame1Heading).toHaveText('This is a sample page')
  const frame2Heading = page.frameLocator('#frame2').locator('#sampleHeading')
  await expect(frame2Heading).toHaveText('This is a sample page')
  await page.getByText('Nested Frames').click()
  const parentText = await page.frameLocator('#frame1').locator('body').textContent()
  console.log(`Parent frame text: ${parentText?.trim()}`)
  await expect(page.frameLocator('#frame1').locator('body')).toContainText('Parent frame')
  const ChildframText = await page.frameLocator('#frame1').frameLocator('iframe').locator('body').textContent()
  console.log(`Child frame text: ${ChildframText?.trim()}`)
  await expect(page.frameLocator('#frame1').frameLocator('iframe').locator('body')).toHaveText('Child Iframe')
  await page.getByText('Modal Dialogs').click()
  await page.getByRole('button', {name: 'Small modal'}).click()
  await expect(page.locator('[class="modal-title h4"]')).toContainText('Small Modal')
  await expect(page.locator('[class="modal-body"]')).toContainText('This is a small modal. It has very less content')
  await page.locator('[id="closeSmallModal"]').click()
  await expect(page.locator('[id="example-modal-sizes-title-sm"]')).toBeHidden()
  await page.getByRole('button', {name: 'Large modal'}).click()
  await expect(page.locator('[class="modal-title h4"]')).toContainText('Large Modal')
  await page.locator('[id="closeLargeModal"]').click()
  await expect(page.locator('[id="example-modal-sizes-title-lg"]')).toBeHidden()
    }
}