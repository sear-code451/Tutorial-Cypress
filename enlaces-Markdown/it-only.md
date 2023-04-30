## Como usar only (MUY IMPORTANTE)

Bueno lo que hace esto es que cuando ya tenemos muchos test se nos acumula a la hora de cargar y como cypress es un framework, en un navegador va tardar mucho de por sí, y sin eso e igual tardan mucho siempre los testing.

Por eso cypress es muy bueno puede solo hacer correr un test en específico o varias test en específico, así para que no se sobrecargue o esperemos mucho en hacer correr todos los test. EJEMPLO:

~~~
it("test normal", () => {
    cy.visit("url"); //Será ignorado por que solo va ejecutar el de abajo
})

it.only("lo normal como un test", () => {
    cy.visit("url"); // correrá solo este y a los demas test ignorará
})
~~~

