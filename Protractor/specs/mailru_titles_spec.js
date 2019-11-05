const MailRuHomePage = require('../page_objects/MailRuHomePage');
const EC = protractor.ExpectedConditions;

describe('Mail.ru home page', ()=> {
    const mailRuHomePage = require('../page_objects/MailRuHomePage');
    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });

    it('should have url is ${browser.baseUrl}', async (done) =>  {
        const url = await browser.getCurrentUrl();
        expect(url).toEqual(browser.baseUrl);
        done();
    });

    it('should have registration title', async (done) => {
        const mailRuHomePage = new MailRuHomePage();
        const registrationAccountPage = await mailRuHomePage.clickRegistrationLink();
        let title = await registrationAccountPage.getPageTitle();
        expect(title).toEqual("Регистрая");
        done();
    })

  });