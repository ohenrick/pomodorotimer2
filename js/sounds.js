export function Sound() {
        const forestSound = new Audio("./assets/Floresta.wav")
        const rainSound = new Audio("./assets/Chuva.wav")
        const coffeeTableSound = new Audio("./assets/Cafeteria.wav")
        const firePlaceSound = new Audio("./assets/Lareira.wav")
        const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
        
        
        forestSound.loop = true
        rainSound.loop = true
        coffeeTableSound.loop = true
        firePlaceSound.loop = true

        
        function timeEnd() {
            kitchenTimer.play()
        }

    return {
        forestSound,
        rainSound,
        coffeeTableSound,
        firePlaceSound,
        timeEnd
    }
}
  