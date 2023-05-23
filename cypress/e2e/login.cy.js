//import { happypath } from '../fixtures/happypath'
import selector from '../fixtures/selectors';


describe('login for admin', () => {
  // beforeEach(() => {
  //   const logins = require("../fixture/login")
  // })
  let login;

  beforeEach(() => {
    cy.fixture('login').then((data) => {
      login = data;
      return login;
    });
  });

  it('should log in with valid email and password', () => {
    //const logins = require("../fixture/login")
    cy.login(login.valid.mail, login.valid.password)
    cy.contains('Создать зал').should('be.visible')
  })
  
  it('should not log in with empty email', () => {
    cy.login(null, login.valid.password)
    cy.get(selector.email)
      .then((elements) => elements[0].checkValidity())
      .should("be.false");
    //cy.contains('Авторизация').should('be.visibile')
    cy.get(selector.email)
    .then((elements) => elements[0].validationMessage)
    .should("contain", "Заполните это поле.");
  })

  it('should not log in with empty password', () => {
    cy.login(login.valid.mail, null)
    cy.get(selector.password)
      .then((elements) => elements[0].checkValidity())
      .should("be.false");
    cy.get(selector.password)
      .then((elements) => elements[0].validationMessage)
      .should("contain", "Заполните это поле.");
  })

  it('should not log in with invalid email', () => {
    cy.login(login.invalid.mail, login.valid.password)
    cy.contains('Ошибка авторизации!').should('be.visible')
  })

  it('should not log in with invalid password', () => {
    cy.login(login.valid.mail, login.invalid.password)
    cy.contains('Ошибка авторизации!').should('be.visible')
  })  

})