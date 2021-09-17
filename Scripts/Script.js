const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
startBtn.addEventListener("click", () => {
    timeToStop = false;
    let setOff = setInterval(countTimer(10), 1000)
})
let timeToStop = false;
stopBtn.addEventListener("click", () => {
    timeToStop = true;
})
const timer = document.querySelector(".timer");
const body = document.querySelector("body");
function countTimer (count) {
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