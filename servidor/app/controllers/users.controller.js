let postController = require('./posts.controller');
let mongoose = require('mongoose');
let Usuario = require('./../models/user.model');
let bcrypt = require('bcrypt');

module.exports.efetuaLogin = function(req,res){
    let pass = req.body.password;
    let email = req.body.email;


    let promise = Usuario.findOne({'email':email}).exec();
    
    promise.then(
        (data) =>{ 
            if (data){
                if (data.senha == pass) {
                    data.senha="";
                    res.status(200).send(data);
                }else{
                    res.status(400).send('Verifique sua senha');
                }
            }else{
                res.status(400).send('Email não cadastrado');
            }
        },
        (erro) => {
            res.status(500).json(erro);
        }
    );
}

module.exports.getAllUsers = function(req,res) {
    //ERRO na linha abaixo
    if(users.length>0){
        res.json(users);
    }else{
        res.status(404).send('Ainda não há usuários cadastrados')
    };
}

module.exports.getUserById = function(req,res) {
    let id = req.params.id;
    let user = users.find(user=>(user.id==id));
    if (user){
        res.json(user);
    }else{
        res.status(404).send('Usuário não encontrado');
    }
}

module.exports.newUser = function(req,res) {
        let user = new  Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 5),
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

module.exports.updateUserById = function(req,res) {
    console.log('chega');
    let id = req.params.id;
    let data = req.body;
    let findUser = Usuario.findById(id).exec();
    findUser.then(
        (user) =>{
            data.senha=user.senha;
            userUpdated = Usuario.findByIdAndUpdate(id,data).exec();
            res.send('updated');
        },
        (erro) => {
            res.status(500).json(erro);
        }
    )
}

module.exports.deleteUserById = function(req,res) {
    let id = req.params.id;
    let userIndex = users.findIndex(user=>(user.id==id));
    if (userIndex){
        users.splice(userIndex,1);
        res.status(200).send('Usuario Deletado')
    }else{
        res.status(404).send('Usuário não encontrado');
    }
}

module.exports.getAllPostsFromUser = function(req,res) {
    let id = req.params.id;
    let posts = postController.getPosts();
    let userPosts = posts.filter( post => post.uid===id);
    if(userPosts.length>0){
        res.status(200).send(userPosts);
    }else{
        res.status(404).send('Não foram encontrados posts desse usuário');
    }
}