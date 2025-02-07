// Mala práctica tipos any
// Tipo any
// Ejemplo de uso de un tipo any

let anyVariable: any = 10; // Ahora anyVariable puede almacenar cualquier tipo de valor
anyVariable = "Hola";
anyVariable = true;
anyVariable = {};
anyVariable = [];

// Mala práctica tipos void
// Tipo void
// Ejemplo de uso de un tipo void

function noReturnFunction(): void {
    console.log("Esto no devuelve nada");
}

// Mala práctica tipos unknown
// Tipo unknown
// Ejemplo de uso de un tipo unknown

let unknownVariable: unknown = 10; // Ahora unknownVariable puede almacenar cualquier tipo de valor
unknownVariable = "Hola";
unknownVariable = true;
unknownVariable = {};
unknownVariable = [];


// tipo never
// Un tipo que nunca se puede alcanzar, tipo imposible de usar
// Ejemplo caso de uso de una función que no devuelve nada
function error(message: string): never {
    throw new Error(message);
    }


// Funciones con retorno inferido y no tiene retorno explicito 
// Limitaciones de typescript. No es capaz de inferirlo
function suma(a, b) { // El tipo de retorno es any
    return a + b; // El tipo de retorno es any
}


// Diferencia entre tipos e interfaces
// Tipos y interfaces en TypeScript

interface Hombre {
    nombre: string;
    edad: number;
}

type Masculino = {
    nombre: string;
    edad: number;
}

function getHombre(nombre: string, edad: number): Hombre {
    return { nombre, edad };
}

function getMasculino(nombre: string, edad: number): Masculino {
    return { nombre, edad };
}

// El tipo de retorno de las funciones getHombre y getMasculino es Hombre o Masculino

const hombre: Hombre = getHombre("Juan", 30);
const masculino: Masculino = getMasculino("Juan", 30);


// Uso del readonly. No se puede cambiar el valor de una variable que tiene readonly
type Heroe = {
    readonly id?: string, // El id es readonly, no se puede cambiar
    name: string,
    age: number,
    isActive?: boolean // El isActive es opcional, se puede establecer o no
}

// Función que crea un heroe
function createHeroe(heroe: Heroe): Heroe {
    const { name, age } = heroe;
    return {
        id: crypto.randomUUID(), // No se puede cambiar el id, ya que es readonly. Si se intenta cambiar el id, dará error
        name,
        age,
        isActive: true,
    }
}

// Templated literals. Plantillas de texto. Se pueden usar plantillas de texto en strings y en template literals

type Color = string; // El tipo Color es string
type Color2 = `#${string}`; // El tipo Color2 es string , pero con un prefijo # para indicar que es un color hexadecimal

const hexa: Color = 'ff0000' //  Correcto
const hexa2: Color2 = '#ff0000' //  Correcto

const hexaNegro: Color = '000000'
const hexaNegro2: Color2 = '#000000';


// type indexed access types. 
// Los tipos indexados permiten acceder a las propiedades de un tipo basándose en un índice
// Ejemplo de uso de type indexed access types
type Person = {
    name: string,
    age: number,
    address: {  // address es un objeto. Este objeto tiene una propiedad city que es un string y una propiedad country que es un string
        city: string, // city es un string
        country: string // country es un string
    }
    }

type City = Person['address']['city']; // El tipo City es string. Se accede a la propiedad city del objeto address del objeto Person


// tupla de tipos
// Una tupla es una lista de elementos de tipos diferentes, con una longitud fija

type Persona = [string, number, boolean]; // El tipo Persona es [string, number, boolean]
const persona: Persona = ['Juan', 30, true]; // Correcto
// const persona2: Persona = [30, 'Juan', true]; // Error. Los tipos de los elementos deben ser los mismos


// Enums. Enumeraciones en TypeScript. Se utilizan para manejar valores con nombres asociativos
// Ejemplo de uso de enums
function mostrarMensaje(tipoDeError){
    if(tipoDeError == 'notFound'){
        console.log('El recurso no existe')
        }
        else if(tipoDeError == 'internal'){
        console.log('Error interno del servidor')
        }   
        else{
            console.log('Error desconocido')
            }
}

mostrarMensaje('notFound'); // Muestra: El recurso no existe

