export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  let bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  const cardarvoreAudio = ("audios/Wild Life In The Forest Sounds.mp3")
  const cardnuvemAudio = ("audios/(Siga a Música) Relaxe com o som da chuva 2 minutos.mp3")
  const cardlojaAudio = ("audios/Office Sounds.mp3")
  const cardfogoAudio = ("audios/2 Minutes of fireplace.mp3")

  let inputArvore = document.querySelector('#arvoreRange')
  let inputNuvem = document.querySelector('#nuvemRange')
  let inputLoja = document.querySelector('#lojaRange')
  let inputFogo = document.querySelector('#fogoRange')

  let newValueinput = 50
  inputArvore.addEventListener("input", volumeInputarvore); 
  inputNuvem.addEventListener("input", volumeInputnuvem); 
  inputLoja.addEventListener("input", volumeInputloja); 
  inputFogo.addEventListener("input", volumeInputfogo); 

  bgAudio.loop = true
  
  
  function volumeInputarvore() { 
    bgAudio.volume  = inputArvore.value/100
    newValueinput = inputArvore.value
    inputArvore.value = newValueinput
  } 

  function volumeInputnuvem() { 
    
    bgAudio.volume  = inputNuvem.value/100
  } 

  function volumeInputloja() { 
    
    bgAudio.volume  = inputLoja.value/100
  } 

  function volumeInputfogo() { 
    
    bgAudio.volume  = inputFogo.value/100
  } 

  
  function arvoreAudio() {
    bgAudio.pause()
    bgAudio = new Audio(cardarvoreAudio)
    
    volumeInputarvore()
    bgAudio.play()
  }

  function nuvemAudio() {
    bgAudio.pause()
    bgAudio = new Audio(cardnuvemAudio)
    
    volumeInputnuvem()
    bgAudio.play()
  }

  function lojaAudio() {
    bgAudio.pause()
    bgAudio = new Audio(cardlojaAudio)
    
    volumeInputloja()
    bgAudio.play()
  }

  function fogoAudio() {
    bgAudio.pause()
    bgAudio = new Audio(cardfogoAudio)
    
    volumeInputfogo()
    bgAudio.play()
  }
  
  function pressButton() {
    buttonPressAudio.volume = 0.2;
    buttonPressAudio.play()
  }

  function timeEnd(){
    bgAudio.pause()
    bgAudio.loop = false
    kitchenTimer.play()
  }
  
  return{
    pressButton,
    timeEnd,
    bgAudio,
    arvoreAudio,
    nuvemAudio,
    lojaAudio,
    fogoAudio,
    
  }

}