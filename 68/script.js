console.log("ck")

let boxes = document.getElementsByClassName("box") // since many elements can have same class here elements is written
console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red" // here element is written because there can only be a single id for a single element

document.querySelector(".box").style.backgroundColor = "green" // will only make the 1st box green as it will look for the very first element with class box

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})