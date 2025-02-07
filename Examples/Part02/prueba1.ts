// Interfaces en TypeScript -> Definimos la estructura de datos que tendrá cada objeto que implemente esta interfaz
// Tipos y interfaces en TypeScript -> Los tipos son el tipo de dato que esperamos que un valor tenga
// Tipos y interfaces en TypeScript -> Las interfaces son la estructura de datos que esperamos que un objeto tenga

interface Persona { // Definimos una interfaz llamada Persona
    nombre: string;
    edad: number;
    altura: number;
    saludar: () => void; // Definimos un método llamado saludar en la interfaz Persona
}

type PersonaTipo {
    nombre: string;
    edad: number;
    altura: number;
    saludar: () => void; // Definimos un método llamado saludar en la interfaz Persona
}

const heroe: Persona = { // Creamos un objeto llamado heroe que implementa la interfaz Persona
    nombre: 'Spiderman',
    edad: 30,   // Edad del heroe
    altura: 1.80, // Altura del heroe,
    saludar: () => { // Definimos un método llamado saludar en la interfaz Persona
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anios.`)
    }
}

const heroeTipo: PersonaTipo = { // Creamos un objeto llamado heroeTipo que también implementa la interfaz Persona
    nombre: 'Spiderman',
    edad: 30,   // Edad del heroe
    altura: 1.80, // Altura del heroe
    saludar: () => { // Definimos un método llamado saludar en la interfaz Persona
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anios.`)
    }
    // Aquí podríamos agregar más propiedades o métodos al objeto heroe
}

// Anidando una interfaz dentro de otra
interface Producto { // Definimos una interfaz llamada Producto
    id: number;
    nombre: string;
    precio: number;
}

interface Carrito { // Definimos una interfaz llamada Carrito que hereda de la interfaz Persona
    productos: Producto[]; // Definimos un arreglo de productos en el carrito de la interfaz Carrito
    total: number;
}

type ProductoTipo = {
    id: number;
    nombre: string;
    precio: number;
}

type CarritoTipo = {
    productos: ProductoTipo[]; // Definimos un arreglo de productos en el carrito de la interfaz Carrito
    total: number;
}

interface CarritoOps {
    add: (producto: Producto) => void; // Definimos un método llamado add en la interfaz CarritoOps
    remove: (id: number) => void;
    update: (id: number, nuevoPrecio: number) => void; // Definimos un método llamado update en la interfaz CarritoOps
    getProductos: () => Producto[]; // Definimos un método llamado getProductos en la interfaz CarritoOps
    getTotal: () => number; // Definimos un método llamado getTotal en la interfaz CarritoOps
}

type CarritoOpsTipo = {
    add: (producto: ProductoTipo) => void; // Definimos un método llamado add en la interfaz CarritoOps
    remove: (id: number) => void;
    update: (id: number, nuevoPrecio: number) => void; // Definimos un método llamado update en la interfaz CarritoOps
    getProductos: () => ProductoTipo[]; // Definimos un método llamado getProductos en la interfaz CarritoOps
    getTotal: () => number; // Definimos un método llamado getTotal en la interfaz CarritoOps
}

const carrito: Carrito = {
    productos: [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 },
    ],
    total: 1000,
};

const carritoTipo: CarritoTipo = {
    productos: [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 },
    ],
    total: 1000,
};

// Una interfaz puedes extender otra interfaz
interface Heroe extends Persona { // Definimos una interfaz llamada Heroe que hereda de la interfaz Persona
    poderes: string[]; // Definimos un arreglo de poderes en la interfaz Heroe
}

