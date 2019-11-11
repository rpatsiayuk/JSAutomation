const MailRuHomePage = require('../page_objects/MailRuHomePage');
const EC = protractor.ExpectedConditions;

describe('Login to email page', () => {
    const mailRuHomePage = new MailRuHomePage();

    beforeEach(async (done) => {
        await mailRuHomePage.openMailRu();
        done();
    });

    it('should have title', async () => {
        const emailPage = await mailRuHomePage.loginToEmail("test_user2017", "@mail.ru", "Password123");
        await browser.wait(EC.titleIs("Входящие - Почта Mail.ru"), 10000);
        let title = await emailPage.getPageTitle();
        expect(title).toContain("Входящие - Почта Mail.ru");
    });
})