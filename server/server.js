require('./config/config')
const express = require('express')
const app = express()

const port = process.env.PORT;
const bodyParser = require('body-parser')


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', (req, res) => {
    res.json("get usuario")
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.edad === undefined) {
        res.status(400).json({
            "error": "No llego informacion a registrar de un cliente"
        })
    } else {
        let persona = {
            persona: body
        }
        res.json(persona);
    }

});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id
    })
});

app.delete('/usuario', (req, res) => {
    res.json("get usuario")
});
app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})