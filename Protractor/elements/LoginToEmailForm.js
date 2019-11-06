const { selectOptionByText, sendKeys } = require('@hetznercloud/protractor-test-helper');
//import {selectOptionByText} from '@hetznercloud/protractor-test-helper';
class LoginToEmailForm {

    constructor() {
        this.email = $("div.mailbox__login>input");
        this.password = $("#mailbox\\:password");
        this.domain = $("#mailbox\\:domain");
        this.submitButton = $("#mailbox\\:submit > input");
        this.rememberCheckBox = $("#mailbox\\:saveauth");
    };

    async enterEmail(email) {
        await this.email.click().sendKeys(email);
    }

    async selectDomain(domain) {
        await this.domain.click();
        await selectOptionByText(this.domain, domain);
    }

    async loginToEmail(email, domain, password) {
        await this.enterEmail(email);
        await this.selectDomain(domain);
        await this.rememberCheckBox.click();
        await this.submitButton.click();
        await sendKeys(this.password, password);
        await this.submitButton.click();
    }
}

module.exports = LoginToEmailForm;