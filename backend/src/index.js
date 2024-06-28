const express = require("express");

const app = express();

app.get("/", (req, resp)=>{
    resp.status(200).sendFile(path.join(__dirname, `/view`, `index.html`));
});

app.listen(3000, ()=>{
    console.log("Servidor rodando");
})

