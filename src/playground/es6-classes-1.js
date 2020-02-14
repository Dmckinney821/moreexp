
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name,
        this.age = age 
    }
    getGreeting() {
        // return 'Hi I am ' + this.name + '!'
        return `Hi I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major 
    }
    getDescription() {
        let description = super.getDescription()
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasLocation() {
        return !!this.homeLocation
    }

    getGreeting() {
        let location = super.getGreeting()
        if(this.hasLocation()){
            location += ` I am visiting from ${this.homeLocation}`
        }
        return location;
    }
    
}

const me = new Traveler('Mickey', 36,  'Ocala')

console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())