// // step-definitions/homepage.ts
// import { Given, When, Then } from "@cucumber/cucumber";
// import assert from "assert";
// import { OurWorld } from "../types";
// Given('I am on the {string} section', async function (this: OurWorld, url: string) {
//     // Write code here that turns the phrase above into concrete actions
//     await this.page.goto(`https://${url}`);
// });
// When(/^When I click '([^']*)'$/, async function (this: OurWorld, text: string) {
//     // Write code here that turns the phrase above into concrete actions
//     await this.page.$eval(`"${text}"`, (element) => {
//         element.scrollIntoView();
//     });
//     await this.page.click(`"${text}"`);
// });
// Then('I expect to be on the Guidance and regulation page', async function (this: OurWorld) {
//     const heading1Text = (await this.page.textContent("h1")) as string;
//     assert.strictEqual(
//         trimExcessWhiteSpace(heading1Text),
//         "Guidance and regulation"
//     );
// });
// // textContent includes whitespace, so use this method to trim
// // See https://stackoverflow.com/a/42921059
// const trimExcessWhiteSpace = (s: string) =>
//     s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
"use strict";