const express = require("express");

const app = express();

app.get("/", (req, resp)=>{
    resp.status(200).send("../index");
});

app.listen(3000, ()=>{
    console.log("Servidor rodando");
})