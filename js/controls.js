

export default function Controls({
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
}){

  function play() {
    ButtonPlay.classList.toggle('hide')
    ButtonPause.classList.toggle('hide')
    ButtonSet.classList.add('hide')
    ButtonStop.classList.remove('hide')
  }

  function pause() {
    ButtonPlay.classList.toggle('hide')
    ButtonPause.classList.toggle('hide')
  }

  function reset(){
    ButtonPlay.classList.toggle('hide')
    ButtonPause.classList.toggle('hide')
    ButtonSet.classList.toggle('hide')
    ButtonStop.classList.toggle('hide')
  }

  function ligth(){
    ButtonLight.classList.add('hide')
    ButtonDark.classList.remove('hide')
  }

  function dark(){
    ButtonLight.classList.remove('hide')
    ButtonDark.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
  
    if(!newMinutes) {
      return false
    }

    return newMinutes
  }


  return {
    reset,
    play,
    pause,
    stop,
    getMinutes,
    ligth,
    dark,
  }
}


