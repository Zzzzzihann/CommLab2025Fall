//Q1
let nameInput = document.querySelector("#nameInput");
let nameSubmit = document.querySelector("#nameSubmit");
let nameFeedback = document.querySelector("#nameFeedback");
let yearSection = document.querySelector("#yearSection");

nameSubmit.addEventListener("click", function(){
    let nameTest = nameInput.value;

    if(
        nameTest === "Christopher" 
        || nameTest == "Christopher Banks"
        || nameTest == "christopher"
        || nameTest == "christopher "
        || nameTest == "Christopher " 
        || nameTest == "Chris"
    ){
        nameFeedback.innerHTML = "Yes. You are Christopher Banks.";
        yearSection.classList.remove("hidden"); 
        document.querySelector("#yearInput"); 
    }else{
        nameFeedback.innerHTML = "Not quite. Think of the boy who thinks of Shanghai every day.";
    }
});


// Q2
let yearInput = document.querySelector("#yearInput");
let yearSubmit = document.querySelector("#yearSubmit");
let yearFeedback = document.querySelector("#yearFeedback");

yearSubmit.addEventListener("click", function(){
    let yearTest = yearInput.value;

    if(yearTest === "1937"){
        yearFeedback.innerHTML =
        'For you, the past is never past; you are living it through every <a href="chap4.html">present moment</a>.';

    }else if(yearTest === "1912"){
        yearFeedback.innerHTML = "It feels like yesterday, but it was twenty-five years ago.";

    }else{
        yearFeedback.innerHTML = "You may have to look again.";
    }
});
