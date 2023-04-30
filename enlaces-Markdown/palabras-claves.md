## Palabras claves de cypress:

- get : esto trata de obtener uno o mas elementos de DOM por selector o alias ejemplo( h1, button, section, etc ).
[PRESIONAR AQUÍ PARA VER](https://docs.cypress.io/api/commands/get)

- visit: esto visita la pagina del url que se coloco. EJEMPLO:
~~~
cy.visit('la direccion url de la pagina que queremos visitar')
~~~

- contains: Esto pregunta si el contenido de dicho metodo que se uso antes es lo mismo con el que queremos comprobar. EJEMPLO:

~~~
<h1>Hola Mundo</h1> // codigo en html

cy.visit("nombre de la url") // necesario para ver las etiquetas de html
cy.get("h1").contains( "Hola Mundo" ); //codigo en js
~~~