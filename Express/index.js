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
//Querys params
app.get('/galeria', function(req,res){
    let photos = req.query["photos"];
    //Devolvendo uma resposta - sempre tem que devolver uma resposta.
    //Como chamar a route: http://localhost:4000/galeria?photos=img_001
    res.send('Route galeria '+ photos);

});
//add ? a sintaxe do parametro faz com que ele se torne um parametro opcional
app.get('/blog/:arquivo?', function(req,res){
    let arquivo = req.params.arquivo;

    if(arquivo){
        res.send('Route blog com arquivo' + arquivo);
    }else{
        //Devolvendo uma resposta - sempre tem que devolver uma resposta.
        res.send('Route blog');
    }
    
   

});

//Route com parametro
app.get('/perfil/:nome/:idade', function(req, res){
    //REQ são os dados enviados para o usuario
    //RES resposta que sera enviada para o usuario
    let nome = req.params.nome;
    let idade = req.params.idade;

    res.send('Route com parametros ' + nome + ' Idade: ' + idade);
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


