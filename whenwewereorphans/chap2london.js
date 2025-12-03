let links = document.querySelectorAll(".link");

let flipSound = new Audio("326390-Newspaper1.wav");


let link1 = document.querySelector("#link1");
link1.addEventListener("click", function(event1){
    event1.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2banks.html"
    }, 2000); 
});

let link2 = document.querySelector("#link2");
link2.addEventListener("click", function(event2){
    event2.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2mrbanks.html"
    }, 2000); 
});

let link3 = document.querySelector("#link3");
link3.addEventListener("click", function(event3){
    event3.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2company.html"
    }, 2000); 
});

let link4 = document.querySelector("#link4");
link4.addEventListener("click", function(event4){
    event4.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2mrsbanks.html"
    }, 2000); 
});

let link5 = document.querySelector("#link5");
link5.addEventListener("click", function(event5){
    event5.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2settlement.html"
    }, 2000); 
});

let link6 = document.querySelector("#link6");
link6.addEventListener("click", function(event6){
    event6.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2christopher.html"
    }, 2000); 
});

let link7 = document.querySelector("#link7");
link7.addEventListener("click", function(event7){
    event7.preventDefault();
    flipSound.play();

    setTimeout(function(){
        window.location.href = "chap2philip.html"
    }, 2000); 
});