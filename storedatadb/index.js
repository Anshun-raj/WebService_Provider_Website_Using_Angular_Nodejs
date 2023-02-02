const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

const mysql = require("mysql");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

app.get('/', function (req, res) {
    res.send('Hello from server');
})

app.post('/add', function (req, res) {
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var text = req.body.text;
    var addr=req.body.address;
    var num = req.body.number;
    db.connect(function (err) {
        if (err) throw err;

        var sql = "INSERT INTO putdata(name,email,text,num,addr) VALUES('" + name + "','" + email + "','" + text + "','"+num+"','"+addr+"')";
        var data = "SELECT * from adddata";
        db.query(sql, function (err, res1) {
            if (err) throw err;

        })
        db.query(data, function (err, res2) {
            if (err) throw err;
            console.log(res2);
        })

        res.status(200).send({ "message": "Data recieved" });
    })
});



app.listen(PORT, function () {
    console.log("Server running on localhost:" + PORT);
})