var mongoose = require ('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://localhost/mudaDb')
    mongoose.connection.on('connected', function () {
        console.log('Mongoose! Conectado em ' + 'mongodb://localhost/mudaDb');
    });
    mongoose.connection.on('disconnected',
        function () {
            console.log('Mongoose! Desconectado de ' + 'mongodb://localhost/mudaDb');
        });
    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose! Erro na conexão: '+'mongodb://localhost/mudaDb');
    });
    mongoose.set('debug', true);
}
