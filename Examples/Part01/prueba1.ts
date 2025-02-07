
// union de tipos con'&' para crear un nuevo tipo que combina ambos

type HeroId = '${string}-${string}';
type HeroPower = 'powerful' | 'aggressive' | 'healer';

let ann: number | string;

ann = 'Hero A';
ann = 1234;

// tipo de union con '|' para crear un nuevo tipo que puede ser de varias tipos

type Hero1 = { id: HeroId, power: HeroPower };

let heroA: Hero1 = { id: 'Hero A-1', power: 'powerful' };
let heroB: Hero1 = { id: 'Hero B-2', power: 'aggressive' };

// tipo de objeto con '?' para crear un nuevo tipo que puede tener valores indefinidos

type OptionalHero = { id?: HeroId, power?: HeroPower };

let optionalHeroA: OptionalHero = { id: 'Hero A-1', power: 'powerful' };
let optionalHeroB: OptionalHero = { id: 'Hero B-2' };

// tipo de array con '[]' para crear un nuevo tipo que puede contener varios elementos de un solo tipo
type HeroArray = Hero1[];

let heroes: HeroArray = [heroA, heroB];

// tipo de función con '()' para crear un nuevo tipo que puede ser una función que toma un número de parámetros y devuelve un valor de un solo tipo

type HeroFunction = (id: HeroId) => Hero1;

let getHeroById: HeroFunction = (id) => {
    //...
    return heroA;
};

// tipo de enum con '{}' para crear un nuevo tipo que puede ser una constante de una lista de valores

enum HeroPowerType {
    POWERFUL = 'powerful',
    AGGRESSIVE = 'aggressive',
    HEALER = 'healer',
}

let heroPower: HeroPowerType = HeroPowerType.POWERFUL;

// interseccion de tipos

type A = { name: string, age: number };
type B = { age: number, job: string };

type IntersectionType = A & B;

let person: IntersectionType = { name: 'John', age: 30, job: 'Developer' };

console.log(person);
