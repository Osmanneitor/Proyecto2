const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
    let db = req.app.locals.super;
    let producto = req.body.producto
    let cantidad = parseInt(req.body.cantidad)
    let precio = parseFloat(req.body.precio)
    let usuario = req.body.UsuarioLogueado;
    db.collection('usuarios').find({ "usuario": usuario }).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err)
        } else {
            if (datos.length > 0) {
                let productoEnCesta = false;
                for (let i = 0; i < datos[0].cesta.length; i++) {
                    if (datos[0].cesta[i].producto === producto) {
                        productoEnCesta = true;
                        datos[0].cesta[i].cantidad += 1;
                        datos[0].cesta[i].precio += precio;
                        db.collection('usuarios').updateOne({ 'usuario': usuario }, { $set: { cesta: datos[0].cesta } }, function (err, datos) {
                            if (err !== null) {
                                res.send(err)
                            } else {
                                res.send({ mensaje: "Producto añadido" })
                            }
                        })
                    }
                }
                if (!productoEnCesta) {
                    db.collection('usuarios').updateOne({ usuario }, { $push: { cesta: { producto, cantidad, precio,   } } }, function (err, datos) {
                        if (err !== null) {
                            res.send(err)
                        } else {
                            res.send({ mensaje: "Producto añadido" })
                        }
                    })
                }
            } else {
                db.collection('usuarios').updateOne({ usuario }, { $push: { cesta: { producto, cantidad, precio } } }, function (err, datos) {
                    if (err !== null) {
                        res.send(err)
                    } else {
                        res.send({ mensaje: "Producto añadido" })
                    }
                })
            }
        }
    })
})
router.post('/usuario', function (req, res) {
    let db = req.app.locals.super;
    let usuario = req.body.usuario;
    db.collection('usuarios').find({ usuario }).toArray(function (err, datos) {
        if (err !== null) {
            res.send(err)
        } else {
            res.send(datos)
        }
    })
})
router.put('/pagar', function (req, res) {
    let db = req.app.locals.super;
    let datos = req.body.datosPago
    let usuario = datos.usuario.usuario;
    let saldo = datos.saldo;
    db.collection('usuarios').updateOne({ usuario }, { $set: { cesta: [] } }, function (err, datos) {
        if (err !== null) {
            res.send(null)
        } else {
            db.collection('usuarios').updateOne({ usuario }, { $inc: { saldo: saldo } }, function (err, datos) {
                if (err !== null){
                    res.send(err)
                }else{
                    res.send({ mensaje: `Gracias por comprar en superOsman ${usuario}, se ha añadido un saldo de: ${saldo} en tu cuenta para tu próxima compra`, saldo })
                }
            })
        }
    })
})
router.delete('/eliminar', function (req, res) {
    let db = req.app.locals.super;
    let usuario = req.body.usuario;
    db.collection('usuarios').updateOne({ usuario }, { $set: { cesta: [] } }, function (err, datos) {
        if (err !== null) {
            res.send(null)
        } else {
            res.send({ mensaje: "Se ha vaciado tu cesta" })
        }
    })
})
module.exports = router;
module.exports = router;