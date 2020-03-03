// objects
// const person = {
//     name: 'Dan',
//     age: 36,
//     location: {
//         city: 'Atl',
//         temp: 30
//     }
// }

// const { age, name: firstName = 'Anon' } = person;
// console.log(`${firstName} is ${age}.`)

// const { temp:temperature, city } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan someone',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const { name: publisherName = 'Self'} = book.publisher;
// console.log(publisherName)

// array
const address = ['123 Spooner St', 'Atl', 'GA', '30084']

const [, city, state = 'NY'] = address;

console.log(`you are in ${city} ${state}`)

const item = ['Coffee (iced)', '$2.00', '$31.00', '$4.00']
const [drink, , price,] = item

console.log(`A medium ${drink} cost ${price} `)