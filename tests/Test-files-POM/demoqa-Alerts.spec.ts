import test, { Page, expect } from '@playwright/test'
import { Alerts } from '../Pages/demoqa-Alerts.page'
test('Demoqa Alerts', async( {page} )=> {
const Do = new Alerts()
await Do.Check(page)
})