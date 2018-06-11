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
        desafiosId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Desafios',
            required: true,
        }
    })
    return mongoose.model('muda', schema);
}();