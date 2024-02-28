const express = require("express")
const app = express()

const porta = 8081

app.listen(porta, function(){
    console.log(`Servidor ativo na porta 8081 \nhttp://localhost:${porta}`);
})

app.get("/", function(req, res){
    res.send("<h1>Atividade Node JS</h1>")
})

app.get("/produtos/:automovel/:marca/:modelo/:ano", function(req, res){
    res.send(`<h1>Página de produtos</h1>
              <p>Automóvel: ${req.params.automovel}</p>
              <p>Marca: ${req.params.marca}</p>
              <p>Modelo: ${req.params.modelo}</p>
              <p>Ano: ${req.params.ano}</p>
    `)
})

app.get("/cadastrar/:usuario", function(req, res){
    res.send(`<h1>Página de Cadastro</h1>
            <p>Usuário: ${req.params.usuario}</p>
    `)
})

app.get("/contato", function(req, res){
    res.send("<h1>Página de Contato</h1><p>email: teste@teste.com</p>")
})