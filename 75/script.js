console.log("victor")
console.log("Tango")
console.log("Charlie")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);


setTimeout(() => {
    console.log("I am inside settimeout2")
}, 2000);

console.log("Foxtrot")

const fn = ()=>{
    console.log("nothing")
}


const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("tango")
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )


