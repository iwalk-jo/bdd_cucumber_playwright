import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Then(
    /^the "([^"]*)" page should contain the text "(.*)"$/,
    async function (elementKey: string, expectedElementText: string) {
        const {
            screen: { page },
        } = this;

        console.log(`the ${elementKey} page should contain the text ${expectedElementText}`)

        const content = await page.textContent("[data-testid='sign-up-btn']")

        expect(content).toBe(expectedElementText)
    }
)


Then(
    /^the text "([^"]*)" should be displayed$/,
    async function (elementKey: string) {
        const {
            screen: { page },
        } = this;

        console.log(`the text ${elementKey} should be displayed`)

        const locator = page.locator("[data-testid='login-form']")

        await expect(locator).toBeVisible();
    }
)