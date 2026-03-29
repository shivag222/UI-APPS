let heading = document.getElementById("title");
let items = document.getElementsByClassName("subtopic");

function add(){
    heading.innerHTML = "Welcome shiva";
}

function sub(){
    items[0].innerHTML = "to world";
}

function sayHello(){
    alert("welcome to the site");
}

let button = document.getElementById("btn");

// button.addEventListener("click", function(){
//     alert("welcome shiva");
// })

button.addEventListener("click", ()=>{
    console.log("clicked the mouse");
})

button.addEventListener("mouseout",()=>{
    console.log("mouse is out");
})

button.addEventListener("mouseover",()=>{
    console.log("mouse over");
})