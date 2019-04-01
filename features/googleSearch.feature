@search
Feature: Searching for vote cards app
    As an internet user
    In order to find out more about the itunes vote cards app
    I want to be able to search for information about the itunes vote cards app

    Scenario Outline: Google search for vote cards app
        Given I am Google page
        When I search Google for "<query>"
        Then I should see more results in the results "<expectedTitle>"

        Examples:
            | query    | expectedTitle            |
            | selenium | selenium - Google Search |
            | testing  | testing - Google Search  |

