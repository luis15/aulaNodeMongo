const express = require("express");
const AlunoController = require("./controllers/aluno");

const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/alunos", async(req, res) => {
    const aluno = new AlunoController(req, res);
    aluno.findAll();
}); 

app.get("/", (req, res) => {
    res.status(200).send({'status':'ok'});
});

app.listen(port, () => {
    console.log("Iniciei na porta " + port);
});
