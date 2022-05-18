let t;
let once = false;
let interacted = false;
const audioContainer = document.getElementById("myAudio");
const blackbox = document.getElementById("inital_box");

window.onclick = function(){
  interacted = true;
  blackbox.hidden = true;
};

function playAudio() {
    audioContainer.play();
  }

  function pauseAudio() {
    audioContainer.pause();
  }

window.setInterval(getTime, 200);

function getTime()
{
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const time = [hour, minutes, seconds];
    t = time;
    const p = document.getElementById("clock");
    p.innerHTML = t[0].toString()+":"+t[1].toString()+":"+t[2].toString();
    console.log(once);
    if(!interacted)return;
    if(t[0] === 12 && t[1] === 47 && t[2] < 30 && !once)
    {
        audioContainer.currentTime = t[2];
        playAudio();
        once = true;
    }
}

