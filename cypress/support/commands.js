Cypress.Commands.add("login", (email, password) => {
   // cy.contains("Log in").click();
   cy.visit('http://qamid.tmweb.ru/admin')
   cy.get('.page-header__subtitle').should('have.text','Администраторррская')
    if (email) {
      cy.get('[name="email"]').type(email);
    }
    if (password) {
      cy.get('[name="password"]').type(password);
    }
    cy.contains('Авторизоваться').click();
  });