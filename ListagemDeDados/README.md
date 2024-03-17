# Listagem de dados
Nesse projetos eu tentei fazer um filtro de dados, utilizando checkboxes para a escolha de tags e um campo de texto, para procura por texto.

## Objetivo 
Tentar criar um filtro de dados e tentar aprender a usar o flex-grid.

## Como funciona?
Há duas variáveis que funcionam como os dados do sistema: `tags` e `conteudo`.
A primeira possui as tags criadas pelo usuário e segunda o conteudo criado por ele.
depois de fazer todo um esquema para atualização de valores na tela como: a atualização da checkbox's do modal quando o usuário cria uma tag.
Vem a parte de filtragem de dados onde o usuário pode fazer pesquisar apertando o botão de filtrar, ao clicar no botão é disparado uma função através do `addEventListener` que verifica os dados tanto do select quanto do campo de texto e aplicar um `filter` na Array de Conteúdo que retorna os dados que devem ser redenrizados na tela através da função `atualizarConteudoNaTela()`
