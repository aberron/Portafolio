let t;
let once = false;
let interacted = false;
const audioContainer = document.getElementById("myAudio");
const blackbox = document.getElementById("inital_box");
//const elevens = document.getElementById("elevens");
returnElevens(11680);

// //SECCION WAVEFORM
// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = new AudioContext();
// let currentBuffer = null;
// const visualizeAudio = url => {
//   fetch("https://res.cloudinary.com/dyk5cl3d8/video/upload/v1652975048/SISMA/sismalert30_thmbxq.mp3")
//   .then(respose => response.arrayBuffer())
//   .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
//   .then(audioBuffer => visualizeAudio(audioBuffer));
// };

// const filterData = audioBuffer => {
//   const rawData = audioBuffer.getChannelData(0);
//   const samples = 70;
//   const blockSize = Math.floor(rawData.length / samples);
//   const filteredData = [];
//   for(let i = 0; i < samples; ++i)
//   {
//     let blockStart = blockSize * i;
//     let sum = 0;
//     for(let j = 0; j < blockSize; ++j)
//     {
//       sum = sum + Math.abs(rawData[blockStart + j]);
//     }
//     filteredData.push(rawData[i * blockSize]);
//   }
//   return filteredData;
// }

// const normalizeData = filteredData => {
//   const multiplier = Math.pow(Math.max(...filterData), -1);
//   return filteredData.map(n => n * multiplier);
// }

// const draw = normalizeData => {
//   const canvas = document.querySelector("canvas");
//   const dpr = window.devicePixelRatio || 1;
//   const padding = 20;
//   canvas.width = canvas.offsetWidth * dpr;
//   canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
//   const ctx = canvas.getContext('2d');
//   ctx.scale(dpr, dpr);
//   ctx.translate(0, canvas.offsetHeight /2 + padding);

//   const width = canvas.offsetWidth / normalizedData.length;
//   for(let i = 0; i < normalizeData.length; ++i)
//   {
//     const x = width * i;
//     let height = normalizedData[i] * canvas.offsetHeight - padding;
//     if(height < 0) {
//       height = 0;
//     }else if(height > canvas.offsetHeight / 2){
//       height = height > canvas.offsetHeight / 2;
//     }
//     drawLineSegment(ctx, x, height, width, (i + 1) % 2);
//   }
// }

// const drawLineSegment = (ctx, x, y, width, isEven) => {
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "#000";
//   ctx.beginPath();
//   y = isEven ? y : -y;
//   ctx.moveTo(x, 0);
//   ctx.lineTo(x, y);
//   ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
//   ctx.lineTo(x + width, 0);
//   ctx.stroke();
// }

window.onclick = function(){
  interacted = true;
  blackbox.hidden = true;
  draw();
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
    if(t[0] === 11 && t[1] === 20 && t[2] < 30 && !once)
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
