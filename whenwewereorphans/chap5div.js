//console.log("Chap 5 Ready.");

let imgCathay = document.querySelector("#enterCathay");
let textCathay1 = document.querySelector("#cathayText1");
let textCathay2 = document.querySelector("#cathayText2");
let textCathay3 = document.querySelector("#cathayText3");
let oldHouse = document.querySelector("#oldHouseVisit");

let textServant1 = document.querySelector("#oldServant1");
let textServant2 = document.querySelector("#oldServant2");
let textServant3 = document.querySelector("#oldServant3");

let textWarlord0 = document.querySelector("#warlord");
let textWarlord1 = document.querySelector("#warlord1");
let textWarlord2 = document.querySelector("#warlord2");
let textWarlord3 = document.querySelector("#warlord3");
let imgWarlord1 = document.querySelector("#wangKu1");
let imgWarlord2 = document.querySelector("#wangKu2");
let imgWarlord3 = document.querySelector("#wangKu3");
let imgWarlord4 = document.querySelector("#wangKu4");
let textWarlord4 = document.querySelector("#warlord4");

imgCathay.onclick = function() {
    imgCathay.style.display = "none";
    textCathay1.style.display = "block";
};

textCathay1.onclick = function() {
    textCathay1.style.display = "none";
    textCathay2.style.display = "block";
};

textCathay2.onclick = function() {
    textCathay2.style.display = "none";
    textCathay3.style.display = "block";
};

textCathay3.onclick = function() {
    // textCathay3.style.display = "none";
    // console.log("runningnow!");
    oldHouse.style.display = "block";
};


textServant1.onclick = function() {
    textServant1.style.display = "none";
    textServant2.style.display = "block";
};

textServant2.onclick = function() {
    textServant2.style.display = "none";
    textServant3.style.display = "block";
};

textServant3.onclick = function() {
    textCathay3.style.display = "none";
    // console.log("runningnow!");
    textServant3.style.display = "block";
    textWarlord0.style.display = "block";
};

// textWarlord0.onclick = function() {
//     textWarlord0.style.display = "none";
//     textWarlord1.style.display = "block";
// };

textWarlord1.onclick = function() {
    textWarlord1.style.display = "none";
    console.log("I am deleting");
    textWarlord2.style.display = "block";
};

textWarlord2.onclick = function() {
    textWarlord2.style.display = "none";
    textWarlord3.style.display = "block";
};

textWarlord3.onclick = function() {
    textWarlord3.style.display = "none";
    imgWarlord1.style.display = "block";
};

imgWarlord1.onclick = function() {
    imgWarlord1.style.display = "none";
    imgWarlord2.style.display = "block";
};

imgWarlord2.onclick = function() {
    imgWarlord2.style.display = "none";
    imgWarlord3.style.display = "block";
};

imgWarlord3.onclick = function() {
    imgWarlord3.style.display = "none";
    imgWarlord4.style.display = "block";
};

imgWarlord4.onclick = function() {
    imgWarlord4.style.display = "none";
    textWarlord4.style.display = "block";
};