// Enums vs const. Las constantes en TypeScript son muy similares a las enums, pero tienen algunas diferencias
// Las constantes no pueden tener valores por defecto, ni alias, ni tipos de datos personalizados
// Las constantes en TypeScript se declaran con la palabra clave const
// Los enums en TypeScript se declaran con la palabra clave enum
// NOTA: siempre que sea posible, usar const en lugar de enum. Pero si te interesa un enum, 
// consulta la documentación oficial de TypeScript. Const genera menos codigo y es más legible

// Enumeración con valores por defecto
enum ErrorType {
    NotFound = 'notFound', // NotFound es el valor por defecto de la enumeración ErrorType 
    Internal = 'internal',
    Unknown = 'unknown'
}

// Enumeración con valores numéricos por defecto. Los valores numéricos comienzan desde 0
const enum ErrorType2 {
    NotFound = 'notFound', // NotFound es el valor por defecto de la enumeración ErrorType 
    Internal = 'internal',
    Unknown = 'unknown'
}

// Enumeración con valores por defecto y con alias
function mostraMensajeConEnum(tipoDeError: ErrorType){
    if(tipoDeError == ErrorType.NotFound){ // ErrorType es el alias del enum
        console.log('El recurso no existe')
        }
        else if(tipoDeError == ErrorType.Internal){ // ErrorType es el alias del enum
        console.log('Error interno del servidor')
        }   
        else{
            console.log('Error desconocido')
            }
}

mostraMensajeConEnum(ErrorType.NotFound); // Muestra: El recurso no existe


// Secciones de importación
// Ejemplos de secciones de importación en TypeScript
const button  = document.getElementById('button'); 
// ¿como sabe typescript que realmente estas recuperando un boton?
// La respuesta es que typescript esta usando el tipo de dato de la variable button, que es
// un HTMLButtonElement . Pero ¿como sabe typescript que button es un HTMLButtonElement?
// La respuesta es que typescript esta usando el tipo de dato de la variable button.

const canvas = document.getElementById('canvas'); 

    // ¿como sabe typescript que realmente estas recuperando un canvas?
    // La respuesta es que typescript esta usando el tipo de dato de la variable canvas, qu es  
    // un HTMLCanvasElement 

// aserciones. Son una forma de decirle a typescript que la variable button es un HTMLButtonElement

button as HTMLButtonElement; // Correcto

canvas as HTMLCanvasElement; // Correcto

// El uso de aserciones puede ser útil para hacer que TypeScript pueda verificar el tipo de dato de una variable

// que no tiene un tipo de dato explícito. Por ejemplo:

let myElement: any;
myElement = document.getElementById('element');

// ¿como sabe typescript que realmente estas recuperando un elemento?
// La respuesta es que typescript esta usando el tipo de dato de la variable myElement.

// instanceof. Se utiliza para verificar si un objeto es una instancia de una clase
// o una interfaz. Por ejemplo:
class Personal {
    constructor(name: string){}
    }

    const personal = new Personal('John');
    if(personal instanceof Personal){
        console.log('El objeto es una instancia de Personal');
    }
    else{
        console.log('El objeto no es una instancia de Personal');
    }
  
// NOTA: Lo mejor es usar instanceof para verificar si un objeto es una instancia de una clase
// o una interfaz en vez de aserciones. Adicionalmente, puede ser útil para hacer que TypeScript pueda verificar el tipo de dato de una variable
// que no tiene un tipo de dato explícito. 


// typeOf. Se utiliza para ver el tipo de dato de una variable
// instanceOf. Se utiliza para verificar si un objeto es una instancia de una clase o una interfaz

let myVariable: any;
myVariable = 10;
console.log(typeof myVariable); // muestra: number


//fetching de datos de TypeScript
// Ejemplos de fetching de datos en TypeScript

const response = await fetch('https://api.example.com/data');
const data = await response.json();

// ¿como sabe typescript que realmente estas recuperando un objeto JSON?
// La respuesta es que typescript esta usando el tipo de dato de la variable myVariable.
// En este caso, myVariable es de tipo any, por lo que TypeScript no puede verificar el
// tipo de dato de la variable data.
// Para solucionar este problema, podemos usar el tipo de dato de la variable data
// o podemos usar el tipo de dato de la variable response.
// Por ejemplo:
const response1: Response = await fetch('https://api.example.com/data');
const data1: any = await response1.json();

// NOTA: Lo mejor es usar el tipo de dato de la variable response para verificar el tipo de dato de la variable data
// Adicionalmente, puede ser útil para hacer que TypeScript pueda verificar el tipo de dato de
 // una variable que no tiene un tipo de dato explícito.
 //
