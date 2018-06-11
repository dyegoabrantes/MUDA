let mongoose  = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({

        pontos: {
            type: Number,
            required: true,
        },
        arquivo: {
            type: String,
            required: true,
        },
        texto: {
            type: String,
            required: true,
        }
    })
    return mongoose.model('mundo', schema);
}();