let myButton = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let myOutput = document.querySelector("#myOutput");

// function buttonClicked(){
//     document.body.style.backgroundColor="black";
// }

myButton.addEventListener("mouseover",buttonClicked);

// anonymous functions
// This and the above one are the same thing
// If you only use this function once, you can use this anonymous function
// myButton.addEventListener("click", function(){ document.body.style.backgroundColor="black"
// });

function inputChanged (eventInfo){
    document.body.style.backgroundColor="black";
    eventInfo.target.remove;
    console.log(eventInfo.target.value);
    console.log("input changed!");
    myOutput.innerText = eventInfo.target.value;
}
// you can use change and input under there
// the difference is input counts each single movement, 
// change only trace beginning and ending as one time result
// change
myInput.addEventListener("change", inputChanged);

