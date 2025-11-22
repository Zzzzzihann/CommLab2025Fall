
let secondsBox = document.querySelector(".seconds");

function getTheTime(){
    let now = new Date();
    console.log(now);
    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    console.log( h, m, s );

    //Clear out the seconds div compeletely 
    secondsBox.innerHTML = "";

  repeat(s, function(){
  let div = document.createElement("div");
    secondsBox.append(div);
  })
    
  // let p = document.createElement("p");
  // p.innerText = s;
  // s
}

setInterval(getTheTime, 1000);

// getTheTime();


// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}