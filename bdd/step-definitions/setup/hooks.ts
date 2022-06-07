// test.setup.ts
import { Before, After, ITestCaseHookParameter } from "@cucumber/cucumber";
// import { devices, chromium } from "playwright";
// const {chromium} = require("playwright");
// import { OurWorld } from "./types";
import { ScenarioWorld } from './world'


Before(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    console.log(`Running cucumber scenario ${scenario.pickle.name}`)

    const contextOptions = {
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name,
        }
    }

    const ready = await this.init(contextOptions)
    return ready
});

After(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {

    const {
        screen: { page, browser }
    } = this;

    const scenarioStatus = scenario.result?.status;

    if (scenarioStatus === 'FAILED') {
        await page.screenshot({
            path: './reports/screenshots/${scenario.pickle.name}.png'
        });
    }

    await browser.close();
    return browser
});

// Create a new test context and page per scenario
// Before(async function (this: OurWorld) {
//     // const pixel2 = devices["Pixel 2"];
//     this.context = await global.browser.newContext({
//         // viewport: pixel2.viewport,
//         // userAgent: pixel2.userAgent,
//     });
//     this.page = await this.context.newPage();
// });


// // Cleanup after each scenario
// After(async function (this: OurWorld) {
//     await this.page.close();
//     await this.context.close();
// });