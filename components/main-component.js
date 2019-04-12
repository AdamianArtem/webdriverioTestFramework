const assert = require('assert');
const MainPage = require('../pages/main-page');
const assertMessage = 'WebdriverIO';

class MainComponent{

    constructor() {
        browser.url('/');
    }

    getTitle() {
        return MainPage.title().getText();
    }

    assertThatTitleIsCorrect() {
        return assert.equal(this.getTitle(), assertMessage);
    }
}

module.exports = MainComponent;