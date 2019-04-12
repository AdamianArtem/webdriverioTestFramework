const assert = require('assert');
const HeaderPage = require('../pages/header-page');

class HeaderComponent{

    constructor() {
        browser.url('/');
    }

    openLink(linkTitle) {
        HeaderPage.navigationLink(linkTitle).click();
        return this;
    }

    assertThatPageIsOpened(text) {
        return assert.equal(browser.getUrl().includes(text), true);
    }
}

module.exports = HeaderComponent;