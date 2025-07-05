/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from 'cypress/vue'
import router from '../../src/router/index.js'
import { createPinia } from 'pinia'

const pinia = createPinia()

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      mountWithRouter: (component: any, options?: any) => Cypress.Chainable
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  return mount(component, {
    ...options,
    global: {
      plugins: [router, pinia],
      ...options.global,
    },
  })
})
