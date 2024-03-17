const btnTranscrever = document.getElementById("transcrever")
const areaTranscrita = document.getElementById("areaTranscrita")
const estado = document.getElementById("status")

const transcritor = new webkitSpeechRecognition()

/*
  <i class="fa-solid fa-microphone-slash"></i>
  <i class="fa-solid fa-ellipsis"></i>
  <i class="fa-solid fa-check"></i>
  <i class="fa-solid fa-xmark"></i>
*/

transcritor.lang = "pt-BR"

function err() {
  estado.innerHTML = '<i class="fa-solid fa-xmark"></i>'
}


transcritor.onerror = ()=>{
  estado.innerHTML = '<i class="fa-solid fa-xmark"></i>'
}
transcritor.onnomatch = () => {
  estado.innerHTML = '<i class="fa-solid fa-xmark fa-bounce" style="--fa-animation-iteration-count: 1;"></i>'
}

transcritor.onresult = (e)=>{
  console.log(e)
  
  areaTranscrita.innerText = ""
  
  estado.innerHTML = '<i class="fa-solid fa-check fa-bounce" style="--fa-animation-iteration-count: 1;"></i>'
  
  let transcricao = e.results[0][0].transcript
  areaTranscrita.innerText = transcricao
}

console.log(transcritor)


btnTranscrever.addEventListener("click", ()=>{
  
  transcritor.start()
  estado.innerHTML = '<i class="fa-solid fa-ellipsis fa-beat-fade"></i>'
  
})

