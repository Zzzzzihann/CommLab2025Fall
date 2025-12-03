let btn = document.querySelector("#openDoor");
// let childPlaySound = new Audio("484036-VOXChld-Two_Kids_Laughing_And_Running_Playing_Ext_01-NMS-Soundsnap.wav");
// ask if there is a way to trigger sound without clicking/scrolling

btn.addEventListener("click", function(){

    let doorOpenSound = new Audio("124443-Creaky_wood_door_open_inquisitively.wav");
    doorOpenSound.play();

    //Tutorial of using js to link to next page:
    //https://www.cnblogs.com/Qian123/p/5345298.html
    //https://stackoverflow.com/questions/139623/delayed-jump-to-a-new-web-page
    setTimeout(function(){
        window.location.href = "chap2london.html"
    }, 2000); 
});
