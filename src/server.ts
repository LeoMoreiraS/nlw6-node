import express from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";
 
const port = 3000;
const app = express();
app.use(express.json())
app.use(router);
app.listen(port, ()=>{
    console.log("Servidor rodando na porta: " + port);
})

