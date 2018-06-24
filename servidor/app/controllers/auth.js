let bcrypt = require('bcrypt');
let Usuario = require('../models/user.model');

module.exports.signin = function(req, res){
    function signin(user) {
        if (!bcrypt.compareSync(req.body.senha, user.senha)) {
            fail()
        }
        res.status(200).send('Credenciais ok!')
    }
    function fail() {
        res.status(401).send('Invalid Login');
    }
    Usuario.findOne({id:req.body._id}).exec().then(signin,fail);
}