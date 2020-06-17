const express = require('express');
const router =  express.Router();

router.get('/',function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find().toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/barato', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find().sort({precio:1}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/caro', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find().sort({precio:-1}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/carbohidratos', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find({"rico en":"Carbohidratos"}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/hierro', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find({"rico en":"Hierro"}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/proteinas', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find({"rico en":"Proteinas"}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/calcio', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find({"rico en":"Calcio"}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.get('/grasas', function(req,res){
    let db =  req.app.locals.super;
    db.collection('Alimentacion').find({"rico en":"Grasas Saturadas"}).toArray(function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})

router.put('/1', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/2', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/3', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/4', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/5', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/6', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/7', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/8', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/9', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})
router.put('/10', function(req,res){
    let db = req.app.locals.super;
    let id = parseInt(req.body.id2);
    db.collection('Alimentacion').updateOne({id},{$inc:{stock:-1}},function(err,datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    })
})




module.exports = router;