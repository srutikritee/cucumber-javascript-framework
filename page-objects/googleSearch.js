module.exports = {
  elements: {
    searchInput: by.name("q")
  },

  getURL: function(url) {
    return driver.get(url);
  },

  searchQuery: function(query) {
    return driver
      .findElement(page.googleSearch.elements.searchInput)
      .sendKeys(query, selenium.Key.ENTER);
  }
};
