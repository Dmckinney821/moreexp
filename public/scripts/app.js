'use strict';

// const add = (a, b) => {
//     console.log(arguments)
//     return a + b;
// }

// console.log(add(2,3,10))

var user = {
    name: 'Mickey',
    cities: ['Atl', 'LA', 'SF'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());
