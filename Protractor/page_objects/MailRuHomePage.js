"use strict";
const BasePage = require("./BasePage");
const LoginToEmailForm = require('../elements/LoginToEmailForm');
const RegistrationAccountPage = require('./RegistrationAccountPage')

class MailRuHomePage extends BasePage {

    constructor() {
        super();
        this.LoginToEmailForm = new LoginToEmailForm();
        this.registrationLink = element(by.id("PH_regLink"));
    }

    clickRegistrationLink() {
        this.registrationLink.click();
        return new RegistrationAccountPage();
    }

}

module.exports = MailRuHomePage;