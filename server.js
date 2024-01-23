const express = require("express")
const app = express()
const PORT = 3000
const path = require("path")
const fs = require('fs')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const FileSystem = require("fs");
app.use(express.static("dist"))

app.get("/", function (req, res) {
    const indexPath = path.join(__dirname, "index.html");
    res.sendFile(indexPath);
})

app.get("/Hex", function (req, res) {
    const indexPath = path.join(__dirname, "hex.html");
    res.sendFile(indexPath)
})

app.post("/saveData", function (req, res) {
    dane = JSON.stringify(req.body)
    fs.writeFile('./modules/data/dane.json', dane, err => {
        if (err) {
            console.log(err);
        }
    })
    res.send(dane)
})

app.post("/loadData", function (req, res) {
    dane = fs.readFileSync('./modules/data/dane.json', 'utf-8')
    dane = JSON.parse(dane)
    res.json(dane)
})

app.listen(PORT, function () {
    console.log("Serwer na porcie: ", PORT);
})  