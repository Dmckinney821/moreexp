
// const add = (a, b) => {
//     console.log(arguments)
//     return a + b;
// }

// console.log(add(2,3,10))

// const user = {
//     name: 'Mickey',
//     cities: ['Atl','LA','SF'],
//     printPlacesLived() {
//         return  this.cities.map((city) => this.name +' has lived in ' + city)
//     }
// }
// console.log(user.printPlacesLived())


const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 3,
    multiply() {
       return this.numbers.map((number) => number * this.multiplyBy)
      
    }
    // numbers = array of numbers
    // multiplyBy = single number
    // multiply return a new array with multiplied numbers
}
console.log(multiplier.multiply())
