const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
startBtn.addEventListener("click", () => {
const time = setInterval(countTimer(36000), 1000);
})
stopBtn.addEventListener("click", () => {
    clearInterval(time);
})
const timer = document.querySelector(".timer");
const body = document.querySelector("body");
function countTimer (count) {
    console.log(count);
    count++;
    timer.textContent = count;
    body.append(timer);
}