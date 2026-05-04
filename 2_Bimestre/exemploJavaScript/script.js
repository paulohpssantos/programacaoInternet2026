//importando o elemento do html para dentro do javaScript
let h1Titulo = document.querySelector("#h1Titulo");
let inputCampoTexto = document.querySelector("#inputCampoTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

//funçao que tem o objetivo trocar o texto do h1 pelo texto do input
function alterarTexto(){
    //retirar o texto do input e adicionar em um variavel
    let textoDigitado = inputCampoTexto.value;

    //atribuir o texto retirado do input e adicionar no h1
    h1Titulo.textContent = textoDigitado;
}
//Ao clicar no botão acionar a função
btTrocarTexto.onclick = function(){
    alterarTexto();
}