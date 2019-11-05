"use strict";
const BasePage = require("./BasePage");
const LoginToEmailForm = require('../elements/LoginToEmailForm');
const RegistrationAccountPage = require('./RegistrationAccountPage')

class MailRuHomePage extends BasePage {

    constructor() {
        super();
        this.LoginToEmailForm = new LoginToEmailForm();
        this.registrationLink = $("#PH_regLink");
    }

    async clickRegistrationLink() {
        await this.registrationLink.click();
        return new RegistrationAccountPage();
    }

}

module.exports = MailRuHomePage;