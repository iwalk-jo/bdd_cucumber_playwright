import { Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper';
import { ScenarioWorld } from "../setup/world";
import { waitFor } from '../../support/wait-for-behavior';


Then(
    /^the "([^"]*)" should be displayed$/,
    async function (this: ScenarioWorld, elementKey: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables,
        } = this;

        console.log(`the ${elementKey} should be displayed`)

        // const locator = page.locator("[data-testid='navbar-logo']")

        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig)

        await waitFor(async () => {
            const isElementVisible = (await page.$(elementIdentifier)) != null
            return isElementVisible;
        });

    }
)