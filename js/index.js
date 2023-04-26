import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    buttonLightMode,
    buttonDarkMode,
    minutesDisplay,
    secondsDisplay,
    forestCard,
    rainCard,
    coffeeTableCard,
    firePlaceCard,
    btnPlayPath,
    btnStopPath,
    btnPlusPath,
    btnMinusPath,
    forestPath,
    rainPath,
    coffeeTablePath,
    firePlacePath,
    inputForest,
    inputRain,
    inputCoffeeTable,
    inputFirePlace,
    forestVol,
    rainVol,
    coffeeTableVol,
    firePlaceVol,
} from "./elements.js"

let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonLightMode,
    buttonDarkMode,
    forestCard,
    rainCard,
    coffeeTableCard,
    firePlaceCard,
    forestPath,
    rainPath,
    coffeeTablePath,
    firePlacePath,
    inputForest,
    inputRain,
    inputCoffeeTable,
    inputFirePlace,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes,
})

buttonPlay.addEventListener('click',function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click',function(){
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click',function(){
    controls.reset()
    timer.resetTimer()    
})

buttonIncrease.addEventListener('click', function(){
    timer.minutesIncrease()
})

buttonDecrease.addEventListener('click', function(){
    timer.minutesDecrease()
})

buttonLightMode.addEventListener('click', function(){
    controls.lightMode()
})

buttonDarkMode.addEventListener('click', function(){
    controls.darkMode()
})

document.querySelectorAll('.color_mode_button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const targetElement = (event.currentTarget);
        const elementId = targetElement.id;
        if (elementId === 'enable_light_mode') {
            document.documentElement.setAttribute('data-color-mode', 'light');
        } else if (elementId === 'enable_dark_mode') {
            document.documentElement.setAttribute('data-color-mode', 'dark');
        }
    });
});


forestCard.addEventListener("click", function(){
    controls.forestCardControl()
  })
  
  rainCard.addEventListener("click", function(){
   controls.rainCardControl()
  })
  
  coffeeTableCard.addEventListener("click", function(){
    controls.coffeeTableCardControl()
  })
  
  firePlaceCard.addEventListener("click", function(){
    controls.firePlaceCardControl()
  })
  
  forestVol.addEventListener("change", function(){
    controls.forestVolume()
  })
  
  rainVol.addEventListener("change", function(){
    controls.rainVolume()
  })
  
  coffeeTableVol.addEventListener("change", function(){
    controls.coffeeTableVolume()
  })
  
  firePlaceVol.addEventListener("change", function(){
    controls.firePlaceVolume()
  })
  
  