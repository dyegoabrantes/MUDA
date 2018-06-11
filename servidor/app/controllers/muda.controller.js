var mudaDB = require('../models/muda.model.js');
var desafioBD = require('../models/desafio.model.js');


module.exports.getMudas = function(){
    // let promise = mudaDB.find().exec();

    // promise.then(
    //     function(mudas) {
    //         res.status(200).json(mudas);
    //     }
    // ).catch(
    //     function(error) {
    //         res.status(500).json(error);
    //     }
    // );
};

module.exports.getMuda = function (req,res) {
    let id = req.params.id;
    let promise = mudaDB.findOne({'userId':id}).exec();
    promise.then(
        (data) =>{ 
            if (data){
                res.status(201).send(data);
            }else{
                res.status(400).send('Muda não encontrada');
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    );
};


module.exports.createMuda = function(req, res) {
    console.log('cria')
    let muda = new mudaDB({
        nome:req.body.nome,
        indiceGeral:req.body.indiceGeral,
        pontos:req.body.pontos,
        arquivo:req.body.arquivo,
        userId:req.body.userId,
        desafiosId:req.body.desafiosId
    });

    let promise = mudaDB.create(muda);

    promise.then(
        function(muda) {
            res.status(201).json(muda);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.updateMuda = function(req, res) {
    
    let id = mudaDB._id;

    let muda = new mudaDB({
        indiceGeral: req.body.indiceGeral,
        pontos: req.body.pontos,
    });

    let promise = mudaDB.findByIdAndUpdate(id, req.body).exec();

    promise.then(
        function(muda) {
            if (muda) {
                res.status(200).json(muda.pontos);
            } else {
                res.status(404).send("User not found");
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};


