const express = require("express")
const path = reuqire("path")
const http = require("http")

const app = express()

app.get("/", (req, res) => {
    res.end('Welcome to the calorie tracker home page.')
})

app.get("/tracker", (req, res) => {
    res.end('Track your calories here.')
})

app.use ((req, res) => {
    res.statusCode = 404
    res.send("404!")
})