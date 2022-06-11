import { Given } from '@cucumber/cucumber'


Given(
    /^I am on the login page$/,
    async function () {

        console.log("I am on the login page");

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