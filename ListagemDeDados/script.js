let modalTag = document.querySelector("dialog#modalTag")
let modalCont = document.querySelector("dialog#modalCont")
const btnCloseTag = document.querySelector("button#closeModalTag")
const btnCloseCont = document.querySelector("button#closeModalCont")

let selFilTag = document.getElementById("selFilTag")
const btnFiltar = document.getElementById("btnFiltrar")
const filInpCont = document.getElementById("filInpCont")


const btnNewTag = document.getElementById("btnNewTag")
const newTagInp = document.getElementById("newTagInp")

const btnNewCont = document.getElementById("btnNewCont")
const newContTi = document.getElementById("newContTi")
const newContCont = document.getElementById("newContCont")
let newContTagsDiv = document.querySelector("div.newContTagsDiv")
let newContTags = document.getElementsByName("newContTag")

const divAreaCont = document.querySelector("div.area-conteudo")

const btnOT = document.getElementById("btnOT")
const btnOC = document.getElementById("btnOC")

let tags = ["bleach", "narutoshippudenansbshsjs", "jj"]
let conteudo = [
    {
      titulo: "tiulo1",
      conteudo: "conteudo1",
      tags: ["bleach","naruto"]
    },
    {
      titulo: "tiulo2",
      conteudo: "conteudo2",
      tags: ["jj","zedin"]
    },
    {
      titulo: "tiulo3",
      conteudo: "conteudo3",
      tags: ["jj", "daishikawa"]
    }
  ]
  



  
function adicionarNovoConteudo(newTi,newCont,newContTagsp) {
  
  console.log("add contend: " + newTi, newCont, newContTagsp)
  
  if (newTi == "" || newCont == "" || newContTagsp == "") {
    return console.warn("valoes do inpurs vazios")
  }
  
  console.info("inserção do conteúdo concluida")
  
  conteudo.push({
      titulo: newTi,
      conteudo: newCont,
      tags: [...newContTagsp]
    })
  
  atualizarConteudoNaTela(conteudo)
}
  
function adicionarNovaTag(newtag) {
  
  let tagIsRepeated = tags.some((valor)=>{
    return newtag.toLowerCase()==valor
  })
  
  if (tagIsRepeated) {
    return console.warn("A tag é repetida")
  }
  if (newtag === "") {
    return console.warn("tag vazia")
  }
  
  tags.push(String(newtag).toLowerCase())
  
  atualizarConteudoNaTela(conteudo)
  
}
  
function atualizarConteudoNaTela(content) {
  
  
  divAreaCont.innerHTML = ""
  
  content.forEach((cont, i)=>{
    
    let tagCont = ""
    cont.tags.forEach((valor)=>{
      tagCont += `<span class="tags">#${valor}</span>`
    })
    
    divAreaCont.innerHTML += `
      <div class="conteudo-din">
        <h2>${cont.titulo}</h2>
        <p>${cont.conteudo}</p>
        <p class="tags-div">
          ${ tagCont }
        </p>
      </div>
    `
  })
  
  
  newContTagsDiv.innerHTML = ""
  
  tags.forEach((valor)=>{
    
    newContTagsDiv.innerHTML +=  `
      <div class="check-tag">
        <input type="checkbox" name="newContTag" value="${valor}" id="${valor}">
        <label for="${valor}">${valor}</label>
      </div>
    `
  
  } )
  
  let newContTags = document.getElementsByName("newContTag")
  
  selFilTag.innerHTML = "<option disabled selected value='Nao'>Selecione alguma Tag</option>"
  
  tags.forEach((valor)=>{
    selFilTag.innerHTML+= `<option value="${valor}">${valor}</option>`
  } )
  
  
}


btnOC.addEventListener("click", (e)=>{
  e.preventDefault()
  
  modalCont.showModal()
  
} )

btnOT.addEventListener("click", (e)=>{
  e.preventDefault()
  
  modalTag.showModal()
  
} )

btnNewTag.addEventListener("click", ()=>{
  // logica de pegar dados do input e coloca-los na var tag
  adicionarNovaTag(String(newTagInp.value))
  
} )

btnNewCont.addEventListener("click", ()=>{
  
  /* percorrer o array de checkboxes newconttags 
  e depois verificar qual esta marcado pegar o 
  value e depois adicionar no adiconarconteudo
  */
  
  let newArray = []
  
  newContTags.forEach((valor, i)=>{
    
    if (valor.checked) {
     newArray.push(valor.value)
    }
    
  } )
  
  console.log(newContTi.value)
  
  adicionarNovoConteudo(String(newContTi.value), String(newContCont.value), newArray)
  
} )

btnCloseTag.addEventListener("click", ()=>{
  modalTag.close()
})

btnCloseCont.addEventListener("click", ()=>{
  modalCont.close()
} )

btnFiltar.addEventListener("click", (e)=>{
  e.preventDefault()
  
  let conteudoFiltrado = conteudo
  
  // Verificar se há algum valor no select
  if (!(selFilTag.value == "Nao")) {
    
    // filtra quais objetos do conteudo fazem parte da tag do filtro
    conteudoFiltrado = conteudo.filter((valor)=>{
       return valor.tags.some((valor)=>{
         return valor == selFilTag.value
       } )
    })
    
  }
  
  // verifica se algo foi escrito pelo usuário 
  if (!(filInpCont.value == "")) {
    conteudoFiltrado = conteudoFiltrado.filter((valor)=>{
      return valor.conteudo.includes(filInpCont.value)
    } )
    
  }
  atualizarConteudoNaTela(conteudoFiltrado)

  
} )

atualizarConteudoNaTela(conteudo)
