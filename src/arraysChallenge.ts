let temperatures:number[] = [20, 25, 30]

// temperatures.push('hot')
// Error for pushing string is because temperature is fully declared to be of numbers

let colors:string[] = ['red', 'green', 'blue']

// colors.push(true)
// Error for pushing boolean is because colors is fully declared to be of strings

let mixedArray: (number | string)[] = [1, 2, 3, 'four']
// Multiple types in our array