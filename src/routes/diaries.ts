import express from "express"; //ESModules
// const express = require('express') -> commonjs

//Crear un router
const router = express.Router()

//enpoints

router.get("/", (_req, res) => {
    res.send("Obteniendo")
})

router.post("/", (_req, res) => {
    res.send("Guardando")
})

export default router