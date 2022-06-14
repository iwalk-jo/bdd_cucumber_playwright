"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
// import dotenv from 'dotenv'
// import { env } from './env/parseEnv'
// dotenv.config({ path: env('COMMON_CONFIG_FILE') })
// const common = `./features/**/*.feature \
//                 --require-module ts-node/register \
//                 --require ./src/step-definitions/**/**/*.ts \
//                 -f json:./reports/report.json \
//                 --format progress-bar`;
// const dev = `${common} --tags '@dev'`;
// const smoke = `${common} --tags '@smoke'`;
// const regression = `${common} --tags '@regression'`;
// export { dev, smoke, regression }
var common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 -f json:./reports/report.json                 --format progress-bar";
var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");
exports.regression = regression;