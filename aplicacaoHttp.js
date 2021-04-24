let http = require('http');

//criando um servidor http
// O http é divido em requisicao e resposta
http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1>");
}).listen(8181);


console.log('Meu servidor esta rodando!');