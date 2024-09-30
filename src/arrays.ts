let prices:number[] = [100, 75, 42]
// number[] helps tell TypeScript that it is expecting an array of numbers

let fruit:string[] = ['apple', 'orange', 'pineapple']
// string[] helps tell TypeScript that it is expecting an array of strings


let randomValues:[];
// [] empty array in TypeScript is a type of array that expects no values in it.

let emptyValues = []
// This declaration will have type any for our array items

let doubleValues:(number | boolean)[] = [2, true]
// Multiple types for our array items