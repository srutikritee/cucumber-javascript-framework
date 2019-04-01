module.exports = function() {
  this.Given(/^I am Google page$/, function() {
    return helpers.loadPage(shared.testData.url);
  });

  this.When(/^I search Google for "([^"]*)"$/, function(query) {
    return page.googleSearch.searchQuery(query);
  });

  this.Then(/^I should see more results in the results "([^"]*)"$/, function(
    expectedTitle
  ) {
    return driver.getTitle().then(function(pageTitle) {
      expect(pageTitle).to.contain(expectedTitle);
    });
  });
};
