const Root = document.querySelector(":root")
const Timer = document.querySelector(":root")
const Controls = document.querySelector(":root")
const Cards = document.querySelector(":root")

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
  
  Root.style.setProperty('--bg-card-primary', '#0A3442');
  
}