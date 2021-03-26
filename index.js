const express = require('express'); //invoca express
const app = express();


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