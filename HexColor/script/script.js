function atualizarValores() {
  let inputR = document.getElementById('inpR')
  let inputG = document.getElementById('inpG')
  let inputB = document.getElementById('inpB')
  let inputO = document.getElementById('inpO')
  let hexCode = document.getElementById('hexCode')
  
  let resultDiv = document.querySelector('div.result')
  
  let opacityValue = inputO.value/100
  
  console.log(opacityValue)
  resultDiv.style.backgroundColor = `rgb( ${inputR.value}, ${inputG.value}, ${inputB.value}, ${opacityValue})`
  
  hexCode.innerText = `${inputR.value}, ${inputG.value}, ${inputB.value}, ${opacityValue}`
  
  console.log(inputR.value , inputG.value, inputB.value)
}
atualizarValores()
