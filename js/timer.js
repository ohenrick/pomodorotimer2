import { Sound } from "./sounds.js"

export function Timer({ 
    minutesDisplay,
    secondsDisplay,
    reset,
    minutes,
}) {

let timerTimeOut

const sound = Sound()

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateDisplay(minutes, 0)

        if(minutes <= 0 && seconds <= 0){
            
            updateDisplay(10, 0)
            sound.timeEnd()
            return 
          }

        if( seconds <= 0 ) {
            seconds = 60

            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))
        
        countdown()
    }, 1000)
}

function updateMinutes(newMinutes) {
    minutes = newMinutes
}

function minutesIncrease(){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
}
  
function minutesDecrease(){
    if(minutesDisplay.textContent > 4){
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }else {
      minutesDisplay.textContent = String(Number(60)).padStart(2, "0")
    }  
}

function hold() {
    clearTimeout(timerTimeOut)
    return
}

return {
    countdown,
    resetTimer,
    updateDisplay,
    minutesDecrease,
    minutesIncrease,
    updateMinutes,
    hold
    }
}