class HeaderPage{
    static navigationLink(linkText) {
        return $(`.//nav[@class='slidingNav']//a[text()='${linkText}']`);
    }
}

module.exports = HeaderPage;