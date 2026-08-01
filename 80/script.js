// let obj = {
//     a:1,
//     b:"ck"
// }

// console.log(obj)

// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps:true
// }

// rabbit.__proto__ = animal // sets rabbit.[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("eating...")
    }

    jumps(){
        console.log("Jumping...")
    }
}

let a = new Animal("bunny")
console.log(a)

class Lion extends Animal{
    constructor(name) {
        super(name)
        console.log("Object is created... and it roars")
    }

    eats(){
        console.log("eating...Roars")
    }
}

let l = new Lion("simba")
console.log(l)