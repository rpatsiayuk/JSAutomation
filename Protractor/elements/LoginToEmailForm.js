const { selectOptionByText, sendKeys } = require('@hetznercloud/protractor-test-helper')
const Logger = require('../logger/Logger')
class LoginToEmailForm {
  constructor () {
    this.email = $('div.mailbox__login>input')
    this.password = $('#mailbox\\:password')
    this.domain = $('#mailbox\\:domain')
    this.submitButton = $('#mailbox\\:submit > input')
    this.rememberCheckBox = $('#mailbox\\:saveauth')
  }

  async enterEmail (email) {
    Logger.info('Enter ' + email + ' in login email field')
    await this.email.click().sendKeys(email)
  }

  async selectDomain (domain) {
    await this.domain.click()
    Logger.info('Select ' + domain + ' from domain drop down')
    await selectOptionByText(this.domain, domain)
  }

  async enterPassword (password) {
    Logger.info('Enter ' + password + ' in password field')
    await sendKeys(this.password, password)
  }

  async clickSubmitButton () {
    Logger.info('Click on submit button')
    await this.submitButton.click()
  }

  async clickOnRememberCheckBox () {
    await this.rememberCheckBox.click()
  }

  async loginToEmail (email, domain, password) {
    await this.enterEmail(email)
    await this.selectDomain(domain)
    await this.clickOnRememberCheckBox()
    await this.clickSubmitButton()
    await this.enterPassword(password)
    await this.clickSubmitButton()
  }
}

module.exports = LoginToEmailForm
