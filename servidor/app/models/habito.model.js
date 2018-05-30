let mongoose  = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        nome: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        }, 
        categoria: {
            type: mongoose.Schema.ObjectId,
            ref: 'Categoria',
            required: true,
        },
        pontuacao: {
            type: Number,
            required: true,
        }
    })
    return mongoose.model('habitos', schema);
}();