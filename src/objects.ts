let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

car.brand = "ford";

// car.color = 'blue'
// THis will not work because color has not been defined

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = "New Book"
// Having read only means a variable cannot be reassigned a value 