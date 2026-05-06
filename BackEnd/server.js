const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const db = require("./db");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/usuarios", async (req, res) => {
    try {
        const [lista] = await db.query("SELECT * FROM usuarios");
        res.json(lista);
    } catch (erro) {
        res.status(500).json(erro);
    }
});

app.post("/cadastro", async (req, res) => {
try {
    const {nome, email, genero, senha} = req.body;

    const [resultado] = await db.query(
        "INSERT INTO usuarios (nome, email, genero, senha) values (?, ?, ?, ?)",
         [nome, email, genero, senha]);

         res.json({ id: resultado.insertId, nome, email, genero});
} catch (erro) {
 res.status(500).json(erro);
}

})

app.listen(3000, () => {
    console.log("API ESTA RODANDO NA PORTA: http://localhost:3000")
})