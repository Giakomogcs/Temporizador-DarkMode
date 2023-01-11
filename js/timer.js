
import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  let decrescimo = -1
  
  function reset(){
    
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    return 
  }
  
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    
    minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
  }
  
  function countdown() {
    
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes<=0 && seconds<=0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return 
      }

      if(minutes>0 && seconds>60){
        seconds = 0

        ++minutes
      }

      if(minutes>0 && seconds<=0){
        seconds = 60

        --minutes
      }

      updateDisplay( minutes , String(seconds + decrescimo))

      decrescimo = -1
      countdown()
    }, 1000)
    return
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }


  function mais() {

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    decrescimo = 5
    let newSeconds = seconds+decrescimo
    
    
    if(minutes>0 && (newSeconds)>=60){
      newSeconds = 0

      ++minutes
    }
    

    updateDisplay( minutes , String(newSeconds))
    decrescimo = -1
  }

  function menos() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    decrescimo = 5
    let newSeconds = seconds-decrescimo
    
    if(seconds < 0){
      newSeconds = 0
      updateDisplay( minutes , String(newSeconds))
    }
    else{
      if(minutes>0 && (newSeconds)==0){
        newSeconds = 0
  
        --minutes
      }
  
      if(minutes>0 && (newSeconds)<0){
        newSeconds = 60 - (-newSeconds)
  
        --minutes
      }
  
      updateDisplay( minutes , String(newSeconds))
    }

    decrescimo = -1
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    mais,
    menos,
  }
 
}