
// ejemplo 1 sencillo
let mensaje: string = 'Hola Mundo';
console.log(mensaje);

// ejemplo 2 sencillo

type mixto = string | number;
const information = ( nombre:string, edad:number ): mixto => {
    return ` ${nombre} y tengo la edad de ${edad} `;
}
console.log(information( 'pablo', 22 ));

// Ejemplo 3

let array: mixto[] = [ 'pablo', 22, 'keiry', 16 ];
console.log( array );


// Ejemplo 4

type propiedad =  { [ numeroJug: number ]:string };

let jugadores: propiedad;

jugadores = {
    10: 'Messi',
    7: 'Cristiano Ronaldo'
}

console.log(jugadores);


// Ejemplo 5

type propiedadesObjeto = Record< number, string >;
let equipo: propiedadesObjeto;
equipo = {
    27: 'Messi',
    4: 'ozil'
}
console.log( equipo );

type propiedadesPaises = Record < string, string >;

let paises: propiedadesPaises;

paises = {
    'Bolivia': 'Santa Cruz',
    'Estados Unidos': 'New York'
}

console.log(paises);


type propiedadesInfo = Record< string, string[] >;

const datos = {
    'Pablo': [ 'pab@gmail012.com', 'pablo012@gmail.com' ],
    'Keiry': [ 'lucy', 'Blanca' ]
}

console.log(datos);


// Ejemplo 6 nivel intermedio
// operadores comparadores

const comparadores = ( a:number, b:number ):string => {
    if ( a == b ) {
        return 'Son iguales';
    } else  {
        return ` ${ a } es un tipo de dato diferente de ${ b } `;
    }
}

console.log( comparadores( 4, 4 ) );
console.log( comparadores( 4, 5 ) );


// Ejemplo 7 intermedio+
// Uso de switch de manera correcta y los casting


type opciones = 'verde' | 'amarillo' | 'rojo';

let color: string = 'amarillo';

switch ( <opciones> color ) {
    case 'verde':
        console.log('Éxito');
    break;

    case 'amarillo':
        console.log('Advertencia');
    break;

    default:
        console.log('Error');
    break;

}


// Ejemplo 8 intermedio+
const suma = ( a:number, b:number ): number => {
    return a + b;
}



interface Lang {
    nombre: string;
    año?: number;
    description: Function;
}

let javascript:Lang = {
    nombre: 'Pablo',
    año: 1999,
    description: function () {
        console.log( `${ this.nombre } fue creado en ${ this.año }` );
    }
}

javascript.description();


// Ejemplo 9 clases with implements nivel avanzado

class Lenguaje implements Lang {
    nombre:string;
    año: number;

    constructor( nombre:string, año:number ) {
        this.nombre = nombre;
        this.año = año;
    }

    description() {
        console.log( `${ this.nombre } fue creado en ${ this.año }` );   
    }

}


const nombreComplete = new Lenguaje ( 'Pablo', 22 );

nombreComplete.description();


















