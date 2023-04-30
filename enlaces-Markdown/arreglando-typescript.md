# Como solucionar cuando no compila typescript en cypress

Cuando no compila un archivo de typescript en cypress, la página de cypress nos sugiere que hagamos lo siguiente:

- Que creemos un archivo index.ts, en la carpeta de support de la carpeta cypress, es decir ( cypress/support/index.ts ).
- Dentro del archivo index.ts, añadimos lo siguinte:
~~~
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
}
~~~
Si no sale aun asi bien mirar el enlace [presionar aquí](https://learn.cypress.io/testing-your-first-application/how-to-test-forms-and-custom-cypress-commands)
> Y bueno esto solucionará nuestro problema al compilar archivos de typescript en cypress según la página.