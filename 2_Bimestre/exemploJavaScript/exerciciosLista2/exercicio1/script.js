let inputCotacao = document.querySelector("#inputCotacao");
let btCalcular = document.querySelector("#btCalcular");
let h3ValorCotacao = document.querySelector("#h3ValorCotacao");

function calcularCotacao(){
    let valorCotacao = Number(inputCotacao.value);

    //calcular 1%
    let valor1porcento = valorCotacao + (valorCotacao * (1/100));
    //calcular 2%
    let valor2porcento = valorCotacao + (valorCotacao * (2/100));
    //calcular 5%
    let valor5porcento = valorCotacao + (valorCotacao * (5/100));
    //calcular 10%
    let valor10porcento = valorCotacao + (valorCotacao * (10/100));

    h3ValorCotacao.innerHTML = "Valores atualizados:<br>"+
    "Reajuste de 1%: "+valor1porcento+
    "<br>Reajuste de 2%: "+valor2porcento+
    "<br>Reajuste de 5%: "+valor5porcento+
    "<br>Reajuste de 10%: "+valor10porcento+"<br>"

}
btCalcular.onclick = function(){
    calcularCotacao();
}
