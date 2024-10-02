let bike: {brand: string, year: number} = { brand: 'yamaha', year: 2012}
// bike.year = 'old'
// Fails to work because year is number

let laptop: {brand: string, year: number} = { brand: 'MacBook', year: 2021}

let product1 = { title: 'shirt', price: 20}
let product2 = { title: 'trousers', price: 20}

let products: {title: string, price?: number}[] = [product1, product2]

products.push({title: 'shoes', price: 400 })

// Despite the price being optional one cannot use a different type for it, if it was declared number it must be number