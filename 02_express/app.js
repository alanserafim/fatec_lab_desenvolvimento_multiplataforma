const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo na porta 8081")
})

app.get("/", function(req, res){
    res.send("<h1>Seja bem vindo ao Node JS</h1>")
})

app.get("/cadastrar/:item/:quantidade", function(req, res){
    res.send(`<h1>Página de Cadastro </h1> 
              <p>Item: <strong>${req.params.item}</strong> - quantidade: <strong>${req.params.quantidade}</strong></p>`
    )
})

app.get("/contato", function(req, res){
    res.send("<h1>Página de Contato</h1>")
})