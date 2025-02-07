let anyValue: any = 'hola'; // es una variable que puede almacenar cualquier tipo de dato."any" puede ser utilizada para cualquier tipo de dato.
let otherValue: unknown = 'adios'; // es una variable que puede almacenar cualquier tipo de dato. "unknown" puede ser utilizada para cualquier tipo de dato.

const persona = "hola" // es una constante que no puede ser modificada


// inferencia de tipos
// como a y b infiere que son number sin decirle nada

let a = 10; // esto funciona correctamente
let b = "20"; // esto funciona correctamente

a + b; // esto funciona correctamente


// funciones con parametros de tipo any o unknown 
function saludar(name: string) {
    console.log(`Hola ${name}!`);
}

saludar("Juan"); // esto funciona correctamente
//saludar(123); // esto no funciona correctamente porque el parámetro name es de tipo string

// funciones con objetos 
function saludar2({ name, age }) {
    console.log(`Hola ${name}! Tu edad es ${age}`);
}

// Función con retorno de valor
function saludar3({ name, age }: { name: string, age: number }): { name: string, age: number } {//+
    console.log(`Hola ${name}! Tu edad es ${age}`);
    return { name, age };//+
}

// Llamada a la función con una función anónima que saluda al mundo
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn("Juan");
}

// Llamada a la función con una función anónima que saluda al mundo
sayHiFromFunction((name) => {
    console.log(`Hola ${name}!`);
}); // esto funciona correctamente

// Functions con retorno de valor 
function logMessage(message: string): void {
    console.log(message);
}
// Funcion que nunca termina
function throwError(message: string): never {
    if (message) {
        throw new Error(message);
    }
    throw new Error('Error!');
}

// inferenceia de funciones anonimas
const avengers = ['Hulk', 'Thor', 'Ironman'];

// Funcion que itera sobre el array de superhéroes
avengers.forEach((avenger) => {
    console.log(avenger);
});

// oObjetos
// Type Alias
type Hero = {
    name: string;
    age: number;
    city: string;
}

let hero = {
    name: 'Ironman',
    age: 45,
    city: 'New York',
}

// Funcion que crea un objeto Hero
function createHero(name: string, age: number, city: string): Hero {
    return {
        name,
        age,
        city,
    }
}

const thor = createHero('Thor', 1000, 'Asgard');

// Funcion que crea un objeto Hero utilizando la misma interface
function createHero2(hero: Hero): Hero {
    return {
        name: hero.name,
        age: hero.age,
        city: hero.city,
    }
}

const thor2 = createHero('Thor2', 2000, 'Asgard2');

// Propiedades opcionales

type Hero2 = {
    id?: string;
    name: string;
    age: number;
    city?: string;
}
// Funcion que crea un objeto Hero2

function createHero3(name: string, age: number, city?: string): Hero2 {
    return {
        name,
        age,
        city,
    }
}

const thor3 = createHero3('Thor3', 3000);
const thor4 = createHero3('Thor4', 4000, 'Asgard4');

// Operador optional chaining
thor3.id?.toString(); // esto funciona correctamente

// thor4.id = 1; // esto NO funciona 


//Object.freeze() para objetos inmutables

const persona2 = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'New York',
}

Object.freeze(persona2); // esto hace que el objeto sea inmutable

persona2.nombre = 'Pedro'; // esto no funciona, ya que el objeto es inmutable



//Templated union types


type Action = 'login' | 'logout' | 'create' | 'update' | 'delete';


function handleAction(action: Action) {
    switch (action) {
        case 'login':
            console.log('Login');
            break;
        case 'logout':
            console.log('Logout');
            break;
        case 'create':
            console.log('Create');
            break;
        case 'update':
            console.log('Update');
            break;
        case 'delete':
            console.log('Delete');
            break;
    }
}


handleAction('login'); // esto funciona correctamente






