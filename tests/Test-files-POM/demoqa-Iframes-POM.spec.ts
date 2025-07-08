import test, { Page, expect } from '@playwright/test'
import { Iframes } from '../Pages/demoqa.Iframe.page'
test ('Iframes Check', async ({page}) => {
    const Done = new Iframes()
    await Done.Iframecheck(page)
})