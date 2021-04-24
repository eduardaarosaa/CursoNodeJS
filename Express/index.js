//Carregando o express - Importando
const express = require("express");

//Uma instancia - uma copia do express - Iniciando o express
// a funcao que vai carregar todo express na variavel app
const app = express(); 

//Criando uma route 
app.get('/', function(req,res){
    //Devolvendo uma resposta - sempre tem que devolver uma resposta.
    res.send('Route principal');

});

app.get('/galeria', function(req,res){
    //Devolvendo uma resposta - sempre tem que devolver uma resposta.
    res.send('Route galeria');

});

app.get('/blog', function(req,res){
    //Devolvendo uma resposta - sempre tem que devolver uma resposta.
    res.send('Route blog');

});

//Funcao para abrir um servidor Express
// 4000 numero da porta que vai rodar o servidor
app.listen(4000,function(erro){
    if(erro){
        console.log('Ocorreu algum erro');
    }else{
        console.log('Servidor iniciado com sucesso!');
    }
});


