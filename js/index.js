import Style from "./style.js"
import Timer from "./timer.js"
import Controls from "./controls.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonMais,
  ButtonMenos,
  ButtonLight,
  ButtonDark,
  minutesDisplay,
  secondsDisplay,
  cardArvore,
  cardNuvem,
  cardLoja,
  cardFogo,
} from "./elements.js"


const controls = Controls({
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonMais,
  ButtonMenos,
  ButtonLight,
  ButtonDark,
  cardArvore,
  cardNuvem,
  cardLoja,
  cardFogo,
})

const styleMode = Style({
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonLight,
  ButtonDark,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound, styleMode})


