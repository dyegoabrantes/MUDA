let bcrypt = require('bcrypt');
let Usuario = require('../models/user.model');
let jwt = require('jsonwebtoken');



module.exports.efetuaLogin = function(req,res){
    let pass = req.body.password;
    let email = req.body.email;
    console.log('chega aqui')

    let promise = Usuario.findOne({'email':email}).exec();

    promise.then(
        (data) =>{ 
            if (data){
                if (bcrypt.compareSync(pass, data.senha)) {
                    data.senha="";
                    let token = jwt.sign({data:Usuario}, 'd0e4e97c82638d6d6fe0153649762fd6f');
                    res.status(200).send({
                        message:"Logado",
                        token: token,
                        data
                    });
                }else{
                    res.status(401).send('Verifique sua senha');
                }
            }else{
                res.status(401).send('Email não cadastrado');
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    );
}

module.exports.newUser = function(req,res) {
    let user = new  Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync (req.body.senha, 10),
        habitos: req.body.habitos,
        desafiosId: req.body.desafiosId,
        emblemas: req.body.emblemas,
        logitude: req.body.longitude,
        latitude: req.body.latitude
    });

    let promise = Usuario.create(user);
    promise.then(
        (user) =>{
            res.status(201).json({
                nome: user.nome,
                email: user.email
            }
            );
        },
        (erro) => {
            res.status(500).json(erro);
        }
    )
}