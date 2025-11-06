let container = document.querySelector("#container");


function welcome(){
// #create element in "JS" space
let headline = document.createElement("h5");
headline.innerText= "Welcome to my Page";



// // put it on the page
// document.body.append(headline);
//put it into another element;
container.prepend(headline);


// remove an element from the page.
document.querySelector(".notWanted").remove();
}

function moveBox() {
    // let container = document.querySelector("#container");
    container.classList.toggle('move');

    // Random between 0 and 1;
    let r1= Math.random();
    console.log(r1);
    // Custom number size;  
    let r2 =Math.random() * 100;
    console.log(r2);
    // Custome min and max;
    let r3 = 10+Math.random() *10;
    console.log(r3);

    let r4= Math.floor(r3);
     console.log(r4);


     document.querySelector(".notWanted").style.fontSize = r2+ "px";
}
