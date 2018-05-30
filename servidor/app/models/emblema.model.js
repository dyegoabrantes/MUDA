let mongoose  = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        arquivo: {
            type: String,
            required: true,
        },
        nivel: {
            type: Number,
            required: true,
        },
        pontuacao: {
            type: Number,
            required: true,
        },
        categoria: {
            type: mongoose.Schema.ObjectId,
            ref: 'Categoria',
            required: true
        }
    })
    return mongoose.model('emblemas', schema);
}();