const express = require(`express`)
const app = express()
const port = 12345
const fs = require(`fs`)
const file = `./students.json`


app.listen(port, () => { console.log(`listen on port: ${port}`) })
app.use(`/index.html`, express.static(__dirname + `/dist/index.html`))
app.use(`/index.js`, express.static(__dirname + `/dist/index.js`))
app.use(`/students.json`, express.static(__dirname + `/students.json`))

app.get(`/list`, (req, res) => {
    let json = JSON.parse(fs.readFileSync(file))
    let str = JSON.stringify(json)
    str = str.replace("{", "")
    str = str.replace("}", "")
    str = str.replace(/,/g, "<br>")
    res.send(str)
})

app.get(`/search`, (req, res) => {
    let json = JSON.parse(fs.readFileSync(file))
    let resName = json[req.query.studentID]
    let str = "Hello, " + resName
    res.send(str)
})

app.get(`/add`, (req, res) => {
    let json = JSON.parse(fs.readFileSync(file))
    json[req.query.studentID] = req.query.studentName
    let jsonstr = JSON.stringify(json)
    fs.writeFile(file, jsonstr, (err) => {
        if (err) console.log(`add failed`)
        else console.log(`add success`)
    })
    let str = jsonstr.replace("{", "")
    str = str.replace("}", "")
    str = str.replace(/,/g, "<br>")
    res.send(str)
})

app.get(`/del`, (req, res) => {
    let json = JSON.parse(fs.readFileSync(file))
    delete json[req.query.studentID]
    let jsonstr = JSON.stringify(json)
    fs.writeFile(file, jsonstr, (err) => {
        if (err) console.log(`delete failed`)
        else console.log(`delete success`)
    })
    let str = jsonstr.replace("{", "")
    str = str.replace("}", "")
    str = str.replace(/,/g, "<br>")
    res.send(str)
})