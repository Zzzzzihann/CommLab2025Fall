let myText = document.querySelector("#myText");
let output = document.querySelector("#output");

function typeSomething(eventInfo) {
    let elementInteractiveWidth = eventInfo.target;
    

    let text = elementInteractiveWidth.value; 
    // assuming you're typing into an <input> or <textarea>
    console.log(text);

    if (text == "spin") {
        spin(elementInteractiveWidth);
    }

    output.innerText = text;
}

myText.addEventListener("input", typeSomething);

    //console.log("you are typing!");


// challenge 1: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:



myText.addEventListener("input", function(eventInfo){
    output.innerText = eventInfo.target.value;
});


// function to spin an element 
function spin(element){
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}




// -------- PART 2
let myButton = document.querySelector("#myButton");


 let count = 0; // global variable

myButton.addEventListener("click",function(eventInfo){
    // let count = 0; local
    count = count+1;
    console.log(count);

    if (count >= 10){
// document.body.style.backgroundColor= "black";
// supersize the button
supersize(eventInfo.target);


setTimeout(function()
{
    eventInfo.target.remove();
},500);
clearInterval(myInterval);
messageBoard.innerHTML = "";

// setTimeout(removeButton,500);
    
}
})


let messageBoard = document.querySelector("#messageBoard");






let myInterval = setInterval(function(){
    let clickLeft = 10- count
    addMessage("click the button" + clickLeft + "more.")
},500);



// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}