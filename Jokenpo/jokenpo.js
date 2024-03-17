var contV = document.getElementById("contV")
var contD = document.getElementById("contD")
var numV = 0
var numD = 0

var hudUser = document.querySelectorAll("i.option")
var hudIni = document.getElementById("optIni")


var options = ['pedra','papel','tesoura']

function verificarResultado(userChoice, iniChoice){
    if(userChoice == iniChoice) {
        return "Empate!"
    }else if(userChoice == 'tesoura' && iniChoice == 'pedra'){
        return "Derrota!"
    }else if(userChoice == 'tesoura' && iniChoice == 'papel'){
        return "Vitória!"
    }else if(userChoice == 'papel' && iniChoice == 'tesoura'){
        return "Derrota!"
    }else if(userChoice == 'papel' && iniChoice == 'pedra'){
        return "Vitória!"
    }else if(userChoice == 'pedra' && iniChoice == 'papel'){
        return "Derrota!"
    }else if(userChoice == 'pedra' && iniChoice == 'tesoura'){
        return "Vitória!"
    }
    
}



function jogar(userChoice) {
    //escolha do inimigo
    let iniChoice = 'pedra'
    iniChoice = options[Math.floor(Math.random()*options.length)]
    
    //atualização do hud ini
    //apague o fa do hudIni para ver a diferença
    if(iniChoice == 'pedra'){
        hudIni.innerText = "pedra"
    }else if(iniChoice == 'papel'){
        hudIni.innerText = 'papel'
    }else{
        hudIni.innerText = 'tesoura'
    }
    
    
    console.log(verificarResultado(userChoice,iniChoice))
    
    
    
    //atualização do contador
    if(verificarResultado(userChoice,iniChoice) == "Vitória!"){
        numV += 1
    }else if(verificarResultado(userChoice,iniChoice) == "Derrota!"){
        numD += 1
    }
    contV.innerText = String(numV)
    contD.innerText = String(numD)
}
