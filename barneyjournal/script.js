let dailytext = [
  `SEPTEMBER 2ND.  I am taking a calmer view of the Tayloe affair. The monastic
life here must have become too much for him. That, and the abandonment of his
precious guinea pigs. He insisted to the last that they were better-suited than
Barney to my experiments. They were more his speed, I'm afraid. He was an
earnest and willing worker, but something of a clod, poor fellow. At last I have
complete freedom to carry on my work without the mute reproaches of Tayloe. I
can only ascribe his violent antagonism toward Barney to jealousy. And now that
he has gone, how much happier Barney appears to be! I have given him
complete run of the place, and what sport it is to observe how his newly
awakened Intellectual curiosity carries him about. After only two weeks of
glutamic acid treatments, he has become interested in my library, dragging the
books from the shelves, and going over them page by page. I am certain he
knows there is some knowledge to be gained from them had he but the key.`,

  `SEPTEMBER 8TH. For the past two days I have had to keep Barney confined,
and how he hates it. I am afraid that when my experiments are completed I shall
have to do away with Barney. Ridiculous as it may sound there is still the
possibility that he might be able to communicate his intelligence to others of his
kind. However small the chance may be, the risk is too great to ignore.
Fortunately there is, in the basement, a vault built with the idea of keeping vermin
out, and it will serve equally well to keep Barney in.`,

  `SEPTEMBER 9TH. Apparently I have spoken too soon. This morning I let him
out to frisk around a bit before commencing a new series of tests. After a quick
survey of the room he returned to his cage, sprang up on the door handle,
removed the key with his teeth, and before I could stop him, he was out the
window. By the time I reached the yard I spied him on the coping of the well, and
I arrived on the spot only in time to hear the key splash into the water below.
I own I am somewhat embarrassed. It is the only key. The door is locked. Some
valuable papers are in separate compartments inside the vault. Fortunately,
although the well is over forty feet deep, there are only a few feet of water in the
bottom, so the retrieving of the key does not present an insurmountable obstacle. 
But I must admit Barney has won the first round`,

  `SEPTEMBER 10TH. I have had a rather shaking experience, and once more in a
minor clash with Barney. I have come off second-best. In this instance I will admit
he played the hero's role and may even have saved my life.
In order to facilitate my descent into the well I knotted a length of three-quarterinch 
rope at one-foot intervals to make a rude ladder. I reached the bottom easily
enough, but after only a few minutes of groping for the key, my flashlight gave
out and I returned to the surface. A few feet from the top I heard excited squeaks
from Barney, and upon obtaining ground level I observed that the rope was
almost completely severed. Apparently it had chafed against the edge of the
masonry and the little fellow, perceiving my plight, had been doing his utmost to
warn me.
I have now replaced that section or rope and arranged some old sacking beneath
it to prevent recurrence of the accident. I have replenished the batteries in my
flashlight and am now prepared for the final descent. These few moments I have
taken off to give myself a breathing spell and to bring my journal up to date.
Perhaps I should fix myself a sandwich as I may be down there longer than
seems likely at the moment.`,

  `SEPTEMBER 11TH. Poor Barney is dead and soon I shell be the same. He was
a wonderful ratt and life without him is knot worth livving. If anybody reeds this
please do not disturb anything on the island but leeve it like it is as a shryn to
Barney, espechilly the old well. Do not look for my body as I will caste myself into
the see. You mite bring a couple of young ratts and leeve them as a living
memorial to Barney. Females-no males. I sprayned my wrist is why this is written
so bad. This is my laste will. Do what I say an don't come back or disturb
anything after you bring the young ratts like I said. Just females.
Goodby.`
];


let index = 0;

function nextJournal() {
  console.log("Button clicked!");
  let journal = document.querySelector("#journal");


  let day = document.createElement("p");
  day.innerText = dailytext[index];

  day.style.position = "absolute";
  day.onclick = goodby;
  day.style.left = Math.floor(Math.random() * Math.max(window.innerWidth - 30, 0)) + "px";
  day.style.top = Math.floor(Math.random() * Math.max(window.innerHeight - 20, 0)) + "px";
  day.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
//   day.style.fontSize = (Math.random() * 10 + 16) + "px";
//   day.style.whiteSpace = "pre-wrap"; 
  day.classList.add("move", "floating");

  journal.append(day);

  index++;
if (index >= dailytext.length) {
  index = 0;
} 
}

function goodby() {
  let goodbye = document.querySelector("p");
    goodbye.innerText = "Barney is DEAD, GOODBY!";
    goodbye.style.fontSize = (Math.random() * 100 + 10) + "px";
    goodbye.style.color= `rgb(${Math.floor(Math.random() * 100+100)}, ${Math.floor(Math.random() * 10)}, ${Math.floor(Math.random() * 100)})`;
}

function bonus(){
    let credit = document.querySelector("h2");
    credit.innerText = "Barney, A Short Story by Will Stanton";
}
