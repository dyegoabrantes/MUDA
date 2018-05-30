let controller = require("../controllers/users.controller.js")

module.exports = function(app) {
    // ROTA DE LOGIN
    app.post("/api/login", controller.efetuaLogin)

    //ROTA PARA OBTER TODOS OS USUARIOS
    app.get("/api/usuarios", controller.getAllUsers);

    //ROTA PARA OBTER USUARIO POR ID
    app.get("/api/usuarios/:id", controller.getUserById);

    //ROTA PARA ADICIONAR NOVO USUÁRIO
    app.post("/api/usuarios", controller.newUser);

    //ROTA PARA ATUALIZAR USUÁRIO
    app.put("/api/usuarios/:id", controller.updateUserById);

    // ROTA PARA DELETAR USUÁRIO
    app.delete("/api/usuarios/:id", controller.deleteUserById);
}