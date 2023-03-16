Feature: Exchange Rates API

  Scenario: Get exchange rates for a valid currency
    Given I have a valid API access key
    When I make a request to the latest endpoint with a valid base currency
    Then the response should have a 200 status code
    And the response should include exchange rates for the specified currency

  Scenario: Get exchange rates for an invalid currency
    Given I have a valid API access key
    When I make a request to the latest endpoint with an invalid base currency
    Then the response should have a 400 status code

  Scenario: Get exchange rates with an invalid API access key
    When I make a request to the latest endpoint with an invalid API access key
    Then the response should have a 401 status code

  Scenario: Get exchange rates with an exceeded API request limit
    Given I have a valid API access key
    When I make requests to the latest endpoint with an exceeded limit
    Then the response should have a 403 status code

  Scenario: Get exchange rates for an invalid endpoint
    When I make a request to an invalid endpoint
    Then the response should have a 404 status code
