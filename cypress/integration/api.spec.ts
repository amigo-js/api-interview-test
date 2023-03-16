describe('Exchange Rates API', function () {
  const baseCurrency = 'USD'

  it('should return 200 status code for latest endpoint', function () {
    cy.request({
      method: 'GET',
      url: `https://api.apilayer.com/exchangerates_data/latest?access_key=${Cypress.env('API_KEY')}&base=${baseCurrency}`
    })
    .its('status')
    .should('eq', 200)
  })

  it('should return 400 status code for invalid base currency', function () {
    cy.request({
      method: 'GET',
      url: `https://api.apilayer.com/exchangerates_data/latest?access_key=${Cypress.env('API_KEY')}&base=INVALID`
    })
    .its('status')
    .should('eq', 400)
  })

  it('should return 401 status code for missing or invalid API access key', function () {
    cy.request({
      method: 'GET',
      url: 'https://api.apilayer.com/exchangerates_data/latest?access_key=INVALID&base=USD'
    })
    .its('status')
    .should('eq', 401)
  })

  it('should return 403 status code for exceeding API request limit', function () {
    cy.request({
      method: 'GET',
      url: `https://api.apilayer.com/exchangerates_data/latest?access_key=${Cypress.env('API_KEY')}&base=${baseCurrency}`,
      headers: {
        'x-api-key': 'INVALID'
      }
    })
    .its('status')
    .should('eq', 403)
  })

  it('should return 404 status code for invalid endpoint', function () {
    cy.request({
      method: 'GET',
      url: 'https://api.apilayer.com/exchangerates_data/invalid_endpoint'
    })
    .its('status')
    .should('eq', 404)
  })
})
