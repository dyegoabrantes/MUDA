var mudaDB = require('../models/muda.model.js');
var desafioBD = require('../models/desafio.model.js');


module.exports.getMudas = function(){
    let promise = mudaDB.find().exec();

    promise.then(
        function(mudas) {
            res.status(200).json(mudas);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.getMuda = function(req, res) {
    let id = req.params.id;
    let promise = mudaDB.findById(id).exec();

    promise.then(
        function(muda) {
            if (muda) {
                res.status(200).json(muda);
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


module.exports.createMuda = function(req, res) {

    let muda = new mudaDB({
        nome: req.body.name,
        indiceGeral: 3,
        pontos: 50,
        arquivo: 'muda ani 3',
        desafiosId: null
    });

    let promise = mudaDB.create(muda);

    promise.then(
        function(muda) {
            res.status(201).json(muda._id);
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


