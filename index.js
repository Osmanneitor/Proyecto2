const express = require('express');
const app = express();
const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
let carniceria = require('./carniceria');
let alimentacion = require('./alimentacion');
let fruteria = require('./fruteria');
let limpieza = require('./limpieza');
let higiene = require('./higiene');
let pescaderia = require('./pescaderia');
let cesta = require('./cesta');
const MongoClient = mongodb.MongoClient;
let db;
app.use(express.json());
MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
    if (err !== null) {
        console.log(err);
        return err;
    } else {
        db = client.db('mercado');
        app.locals.super = db;
    }
})

app.use(express.static('public'));
app.use('/api/carniceria', carniceria);
app.use('/api/alimentacion', alimentacion);
app.use('/api/fruteria', fruteria);
app.use('/api/limpieza', limpieza);
app.use('/api/higiene', higiene);
app.use('/api/pescaderia', pescaderia);
app.use('/api/cesta', cesta);






app.post('/api/registro', function (req, res) {
    let usuario = req.body
    db.collection('usuarios').find({ "usuario": usuario.usuario }).toArray(function (err, datos) {
        if (err !== null) {
            console.log(err)
            res.send(err)
        } else {
            if (datos[0] === undefined) {
                db.collection('usuarios').insertOne({ usuario: usuario.usuario, contrasenia: bcrypt.hashSync(usuario.contrasenia, 10),saldo: 0, cesta:[] }, function (err, datos) {
                    if (err !== null) {
                        res.send(err)
                    } else {
                        res.send({ mensaje: "Usuario registrado" })
                    }
                })
            }
            else {
                if (datos[0].usuario === usuario.usuario)
                    res.send({ mensaje: "El usuario se encuentra registrado" })
            }
        }
    })
})
app.post('/api/ingreso', function (req, res) {
    let usuario = req.body.usuario;
    let contrasenia = req.body.contrasenia
    db.collection('usuarios').find({usuario}).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err)
        } else {
            if (datos.length === 0) {
                res.send({ mensaje: "Usuario y/o contraseña incorrectos" })
            } else {
                if (bcrypt.compareSync(contrasenia, datos[0].contrasenia) === true) {

                    res.send({ mensaje: "Bienvenido ", datos: datos[0].usuario })
                }else{
                    res.send({mensaje:"Usuario y/o contraseña incorrectos"})
                }
            }
        }
    })
})



let port = process.env.PORT || 3000;
app.listen(port)