
// const add = (a, b) => {
//     console.log(arguments)
//     return a + b;
// }

// console.log(add(2,3,10))

const user = {
    name: 'Mickey',
    cities: ['Atl','LA','SF'],
    printPlacesLived() {
        return  this.cities.map((city) => this.name +' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

