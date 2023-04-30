# BUENAS PRACTICAS EN CYPRESS:

## Como usar correctamente get()

Haber este nos manda a obtener el alias o selector de la pagina que se indica antes, para que se me entienda un ejemplo:
~~~
test('probando el uso correcto de get', () => {
    cy.visit("direccion url");
    cy.get("h1");
})
~~~

> Al hacer esto estamos pidiendo que nos obtenga si tiene una etiqueta h1. Obvio que nos andará de manera correcta si la etiqueta existe, si no existe dará error.
> Si queremos saber de una etiqueta que solo se lo nombre una vez esto está bien. pero normalmente vamos a ver, que hay muchas etiquetas que se llaman mas de una vez.

~~~
test('probando el uso correcto de get', () => {
    cy.visit("direccion url");
    cy.get("h1");
})
~~~

> si usamos esto nos va dar posiblemente bien, pero no sabremos si en verdad lo que queremos revisar esta correcta.

**NOTA:** debemos de colocar el atributo en corchetes.

La manera correcta de hacerlo es de la siguiente:
~~~
cy.get('h1') // En vez de usar el nombre de la etiqueta usamos uno de sus atributos, como un id, class, etc.

cy.get('[id="El-titulo"]') // en corchete el atributo
~~~

**IMPORTANTE:** Puede que de bien, solo usar la etiqueta, pero no nos estamos asegurando al 100% que nos referimos al que queremos revisar, y por eso hacer eso se considera una mala práctica.
