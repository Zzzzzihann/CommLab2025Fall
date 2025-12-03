// ShanghaiSound.play();
let backgroundMusic = new Audio ("484036-VOXChld-Two_Kids_Laughing_And_Running_Playing_Ext_01-NMS-Soundsnap.wav");

backgroundMusic.play();

window.addEventListener("scroll", function(){


    let scrollTop = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let perc = scrollTop / maxScroll;

    if(perc > 0.01){ let a=document.querySelectorAll(".line")[0]; a.style.opacity="1"; a.style.transform="translateY(0)";}
    if(perc > 0.15){ let b=document.querySelectorAll(".line")[1]; b.style.opacity="1"; b.style.transform="translateY(0)"; }
    if(perc > 0.12){ let c=document.querySelectorAll(".line")[2]; c.style.opacity="1"; c.style.transform="translateY(0)"; }
    if(perc > 0.19){ let d=document.querySelectorAll(".line")[3]; d.style.opacity="1"; d.style.transform="translateY(0)"; }
    if(perc > 0.26){ let e=document.querySelectorAll(".line")[4]; e.style.opacity="1"; e.style.transform="translateY(0)"; }
    if(perc > 0.33){ let f=document.querySelectorAll(".line")[5]; f.style.opacity="1"; f.style.transform="translateY(0)"; }
    if(perc > 0.40){ let g=document.querySelectorAll(".line")[6]; g.style.opacity="1"; g.style.transform="translateY(0)"; }
    if(perc > 0.47){ let h=document.querySelectorAll(".line")[7]; h.style.opacity="1"; h.style.transform="translateY(0)"; }
    if(perc > 0.54){ let i=document.querySelectorAll(".line")[8]; i.style.opacity="1"; i.style.transform="translateY(0)"; }
    if(perc > 0.61){ let j=document.querySelectorAll(".line")[9]; j.style.opacity="1"; j.style.transform="translateY(0)"; }
    if(perc > 0.68){ let k=document.querySelectorAll(".line")[10]; k.style.opacity="1"; k.style.transform="translateY(0)"; }
    if(perc > 0.75){ let l=document.querySelectorAll(".line")[11]; l.style.opacity="1"; l.style.transform="translateY(0)"; }
    if(perc > 0.82){ let m=document.querySelectorAll(".line")[12]; m.style.opacity="1"; m.style.transform="translateY(0)"; }


    if(perc > 0.95){
        document.querySelector(".choices").style.opacity = "1";
    }
});

let ShanghaiSound = new Audio ("404160-MUSIC_-Torturing_Noises_-Tense_Creepy_Cinematic_Horror_Synth_Theme_-Transition_Sting_003528_.wav");
let transitionShanghai = document.querySelector("#go");
transitionShanghai.addEventListener("click", function(event1){
    event1.preventDefault();
    ShanghaiSound.play();

    setTimeout(function(){
        window.location.href = "chap5.html"
    }, 3500); 
});

let LondonSound = new Audio ("69764-Musical_element_guitar_wash_delay_transition-BLASTWAVEFX-06875.wav");
let transitionLondon = document.querySelector("#stay");
transitionLondon.addEventListener("click", function(event2){
    event2.preventDefault();
    LondonSound.play();

    setTimeout(function(){
        window.location.href = "index.html"
    }, 4500); 
});