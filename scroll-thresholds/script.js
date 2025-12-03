function getScrollPercentage() {
    let scrollTop = window.scrollY;
    console.log(scrollTop);

    let maxScroll = document.body.scrollHeight - window.innerHeight;

    let percentage = scrollTop / maxScroll;
    console.log(percentage);

    return percentage;
}

window.addEventListener("scroll", function () {
    console.log("Yeah, we are scrolling!");

    // how far we scroll
    let scrollTop = window.scrollY;

    // how far can we scroll in total
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    let perc = scrollTop / maxScroll;
    console.log("Scroll percentage:", perc);

    // trigger animation
    if (perc > 0.33) {
        document.querySelector(".one p").style.transform = "rotate(720deg)";
    }

    if (perc > 0.77){
        document.querySelector(".two p").style.opacity = "0.1";
    }else{
        document.querySelector(".two p").style.opacity = "1";
    }

    let catAngle = (10800) * perc;
    document.querySelector("#cat").style.transform = "rotate(" + catAngle + "deg)";
});
