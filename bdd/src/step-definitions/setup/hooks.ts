// // test.setup.ts
// import { Before, After, ITestCaseHookParameter } from "@cucumber/cucumber";
// // import { devices, chromium } from "playwright";
// // const {chromium} = require("playwright");
// // import { OurWorld } from "./types";
// import { ScenarioWorld } from './world'
// import { env } from '../../env/parseEnv'


// Before(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
//     console.log(`Running cucumber scenario ${scenario.pickle.name}`)

//     const contextOptions = {
//         recordVideo: {
//             dir: `${env('VIDEO_PATH')}${scenario.pickle.name}`,
//         }
//     }

//     const ready = await this.init(contextOptions)
//     return ready
// });

// After(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {

//     const {
//         screen: { page, browser }
//     } = this;

//     const scenarioStatus = scenario.result?.status;

//     if (scenarioStatus === 'FAILED') {
//         const screenshot = await page.screenshot({
//             path: `${env('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
//         });
//         await this.attach(screenshot, 'image/png')
//     }

//     await browser.close();
//     return browser
// });


import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
const { chromium } = require("playwright");

BeforeAll(async () => {
    global.browser = await chromium.launch({
        headless: false,
    })
});

AfterAll(async () => {
    await global.browser.close();

});

Before(async (scenario) => {
    global.context = await global.browser.newContext({
        recordVideo: {
            dir: './reports/videos/' + scenario.pickle.name,
        }
    })
    global.page = await global.context.newPage();

});

After(async () => {
    await global.page.close()
});