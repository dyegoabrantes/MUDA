let mongoose = require('mongoose');
var mudaDB = require('../models/muda.model.js');
var desafioBD = require('../models/desafio.model.js');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

module.exports.getMudas = (req, res) => {
    let pontosgerais = 0;
    mudaDB.find()
    .select('pontos')
    .exec()
    .then(mudas => {
        console.log(mudas);
        let a = mudas.reduce((pontosgerais, i) => {
            return pontosgerais + i.pontos;
            // console.log(muda[i].pontos);
            // this.pontosgerais=+mudas[i].pontos;
        }, 0);
        let media = a / mudas.length;
        res.status(200).json({
            mudasCout: mudas.length,
            mudas: mudas,
            soma: a,
            media: media
        });
        // mudas.filter()
    }
        // function(mudas) {
        //     res.status(200).json(mudas);
        // }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.getMuda = function (req,res) {
    let id = req.params.id;
    let promise = mudaDB.findOne({'userId':id}).exec();
    promise.then(
        (data) =>{ 
            if (data){
                res.status(201).json(data);
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
    let id = req.params.id;
    let pontuacao =  req.body.pontos;
    mudaDB.find({_id:id})
    .exec()
    .then(
        mudaFinded => {
            if (mudaFinded) {
                mudaDB.findByIdAndUpdate({_id: id}, {pontos:pontuacao}, {new: true}, (err, newMuda) => {
                    if (err) {
                        return res.status(500).json({message: 'Nao atualizado'})
                    } else {
                        res.status(201).json(newMuda);
                        
                    }
                })
            } else {
                return;
            }
        }
    ).catch(err => {
        res.status(500).json({message: 'Error', err: err});
    })
    

    // // let promise = mudaDB.findByIdAndUpdate(id, req.body).exec();

    // promise.then(
    //     function(muda) {
    //         res.status(200);
    //         // if (muda) {
    //         //     res.status(200).json(muda.pontos);
    //         // } else {
    //         //     res.status(404).send("User not found");
    //         // }
    //     }
    // ).catch(
    //     function(error) {
    //         res.status(500).json(error);
    //     }
    // );
};


