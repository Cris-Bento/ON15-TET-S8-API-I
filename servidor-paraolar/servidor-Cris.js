const { response } = require("express")
const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["salve,mundao"])
})

app.get("/ola", (request, response)=>{
    response.status(200).json(["oizinho"])
})

app.listen(8080, ()=>{
    console.log("meu servidor tá rodando na porta 8080")
})