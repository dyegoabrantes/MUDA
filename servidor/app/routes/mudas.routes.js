var controller = require("./../controllers/muda.controller");

module.exports = function(app) {
    app.get("/api/mudas", controller.getMudas);
    app.get("/api/mudas/:id", controller.getMuda);
    app.post("/api/mudas", controller.createMuda);
    app.put("/api/mudas/:id", controller.updateMuda);
}



