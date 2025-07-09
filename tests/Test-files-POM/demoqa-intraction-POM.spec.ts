import test, { Page, expect } from '@playwright/test'
import { Intractions } from '../Pages/deoqa-intreactions.page'
test ('Demoqa intraction', async({page}) =>{
    const done = new Intractions()
    await done.drag(page)
})