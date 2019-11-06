"use strict";
const BasePage = require('./BasePage');
const LoginToEmailForm = require('../elements/LoginToEmailForm');
const EmailPage = require('./EmailPage');
const RegistrationAccountPage = require('./RegistrationAccountPage');
const Logger = require("js-logger");
class MailRuHomePage extends BasePage {
    
    constructor() {
        super();
        this.LoginToEmailForm = new LoginToEmailForm();
        this.registrationLink = $("#PH_regLink");
    }

    async openMailRu() {
        await browser.get(browser.baseUrl);
    }

    async loginToEmail(email, domain, password) {
        await this.LoginToEmailForm.loginToEmail(email, domain, password);
        return new EmailPage();
    }

    async clickRegistrationLink() {
        Logger.info("Click on " + this.registrationLink)
        await this.registrationLink.click();
        return new RegistrationAccountPage();
    }

}

module.exports = MailRuHomePage;