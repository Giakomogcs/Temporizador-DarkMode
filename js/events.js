import { 
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonLight,
  ButtonDark,
  cardArvore,
  cardNuvem,
  cardLoja,
  cardFogo,
  ButtonMais,
  ButtonMenos,
} from "./elements.js"

export default function({controls, timer, sound, styleMode}) {
 
  ButtonLight.addEventListener('click', function() {
    sound.pressButton()
    controls.ligth()
    styleMode.dark()
  })
  
  
  ButtonDark.addEventListener('click', function() {
    sound.pressButton()
    controls.dark()
    styleMode.ligth()
  })

  cardArvore.addEventListener('click', function() {
    styleMode.cardArvoreSelect()
    sound.pressButton()
    sound.arvoreAudio()

  })

  cardNuvem.addEventListener('click', function() {
    styleMode.cardNuvemSelect()
    sound.pressButton()
    sound.nuvemAudio()
  })

  cardLoja.addEventListener('click', function() {
    styleMode.cardLojaSelect()
    sound.pressButton()
    sound.lojaAudio()
  })

  cardFogo.addEventListener('click', function() {
    styleMode.cardFogoSelect()
    sound.pressButton()
    sound.fogoAudio()
  })
  
  
  ButtonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  ButtonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  ButtonStop.addEventListener('click', resetAll)
  
  function resetAll(){
    controls.reset()
    timer.reset()
    sound.pressButton()
  }

  ButtonMais.addEventListener('click', function() {
    timer.mais()
    sound.pressButton()
  })

  ButtonMenos.addEventListener('click', function() {
    timer.menos()
    sound.pressButton()
  })
  
  
  ButtonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
    
    if(!newMinutes) {
      timer.reset()
      return
    }
    
  
    timer.updateDisplay(newMinutes,0)
    timer.updateMinutes(newMinutes)
  })
}