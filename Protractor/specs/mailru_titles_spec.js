const mailRuHomePage = require('../page_objects/MailRuHomePage');
const EC = protractor.ExpectedConditions;

describe('Mail.ru home page', ()=> {
    const mailRuHomePage = require('../page_objects/MailRuHomePage');
    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });

    it('should have url is ${browser.baseUrl}', async () =>  {
        const url = await browser.getCurrentUrl();
        expect(url).toEqual(browser.baseUrl);
    });

    it('should have registration title', async () => {
        //const mailRuHomePage = new MailRuHomePage();
        const registrationAccountPage = mailRuHomePage.clickRegistrationLink();
        let title = registrationAccountPage.getRegistrationAccountPageTitle();
        expect(title).toEqual("Регистрация");
    })

  });