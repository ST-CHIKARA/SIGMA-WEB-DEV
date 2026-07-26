console.log("Events, Event Bubbling, setInterval & setTimeout")

let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yay You were clicked</b>"
})

button.addEventListener("contextmenu", ()=>{
    // alert("I was clicked")
    alert("DOnt hack us by right click please")
})


document.addEventListener("keydown", (e)=>{
    // alert("I was clicked")
    console.log(e)
})