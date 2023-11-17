const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const BancoDeDados = require('./dataBase');
const BD = BancoDeDados.AlunosDatabase()

app.listen(PORT, () =>{
    console.log("servido sendo excecutado na porta: " + PORT);
})


//get pegar todos alunos
app.get("/alunos", async(req,res) =>{
    const listaAlunos = await BD.list();
    res.status(200).send(listaAlunos)
})


//get pegar por id

app.get("/alunos/:id", async(req, res) =>{
    const alunosID = await BD.get(req.params.id)
    res.status(200).send(alunosID)
})


//inserir um novo usuario
app.post("/alunos", async (req, res) => {
    const insertedAluno = await BD.insert(req.body);
    res.status(200).send(insertedAluno);
});

//fazer um updata de um usuario
app.put("/alunos/:id", async (req, res) => {
    const alunosFiltrado = await BD.update(req.body, req.params.id);
    res.status(200).send(alunosFiltrado);
});


//deletar um usuario

app.delete("/alunos/:id", async (req, res) => {
    const alunoDeletado = await BD.del(req.params.id);
    res.status(200).send(alunoDeletado);
});
