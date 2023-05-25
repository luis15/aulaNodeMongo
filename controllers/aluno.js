const AlunoModel = require("../models/aluno")
class Alunos{
    constructor(req, res){
        this.req = req;
        this.res = res;
        this.alunoModel = new AlunoModel();
    }
    async findAll(){
        this.res.json(await this.alunoModel.getAll());
    }
}
module.exports = Alunos;