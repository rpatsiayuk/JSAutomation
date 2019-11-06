"use strict";
const Logger = require("js-logger");
class BasePage {
    constructor() {
    }

    getPageTitle() {
        Logger.info("Get page title " + browser.getTitle());
        return browser.getTitle();
    }

}
module.exports = BasePage;