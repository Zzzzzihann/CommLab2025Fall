let indexPage = document.querySelector(".returnLink");

indexPage.addEventListener("click", function(e){
    let flipNews = new Audio("326390-Newspaper1.wav");
    e.preventDefault();
    flipNews.play();

    setTimeout(function(){
        window.location.href = "chap2london.html";
    }, 2000); 
});
