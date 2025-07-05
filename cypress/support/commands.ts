/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      // Добавьте здесь свои кастомные команды
      login(email: string, password: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('login', (email, password) => {
  // Реализация команды login
  console.log('email, password', email, password)
})
