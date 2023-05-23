import selector from '../fixtures/selectors';

describe('homepage correct view', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('homepage visible', () => {
    cy.contains('Идём').should('be.visible')
  })

  it('correct number of days', () => {
    cy.get(selector.day).should('have.length', 7)
  })
  
  it('select day and time', () => {
    cy.get(selector.day).eq(3).click()
    cy.get(selector.movieTime).click()
    cy.contains('Забронировать').should('be.visible')
  })
})