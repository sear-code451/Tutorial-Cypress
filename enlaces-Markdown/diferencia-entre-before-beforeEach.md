## Diferencias entre before y beforeEach

Bueno before solo imprime una vez, no más, es decir, que tras ver un it va hacer lo que tenga que hacer y ya se acabó.

En resumen tras el primer cumple lo que tiene que hacer pero con los demas no, mientras que beforeEach cumple con cada it que se topa.

Claramente beforeEACH no va hacer con todos, si no con el scope que tiene permitido, osea hasta su limite.

Entendamos que cada cosa tiene su scope(alcance) hasta cierto punto. EJEMPLO:

~~~
describe("Newsletter Subscribe Form", () => {
    before(() => {
      cy.visit("http://127.0.0.1:5500/html/index.html")
    })
  
    it("allows users to subscribe to the email list", () => {
        cy.get('h1').eq(0);
    })

    it( "cuantos before ya van", () => {
        cy.get('h1').eq(1);
    } )
})
~~~