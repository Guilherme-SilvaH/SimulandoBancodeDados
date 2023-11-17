//express Config
const express = require("express")
const app = express();
app.use(express.json());
const PORT = 3003;
app.listen(PORT, () =>{
    console.log("Servidor iniciado na PORTA: " + PORT);
})

//dataBase config
const dataBase = require('./dataBase');
const dt = dataBase.veiculosDatabase();


//pegar todos os veiculos
app.get("/veiculos", async (req,res) =>{
    const listerVeiculos = await dt.list();
    res.status(200).send(listerVeiculos);
})

//pegar veiculos por ID
app.get("/veiculos/:id", async(req,res) =>{
    const IDveiculos = await dt.get(req.params.id);
    res.status(200).send(IDveiculos);
});

//Cadastrar um novo veiculo
app.post("/veiculos", async(req,res) =>{
    const insertedVeiculos = await dt.insert(req.body);
    res.status(200).send(insertedVeiculos);
});

//atualizar um veiculo
app.put("/veiculos/:id", async(req,res) =>{
    const updatedVeiculo = await dt.update(req.body,req.params.id)
    res.status(200).send(updatedVeiculo)
})

//deletar um veiuculo

app.delete("/veiculos/:id", async(req,res) =>{
    const veiculoDeletado = dt.del(req.params.id);
    res.status(200).send("Veiculo Deletado" + veiculoDeletado)
})


