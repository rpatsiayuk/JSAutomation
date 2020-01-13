const MailRuHomePage = require('../page_objects/MailRuHomePage')
// const EC = protractor.ExpectedConditions;

describe('Mail.ru home page', () => {
  const mailRuHomePage = new MailRuHomePage()

  beforeEach(async () => {
    await mailRuHomePage.openMailRu()
  })

  it('should have url is ${browser.baseUrl}', async () => {
    const url = await browser.getCurrentUrl();
    expect(url).toEqual(browser.baseUrl);
  })

  it('should have registration title', async () => {
    const registrationAccountPage = await mailRuHomePage.clickRegistrationLink();
    const title = await registrationAccountPage.getPageTitle();
    expect(title).toEqual('Регистрация');
  })
})
