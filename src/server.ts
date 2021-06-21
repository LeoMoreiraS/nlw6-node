import express from "express";

const port = 3000;
const app = express();

app.listen(port, ()=>{
    console.log("Servidor rodando na porta: " + port);
})

app.get('/test',(req,res)=>{
    console.log("oi");
    return res.send("oi");
});

app.post('/test-post',(req,res)=>{
    return res.send("Ola");
});