import test, { Page, expect } from '@playwright/test'
import { Widgets } from '../Pages/demoqa-widgets.page'
test ('demoqa widgets', async( {page} ) => {
const widgetDone = new Widgets()
await widgetDone.widget(page)
})