const startBtn = document.querySelector(".Start");
const stopBtn = document.querySelector(".Stop");
startBtn.addEventListener("click", () => {
    let setOff = setInterval(countTimer, 1000)
    timeDone = false;
})
stopBtn.addEventListener("click", () => {
    clearInterval(setOff);
    timeDone = true;
})
let timeDone = false; //since I cant figure out set interval do this
const timer = document.querySelector(".timer");
const body = document.querySelector("body");
let count = 10;

function countTimer () {
    if(timeDone == false)
    {
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
}