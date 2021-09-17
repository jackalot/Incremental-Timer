const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
startBtn.addEventListener("click", () => {
    timeToStop = false;
countTimer(3600);
})
let timeToStop = false;
stopBtn.addEventListener("click", () => {
    timeToStop = true;
})
const timer = document.querySelector(".timer");
const body = document.querySelector("body");
function countTimer (count) {
    console.log(count);
    count++;
    timer.textContent = count;
    body.append(timer);
}