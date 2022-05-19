let t;
let once = false;
let interacted = false;
const audioContainer = document.getElementById("myAudio");
const blackbox = document.getElementById("inital_box");
//const elevens = document.getElementById("elevens");
returnElevens(11680);

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
    //p.innerHTML = t[0].toString()+":"+t[1].toString()+":"+t[2].toString();
    p.innerHTML = displayClock(t);
    console.log(once);
    if(!interacted)return;
    if(t[0] === 11 && t[1] === 25 && t[2] < 30 && !once)
    {
        audioContainer.currentTime = t[2];
        playAudio();
        once = true;
    }
}

function returnElevens(reps)
{
  var result = "19 ";
  for(let i = 0; i < reps; ++i)
  {
    result += "11 ";
  }
  result += "19";
  const elevns = document.getElementById("elevens");
  elevns.innerHTML = result;
  //return result;
}

function displayClock(t)
{
  let result = "";
  if(t[0] < 10)
  {
    result += "0" + t[0].toString();
  }else{
    result += t[0].toString();
  }
  result += ":";
  if(t[1] < 10)
  {
    result += "0" + t[1].toString();
  }else{
    result += t[1].toString();
  }
  result += ":";
  if(t[2] < 10)
  {
    result += "0" + t[2].toString();
  }else{
    result += t[2].toString();
  }
  return result;
}
