let startBtn = document.querySelector("#startBtn");
let shipSound = new Audio("38011-Boat-Horn-Distant-Short-Ech.wav");

startBtn.addEventListener("click", function(e){
    e.preventDefault(e);
    shipSound.play();

    setTimeout(function(){
        window.location.href = "chap5div.html"
    }, 8000); 
});
