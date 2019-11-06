class LoginToEmailForm {

    constructor() {
        this.email = $("#mailbox\:login");
        this.password = $("#mailbox\:password");
        this.domain = $("#mailbox\:domain");
        this.submitButton = $("#mailbox\:submit > input");
        this.rememberCheckBox = $("#mailbox\:saveauth")
    };

    async loginToEmail(){
        await this.email.sendKeys("test_user2017");
        await this.domain.selectOptionByText("@mail.ru")
        await browser.actions().mouseMove(this.rememberCheckBox).click().perform();
    }

}

module.exports = LoginToEmailForm;