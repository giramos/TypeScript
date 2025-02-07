// ejemplo de uso del operador typeOf para obtener el tipo de un objeto
let personita: { name: string; age: number } = { name: 'John', age: 30 };

console.log('Type of person:', typeof personita); // Output: object

// ejemplo de uso del operador instanceof para verificar la herencia de un objeto

class Animal {
  makeSound() {
    console.log('Animal makes a sound');
  }
}
// Herencia de Animal a Dog
class Dog extends Animal {
    makeSound() {
        console.log('Dog barks');
    }       
}


// ejemplo de uso del retorno de tipo con la palabra clave typeof
function getPersonType(person: { name: string; age: number }): string {
    return typeof person;   
}

const dog = new Dog();

console.log('Type of dog:', typeof dog); // Output: object

console.log('Type of person returned by getPersonType:', getPersonType(person)); // Output: object

console.log('Is dog an instance of Animal?', dog instanceof Animal); // Output: true
// Ejmplos de uso de los arrays

const languager: string[] = []; // Array de tipo string

languager.push('JavaScript');   // Bien
languager.push('Python');   // Bien
//languager.push(1); // Error: no se puede agregar un número a un array de strings

// ¿Qué pasa si quiero pasasr al array un número? No se puede.
// Pero si los combinamos, es decir, hacemos que el array pueda ser string o numero

const mixedArray: (string | number)[] = []; // Array de tipo string o número

mixedArray.push('JavaScript');   // Bien
mixedArray.push(1);   // Bien


// Crear matrices en TypeScript
// Imaginar el 3 en raya, como lo podemos tipar en TypeScript

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; // Array de arrays de tipo number
const matrix2: string[][] = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]; // Array de arrays de tipo string


type celda = 'X' |'O'| ''; // Tipado para celdas del tablero del 3 en raya
type Game = [
    [celda,celda,celda],
    [celda,celda,celda],
    [celda,celda,celda],
]
const tablero: Game = [
    ['X', 'O', ''],
    ['', 'X', 'O'],
    ['O', '', 'X']
]; 

// tuplas en TypeScript
// Una tupla es una lista de elementos de tipos diferentes, con una longitud fija.

const personal: [string, number] = ['John', 30]; // Bien

// ¿Qué pasa si quiero pasar un número a una tupla? No se puede.
// Pero si los combinamos, es decir, hacemos que la tupla pueda ser string o

const mixedTuple: [string, number | string] = ['John', 30]; // Bien

// También podemos usar tuplas para devolver múltiples valores de una función

function getPersonDetails(): [string, number] {
    return ['John', 30];
}



