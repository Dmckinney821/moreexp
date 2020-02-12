
var nameVar = 'dan'
nameVar = 'Dan'
console.log('nameVar', nameVar)

let nameLet = 'Mickey'
nameLet = 'Don'
console.log('nameLet', nameLet)

const nameConst = 'Stone'
console.log('nameConst', nameConst)

const fullName = 'Dan Mickey'
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
