const express = require("express");
const app = express();

app.use(express.json());

const users = [];

//Responsavel por pegar todos os alunos 

app.get("/alunos", (req,res) =>{
    console.log(req.query);
    console.log("Entrou no Alunos");
    res.status(200).send({users: users})
});

//responsavel por pegar 1 aluno

app.get("/alunos/:id/",(req,res) =>{
    const usersID = req.params.id;
    console.log("Entrou no Alunos");
    res.status(200).send(users.find(x => x.id == usersID));
});


app.post("/alunos",(req,res) =>{
    users.push(req.body);
    res.status(200).send(req.body)
});


app.put("/alunos/:id",(req,res) =>{
    const user = users.find(x => x.id == req.params.id)
    const indexUser = users.indexOf(user);
    users[indexUser] = req.body
    res.status(200).send("Usuario Atualizado");
});

app.delete("/alunos/:id",(req,res) =>{
    const user = users.find(x => x.id == req.params.id)
    const indexAluno = users.indexOf(user)
    users.splice(indexAluno, 1);
    res.status(200).send("Aluno Excluido com Sucesso");
});


app.listen(3000,() =>{
    console.log("Iniciou o servidor");
})