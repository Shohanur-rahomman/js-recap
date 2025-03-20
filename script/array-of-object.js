

const carData = [
    { title: 'toyota', price: 400, quantity: 2, isAvailable: true },
    { title: 'adi', price: 500, quantity: 3, isAvailable: true },
    { title: 'rolodex', price: 900, quantity: 1, isAvailable: false },
    { title: 'tata', price: 300, quantity: 2, isAvailable: true },
    { title: 'mada', price: 200, quantity: 1, isAvailable: false },
    { title: 'honda', price: 400, quantity: 2, isAvailable: true },
]


// for loop use quantity and price total
let priceAndQuantity = [];
for (let i = 0; i < carData.length; i++){
    const result = carData[i].price * carData[i].quantity
    priceAndQuantity.push(result)
}
// console.log(priceAndQuantity);

// map implement in array object
let totalPrice = carData.map((product) => product.price * product.quantity);
// console.log(totalPrice);

// find only first element return
let findMyProduct = carData.find((product) => product.price === 200 || product.quantity === 2);
// console.log(findMyProduct);


// fitter operation
let flitterProduct = carData.filter((product) => product.isAvailable === true);
console.log(flitterProduct);

