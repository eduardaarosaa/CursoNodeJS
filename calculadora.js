function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b; 
}

function multi(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

let nome = "Calculadora";

//Funcoes que podem ser exportadas para o resto do projeto
module.exports = {
    soma, divisao, nome
}