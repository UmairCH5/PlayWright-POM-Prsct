import test, { Page, expect } from '@playwright/test'
import { DemoqaBrokenlink } from '../Pages/Demoqa-brokenlink.page'
test ('Demoqa Brokenlink POM', async({ page }) =>{
const Link = new DemoqaBrokenlink()
await Link.brokenlink(page)
})