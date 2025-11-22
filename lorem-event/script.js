let s = document.querySelector("span");
console.log(s)

function move(){
    console.log("mouse over");
}

function move(eventInfo){
console.log(eventInfo);
let elementRed = eventInfo.target;
elementRed.style.color ="red";
// console.log("mouse over");
let randomX = -50+ Math.random()*100;
let randomY = -50+ Math.random()*100;
elementRed.style.transform ="translate("+ randomX +"px" , randomY +"px)";
}


// s.addEventListener("mouseover", move)

function addMover(element){
    element.addEventListener("mouseover", move)
}
// select ALL the spans
 let allSpans = document.querySelectorAll("span");

allSpans.forEach(addMover);

