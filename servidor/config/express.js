let express = require ('express');
let bodyParser = require('body-parser');
let path = require('path');

let usersRouter = require('../app/routes/users.routes');
let postsRouter = require('../app/routes/posts.routes');

module.exports = function () {
    let app = express();
    app.set("port", 3000);
    app.use(express.static('./../MUDA/www'))
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    usersRouter(app);
    postsRouter(app);

    return app;
}