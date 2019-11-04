"use strict";
const BasePage = require("./BasePage");

class RegistrationAccountPage extends BasePage{

    constructor() {
        this.title = super().getPageTitle();
    }

    getRegistrationAccountPageTitle() {
        return this.title
    }
}

module.exports = RegistrationAccountPage;