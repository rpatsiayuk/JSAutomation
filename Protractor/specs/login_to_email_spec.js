const MailRuHomePage = require('../page_objects/MailRuHomePage');

describe('Login to email page', ()=> {
    const mailRuHomePage = new MailRuHomePage();
    
    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        mailRuHomePage.openMailRu();
    });

    it('should have url is ${browser.baseUrl}', async (done) =>  {
        const url = await browser.getCurrentUrl();
        expect(url).toEqual(browser.baseUrl);
        done();
    });
})