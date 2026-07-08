console.log("I am a conditional")

let age = 17
let grace = 2
console.log(age + grace) 
console.log(age - grace) 
console.log(age * grace, "multiplication") 
console.log(age / grace, "division") 
console.log(age ** grace, "exponentiation")
console.log(age % grace, "modulus(remainder)")

if((age+ grace)>18){
    console.log("You can drive")
}
else{
    console.log("You cannot drive")
}

age += grace
console.log(age, "Here we used increment assignment operator += in this context:- age += grace")

// if else if else ladder

if((age+ grace)>18){
    console.log("You can drive")
}

else if (age == 0){
    console.log("are you kidding")
}

else{
    console.log("You cannot drive")
}

a = 6
b = 8

// Ternary statements

let c = a > b  ? (a-b) : (b-a)

/* this translates to :-
if (a>b){
let c = (a-b)
}
else{
    let c = (b-a)
}

*/ 

console.log(c)