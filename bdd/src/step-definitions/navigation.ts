import { Given } from '@cucumber/cucumber'


Given(
    /^I am on the "([^"]*)" page$/,
    async function (pageId: string) {

        console.log(`I am on the ${pageId} page`);

        await global.page.goto("http://twomatches.local:3000/login")
    }
)

// Given(
//     /^I am on the "([^"]*)" page$/,
//     async function (loginId: string) {
//         const {
//             screen: { page },
//         } = this

//         console.log(`I am on the ${loginId} page`);

//         await page.goto("http://twomatches.local:3000/login")
//     }
// )