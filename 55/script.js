console.log("Video 55")

var a = 6;
a = a + 1
var b = 7;
var c = "chikara";
var _c = "denji"; // This is allowed
// var 55a = "k" Not allowed because variable names cannot start with a digit

console.log(a + b)
console.log(typeof(a), typeof(b), typeof(c))


const a1 = 7;
// a1 = a1 = 1  This isnt allowed because constant variable cannot be reassigned 


// Now we will talk var and let :- var makes your variable accessible globally while let makes your variable accessible locally within a block 



var f = 5 ;
f = f + 1
{
    let f = 77; // This creates something called a new block scoped variable that shadows the outer f. Inside this block f is 77 but outside its still 5 or ultimately 6. If this block scoped variable is removed both console.logs will print 6. If var f = 77 was used instead of let it would refer the value 77 as the global value and both console.logs will show 77
    console.log(f)
}

console.log(f)



// Primitive Data types


let x = "victor";
let y = 22;
let z = 3.5;
const g = true;
let q = undefined;
let r = null;

console.log(x,y,z,g,q,r);
console.log(typeof(x),typeof(y),typeof(z),typeof(g),typeof(q),typeof(r));


// Objects

let o = {
    name: "chikara", // name is a single word can be written without double quotes
    "job role": "swe", // job role is a multi words word so written in double quotes
    "job code": 7000
    // any kind of key value pairs can be put into a object and the values of these kays can be of any primitive data type
}

console.log(o);

o.salary = "2lakh";

console.log(o);