const MailRuHomePage = require('../page_objects/MailRuHomePage');

describe('Login to email page', ()=> {
    const mailRuHomePage = new MailRuHomePage();
    
    beforeEach(async (done) => {
        await browser.manage().deleteAllCookies();
        mailRuHomePage.openMailRu();
        done();
    });

    it('should have title', async (done) =>  {
        const emailPage = await mailRuHomePage.loginToEmail("test_user2017", "@mail.ru", "Password123");
        const title = await emailPage.getPageTitle();
        expect(title).toContain("Входящие - Почта Mail.ru");
        done();
    });
})