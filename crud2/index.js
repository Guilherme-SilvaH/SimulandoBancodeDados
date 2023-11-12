
const express = require("express");
const app = express();


app.use(express.json());

const veiculos = []

//pegar todos os veiculos disponiveis 
app.get("/veiculos",(req,res) =>{
    res.status(200).send(veiculos)
});


//pegar veiculos atraves do ID
app.get("/veiculos/:id",(req,res) =>{
    const veiculosID = veiculos.find(x => x.id == req.params.id)
    res.status(200).send(veiculosID)
});


//cadastrar um novo veiculo
app.post("/veiculos",(req,res) =>{
    const newVeiculo = req.body
    newVeiculo.push(veiculos)
    res.status(200).send(req.body)
});

//Atualizar um veiculo atraves do ID
app.put("/veiculos/:id",(req,res) =>{
    const veiculosID = veiculos.find (x => x.id == req.params.id)
    const indexVeiculo = veiculos.indexOf(veiculosID)
    veiculos[indexVeiculo] = req.body
    res.status(200).send("Usuario Atualizado")
});

//Excluir um veiculos
app.put("/veiculos/:id",(req,res) =>{
    const veiculosID = veiculos.find (x => x.id == req.params.id)
    const indexVeiculo = veiculos.indexOf(veiculosID)
    veiculos.splice(indexVeiculo, 1)
    res.status(200).send("Usuario Excluido")
});

app.listen(3000, () => {
    console.log(`Running in 3000`);
})