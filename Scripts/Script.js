const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
let setOff = setInterval(countTimer, 1000);
clearInterval(setOff); //clear it instantly, this sets it on global scope
startBtn.addEventListener("click", () => {
    setOff = setInterval(countTimer, 1000); //repeat it here so it starts
})
stopBtn.addEventListener("click", () => {
    clearInterval(setOff);
})
const timer = document.querySelector(".timer");
const body = document.querySelector("body");
let count = 10;

function countTimer () {
     console.log(count)
     let hours = Math.round(count / 3600);
     let minutes = Math.round(count / 60);
     let seconds = Math.round(count % 60);
     timer.textContent = `${hours}:${minutes}:${seconds}`;
     body.append(timer);
     if(count > 0)
     {
         count -= 1;
     }
     else {
         console.log("sound effect");
     }
}