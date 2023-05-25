const connection = require("../utils/db");
class AlunoModel{
    async getAll(){
        const connectionInfo = await connection.getDB();
        const alunosCollection = connectionInfo.db.collection("alunos");

        const alunos = alunosCollection.find().toArray();

        connectionInfo.client.close();
        return alunos;
    }

}
module.exports = AlunoModel;