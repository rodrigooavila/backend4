const express = require('express'); //invoca express
const app = express();

/*const middleware = function(req, res, next) {
    console.log("executando o middleware");
    next();
}

app.use(middleware);*/

//let port = 3000;
//let rotas = require('./rotas');

/*let get_request_time = function(req, res, next) {
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();
}


app.use(get_request_time);
app.get('/', (req, res) => {
    res.send("Você acessou em " + req.request_time);
});
*/
//app.use('/', rotas); //uso do arquivo de roteamento 


/*app.use('/tempo', function(req, res, next) {
    let tempo_atual = Date.now();
    let hoje = new Date(tempo_atual);
    req.request_time = hoje.toUTCString();
    next();
})

app.get('/tempo', (req, res) => {
    res.send("Você acessou em " + req.request_time);
});

app.get('/', (req, res) => {
    res.send("Estou no endereço raiz");
});*/


/*app.use(function(req, res, next) {
    console.log("Início!");
    next();
})

app.get('/', (req, res, next) => {
    res.send("Meio");
});
app.get('/', (req, res) => {
    console.log('Fim');
});*/
app.use('/', express.static(__dirname + '/index'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

});

app.use(express.urlencoded({ extended: false }));

app.use('/contato', express.static(__dirname + '/public/contato'));


app.get('*', function(req, res, next) {
    res.send("Link inválido: 404");
    next();
});

app.post('/contato', function(req, res) {
    console.log("Nome:" + req.body.nome_campo);
    console.log("E-mail:" + req.body.mail_campo);
    console.log("Texto:" + req.body.txt_campo);

    res.redirect('/');

});


app.listen(3000, () => console.log(`Escutando na porta 3000`));