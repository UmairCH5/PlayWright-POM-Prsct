import { test, expect } from '@playwright/test'
test('all iterection task', async ({ page }) => {
    await test.setTimeout(50000)
    await page.goto('https://demoqa.com/interaction')
    await page.getByText('Sortable').click()
    const Listelement1 = await page.getByLabel('List').getByText('One')
    const Listelement2 = await page.getByLabel('List').getByText('Five')
    await Listelement1.dragTo(Listelement2)
    const Allelement = await page.locator('.list-group-item list-group-item-action').allTextContents()
    console.log('new order:', Allelement)
    await page.getByText('Grid').click()
    const Gridelement1 =await page.getByLabel('grid').getByText('One')
    const Gridelement2 =await page.getByLabel('grid').getByText('Five')
    await Gridelement1.dragTo(Gridelement2)
    const Gridall = await page.locator('.list-group-item list-group-item-action').allTextContents()
    console.log('new order', Gridall)
    await page.getByText('Selectable').click()
    await page.getByLabel('list').getByText('Cras justo odio').click()
    await expect(page.getByText('Cras justo odio')).toBeVisible()
    await page.getByText('Grid').click()
    await page.getByLabel('grid').getByText('Five').click()
    await expect(page.getByLabel('grid').getByText('Five')).toBeVisible()
    await page.getByText('Resizable').click()
    await page.evaluate(() => {
    const box = document.getElementById('resizableBoxWithRestriction')
    if (box) {
      box.style.width = '500px'
      box.style.height = '300px'
    }
    })
    const box = await page.locator('#resizableBoxWithRestriction')
    const size = await box.boundingBox()
    if (size?.width === 500 && size?.height === 300) {
    console.log('Box resized successfully.')
    } else {
    console.error('Box resize failed.')
   }
   await page.getByText('Droppable').click()
   const Drag = await page.getByText('Drag me', {exact: true})
   const Drop = await page.locator('[class="drop-box ui-droppable"]').nth(0)
   await Drag.dragTo(Drop)
   await page.getByText('Accept', {exact: true}).click()
   const accept = await page.getByText('Acceptable', { exact: true })
   const Decline = await page.getByText('Not Acceptable')
   const drop1 = await page.getByRole('tabpanel', { name: 'Accept' }).locator('#droppable')
   await accept.dragTo(drop1)

})