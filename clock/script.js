let quoteSecond = "雪片纷纷扬扬地落下他的灵魂缓缓陷入沉眠他听着雪花在天地间悠悠飘落悠悠地如同他们最终的归宿那样飘落在每一个生者和死者身上。";
let quoteMinute = "雪落在晦暗的中部平原的每一寸土地上落在没有树木的山丘上。轻轻地落在艾伦沼泽上再往西去还见它恬然落入香农河汹涌的暗流之中。";
let indexSecond = 0;
let minuteWords = [
    "...the","lonely","churchyard","where","Michael","Furey","lay","buried.",
    "It","lay","thickly","drifted","on","the","crooked","crosses","and",
    "headstones,","on","the","spears","of","the","little","gate,","on",
    "the","barren","thorns.","His","soul","swooned","slowly","as","he",
    "heard","the","snow","falling","faintly","through","the","universe",
    "and","faintly","falling,","like","the","descent","of","their","last",
    "end,","upon","all","the","living","and","the","dead."
];
let hourWords = ["Inspired","by","the","final", "snowfall","passage", "in", "James", "Joyce’s", "The", "Dead","in", "Dubliners,", "published", "in", "1914,", "among", "the", "most", "iconic", "snowfall", "scenes", "in", "literature."]

let secondsBox = document.querySelector(".seconds");
let minutesBox = document.querySelector(".minuteText");
let hoursBox = document.querySelector(".hourText");

function getTheTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    console.log(h, m, s);

    if (s === 0) {
        secondsBox.innerHTML = "";
        indexSecond = 0;
    }

    repeat(s, function(){
        let snowSecond = quoteSecond[indexSecond];

        if (!snowSecond) {
            indexSecond = 0;
            snowSecond = quoteSecond[indexSecond];
        }

        let div = document.createElement("div");
        div.classList.add("fallingText");
        div.innerText = snowSecond;

        div.style.left = (Math.random() * 80 + 10) + "%";
        div.style.fontFamily = "PingFang SC";

        secondsBox.append(div);

        indexSecond++;
    });
}

setInterval(getTheTime, 1000);

function callMinuteWords() {
    let now = new Date();
    let m = now.getMinutes();

    minutesBox.innerHTML = "";

    repeat(m, function(i){
        let span = document.createElement("span");
        span.innerText = minuteWords[i];
        minutesBox.appendChild(span);
    });
}

setInterval(callMinuteWords, 1000);
callMinuteWords();

function callHourWords() {
    let now = new Date();
    let h = now.getHours();

    hoursBox.innerHTML = "";

    repeat(h, function(i){
        let span = document.createElement("span");
        span.innerText = hourWords[i];
        hoursBox.appendChild(span);
    });
}

setInterval(callHourWords, 1000);
callHourWords();

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
