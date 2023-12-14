const express = require("express");
const mysql = require("mysql2");
const List = require('./components/List')

const app = express();
const port = 3000;

// Configuração do banco de dados
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

// Criação da conexão com o banco de dados
const connection = mysql.createConnection(config);

// Função para criar a tabela people
function createTable() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      UNIQUE (name)
    )
  `;
  connection.query(createTableSql, handleQueryResult);
}

// Função para lidar com o resultado da query
function handleQueryResult(err, results) {
  if(err){
    console.error('Error: ', err)
  } else {
    insertPeopleRecord('Wesley Prado');
  }
}

// Função para inserir um registro na tabela people
function insertPeopleRecord(name) {
  const insertPeopleRecordSql = `INSERT IGNORE INTO people(name) values('${name}')`;
  connection.query(insertPeopleRecordSql);
}

// Rota para listar todas as pessoas
app.get("/", (req, res) => {
  connection.query('SELECT id, name FROM people', function(err, results){
    if(err){
      console.error('Error: ', err)
    } else {
      const list = new List(results)
      res.send(list.build());
    }
  });
});

// Rota para inserir uma nova pessoa
app.get("/insert/:name", (req, res) => {
  insertPeopleRecord(req.params.name);
  res.redirect('/')
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Tratamento de erros não capturados
process.on("uncaughtException", (err) => {
  console.error("Erro não tratado", err);
  process.exit(1);
});

// Tratamento de promessas rejeitadas não tratadas
process.on("unhandledRejection", (reason, promise) => {
  console.error("Promessa rejeitada não tratada em", promise, "razão:", reason);
  process.exit(1);
});

// Chamar a função para criar a tabela ao iniciar o script
createTable();