const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fullstack"
});

app.post("/create", (req,res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const inventario = req.body.inventario;
    const marca = req.body.marca;
    const valor = req.body.valor;
    const estado = 1;

    db.query('INSERT INTO productos(nombre, codigo, inventario, marca, valor, estado) VALUES(?,?,?,?,?,?)', 
        [nombre, codigo, inventario, marca, valor, estado],
    (err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.send("Producto creado con Exito");
        }
    }
    );
});

app.listen(3001, ()=>{
    console.log("Corriendo en el puerto 3001")
})