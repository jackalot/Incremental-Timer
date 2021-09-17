const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
startBtn.addEventListener("click", () => {
const time = setInterval(countTimer(36000), 1);
})
stopBtn.addEventListener("click", () => {
    clearInterval(time);
})
function countTimer (count) {
    console.log(count);
}