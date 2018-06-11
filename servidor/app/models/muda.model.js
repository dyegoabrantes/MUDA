let mongoose  = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        nome: {
            type: String,
            required: true,
        },
        indiceGeral: {
            type: Number,
            required: true,
        }, 
        pontos: {
            type: Number,
            required: true,
        },
        arquivo: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            require: true
        },
        desafiosId: {
            type: [String],
            ref: 'Desafios',
            required: false,
        }
    })
    return mongoose.model('muda', schema);
}();
