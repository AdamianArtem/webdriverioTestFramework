const MainComponent = require('../components/main-component');
const HeaderComponent = require('../components/header-component');

describe('Basic webdriver.io tests', () => {

    it('Main page should have the right title', () => {
        new MainComponent().assertThatTitleIsCorrect();
    });

    it('A new page should be opened after navigating', () => {
        new HeaderComponent()
            .openLink('GitHub')
            .assertThatPageIsOpened('github');
    });
});