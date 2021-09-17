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
  while(count > 0)
  {
      let hours = count / 3600;
      let minutes = count / 60;
      let seconds = count % 60;

  }
    timer.textContent = count;
    body.append(timer);
}