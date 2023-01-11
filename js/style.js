const Root = document.querySelector(":root")
const ArvoreCard = document.querySelector(".arvore .card")
const ArvoreFill = document.querySelector(".arvore svg path")
const Arvoreinput = document.querySelector(".arvore input")
const NuvemCard = document.querySelector(".nuvem .card")
const NuvemFill = document.querySelector(".nuvem svg path")
const Nuveminput = document.querySelector(".nuvem input")
const FogoCard = document.querySelector(".fogo .card")
const FogoFill = document.querySelector(".fogo svg path")
const Fogoinput = document.querySelector(".fogo input")
const LojaCard = document.querySelector(".loja .card")
const LojaFill = document.querySelector(".loja svg path")
const Lojainput = document.querySelector(".loja input")
let timerColor = '#FFFFFF'
let bgMain = '#121214'
let bgcard = '#29292E'
let bgcardSelected = "#0A3442"
let fillCard = "hsla(var(--base-color),7%, 78%, 1)"
let ballRange = '#FFFFFF'
let lineRange = '#FFFFFF'
let ballRangeSelec = '#FFFFFF'
let lineRangeSelec = '#FFFFFF'

let bgcardArvore
let bgcardNuvem
let bgcardLoja
let bgcardFogo
let fillArvore
let fillNuvem
let fillLoja
let fillFogo
let ballRangeArvore
let ballRangeNuvem
let ballRangeLoja
let ballRangeFogo
let lineRangeArvore
let lineRangeNuvem
let lineRangeLoja
let lineRangeFogo

let arvoreSelected = false
let nuvemSelected = false
let lojaSelected = false
let fogoSelected = false



export default function Style(){
  function ligth(){
    
    timerColor = '#323238'
    bgMain = '#FFFFFF'
    bgcard = '#E1E1E6'
    fillCard = "hsla(var(--base-color),6%, 21%, 1)"
    bgcardSelected = "#02799D"
    ballRange = '#323238'
    lineRange = '#323238'

    ballRangeSelec = '#FFFFFF'
    lineRangeSelec = '#FFFFFF'
    update()
    resetSelect()
  
  }
  
  function dark(){

    timerColor = '#FFFFFF'
    bgMain = '#121214'
    bgcard = '#29292E'
    fillCard = "hsla(var(--base-color),7%, 78%, 1)"
    bgcardSelected = "#0A3442"
    ballRange = '#FFFFFF'
    lineRange = '#FFFFFF'

    ballRangeSelec = '#FFFFFF'
    lineRangeSelec = '#FFFFFF'
    update()
    resetSelect()
  
  }
  
  function cardArvoreSelect(){

    arvoreSelected = true
    nuvemSelected = false
    lojaSelected = false
    fogoSelected = false

    resetSelect()
  }

  function cardNuvemSelect(){

    arvoreSelected = false
    nuvemSelected = true
    lojaSelected = false
    fogoSelected = false
    
    resetSelect()
  }

  function cardLojaSelect(){
    
    arvoreSelected = false
    nuvemSelected = false
    lojaSelected = true
    fogoSelected = false
    
    resetSelect()
  }

  function cardFogoSelect(){
    arvoreSelected = false
    nuvemSelected = false
    lojaSelected = false
    fogoSelected = true
    
    resetSelect()
  }

  function update() {
    Root.style.setProperty('--bg-main', bgMain);
    Root.style.setProperty('--tt-time', timerColor);
    Root.style.setProperty('--bg-primary-fill', fillCard);
    Root.style.setProperty('--bg-card-primary', bgcard);
    Root.style.setProperty('--ballRange', ballRange);
    Root.style.setProperty('--lineRange', lineRange);
  }

  function resetSelect() {

    bgcardNuvem = bgcard
    bgcardArvore = bgcard
    bgcardLoja = bgcard
    bgcardFogo = bgcard
    fillNuvem = fillCard
    fillArvore = fillCard
    fillLoja = fillCard
    fillFogo = fillCard
    ballRangeArvore = ballRange
    ballRangeNuvem = ballRange
    ballRangeLoja = ballRange
    ballRangeFogo = ballRange
    lineRangeArvore = lineRange
    lineRangeNuvem = lineRange
    lineRangeLoja = lineRange
    lineRangeFogo = lineRange

    if(arvoreSelected === true){
      bgcardArvore = bgcardSelected
      fillArvore = '#FFFFFF'
      ballRangeArvore = ballRangeSelec
      lineRangeArvore = lineRangeSelec
    }
    if(nuvemSelected === true){
      bgcardNuvem = bgcardSelected
      fillNuvem = '#FFFFFF'
      ballRangeNuvem = ballRangeSelec
      lineRangeNuvem = lineRangeSelec
    }
    if(lojaSelected === true){
      bgcardLoja = bgcardSelected
      fillLoja = '#FFFFFF'
      ballRangeLoja = ballRangeSelec
      lineRangeLoja = lineRangeSelec
    }
    if(fogoSelected === true){
      bgcardFogo = bgcardSelected
      fillFogo = '#FFFFFF'
      ballRangeFogo = ballRangeSelec
      lineRangeFogo = lineRangeSelec
    }

    ArvoreCard.style.setProperty('--bg-card-primary', bgcardArvore);
    ArvoreFill.style.setProperty('--bg-primary-fill' , fillArvore);
    NuvemCard.style.setProperty('--bg-card-primary', bgcardNuvem);
    NuvemFill.style.setProperty('--bg-primary-fill' , fillNuvem);
    LojaCard.style.setProperty('--bg-card-primary', bgcardLoja);
    LojaFill.style.setProperty('--bg-primary-fill' , fillLoja);
    FogoCard.style.setProperty('--bg-card-primary', bgcardFogo);
    FogoFill.style.setProperty('--bg-primary-fill' , fillFogo);
    Arvoreinput.style.setProperty('--ballRange', ballRangeArvore);
    Arvoreinput.style.setProperty('--lineRange', lineRangeArvore);
    Nuveminput.style.setProperty('--ballRange', ballRangeNuvem);
    Nuveminput.style.setProperty('--lineRange', lineRangeNuvem);
    Lojainput.style.setProperty('--ballRange', ballRangeLoja);
    Lojainput.style.setProperty('--lineRange', lineRangeLoja);
    Fogoinput.style.setProperty('--ballRange', ballRangeFogo);
    Fogoinput.style.setProperty('--lineRange', lineRangeFogo);
  }
    
  
  return {
    
    ligth,
    dark,
    update,
    cardArvoreSelect,
    cardNuvemSelect,
    cardLojaSelect,
    cardFogoSelect,
  }
}