const superHeroe: Heroe = {
    nombre: 'Superman',
    edad: 40,   // Edad del superheroe
    altura: 1.90, // Altura del superheroe
    saludar: () => { // Definimos un método llamado saludar en la interf
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anios.`)
    },
    poderes: ['Invencibilidad', 'Superfuerza'], // Arreglo de poderes del superheroe
}


// Ejemplos de los tipos de datos en TypeScript

let numero: number = 10; // Definimos un número
let cadena: string = 'Hola TypeScript!'; // Definimos una cadena
let booleano: boolean = true; // Definimos un booleano
let undefinedVariable: undefined = undefined; // Definimos una variable sin valor
let nullVariable: null = null; // Definimos una variable con valor null

// Creamos un tipo

type Color = 'rojo' | 'azul' | 'amarillo'; // Definimos un tipo llamado Color que puede ser 'rojo', 'azul' o 'amarillo'

let color: Color = 'rojo'; // Definimos una variable de tipo Color

// Creamos una función con un tipo de dato

function sumar(a: number, b: number): number { // Definimos una función llamada sumar que recibe dos números y devuelve un número
    return a + b;
}

// Interfaces o Tipos
// Interfaces: Si hablamos de objetos o de clases es mas aconsejable.
// Tipos: Se entienden muy bien, no se pueden duplicar. Incluso para objetos pequeños. Tuplas, primitivos y funciones.


// Narrowing Types
// El tipo de dato puede ser cambiado en tiempo de ejecución
function mostrarLongitud(objeto: number | string) {
    return objeto.length // Da error si es un numero
}

function mostrarLongitudNarrowing(objeto: number | string) {
    if (typeof objeto === 'string') {
        return objeto.length
    } else {
        return objeto.toString().length
    }
}

mostrarLongitud(10); // Da error si es un numero
mostrarLongitudNarrowing(10); // No da error


// Otro ejemplo de narrowing
interface Mario {
    company: 'nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company: 'sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
    console.log(personaje.nombre)
    console.log(personaje.saltar()) // Da error si es sonic
}

// No podriamos usar instanceof para verificar el tipo de dato porque
// TypeScript genera un error al intentar usar un método que no existe en el tipo de dato definido.
// En este caso, TypeScript es capaz de detectar el error y proporcionar una solución.
function jugar1(personaje: Personaje) {
    if (personaje.company === 'nintendo') {
        console.log(personaje.nombre)
        console.log(personaje.saltar())
        return
    } else {
        console.log(personaje.nombre)
        console.log(personaje.correr())
    }
}


// Una forma de hacer esto para que funcione es con typeguards

function checkIsSonic(personaje: Personaje): personaje is Sonic { // Aquí se define un typeguard
    return (personaje as Sonic).correr() === undefined // Aquí se comprueba si el método correr existe en el tipo de dato
}

// Ahora podemos usar el typeguard
function jugar2(personaje: Personaje) {
    if (checkIsSonic(personaje)) {
        console.log(personaje.nombre)
        console.log(personaje.correr())
    }

}

// NOTA: siempre que se pueda se deben evitar los typeguards

// TIPO never 

// Si una función nunca debería devolver un valor, se puede usar el tipo never
function fn(x: string | number) {
    if (typeof x === 'string') {
        console.log(x.toUpperCase())
    } else {
        console.log(x.toFixed(2))
    }
    return x // Esta línea nunca se ejecuta
}


// tipado de clases . mutar el estado de una clase en TypeScript

class Avenger {
    public nombre: string;
    public equipo: string;
    private vida: number;

    constructor(nombre: string, equipo: string, vida: number) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.vida = vida;
    }
}

let avenger1 = new Avenger('Thor', 'Avengers', 100);

// En este ejemplo, la propiedad vida es privada y solo puede ser accedida desde dentro de la clase.
// Por lo tanto, no podemos acceder a ella desde fuera de la clase.

// Cosas a tener en cuenta:
// 1. La propiedad vida es privada y solo puede ser accedida desde dentro de la clase.


// Exportar importar modulos y interfaces en TypeScript

import { Bebida } from "./types"; // Importamos la interfaz Bebida de un archivo externo

const bebida: Bebida = {
    nombre: 'Coca-Cola',
    precio: 100 * 1.2, // Aquí hacemos un cálculo para el precio
    beber: () => {
        console.log('Bebiendo Coca-Cola');  // Aquí hacemos un cálculo para el bebimiento
    }
}