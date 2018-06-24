let controller = require("../controllers/posts.controller.js")

module.exports = function(app) {
    app.get("/api/posts", controller.getAllPosts);
    app.get("/api/posts/:id", controller.getPostById);
    app.post("/api/posts", controller.newPost);
    app.put("/api/posts/:id", controller.updatePostById);
    app.delete("/api/posts/:id", controller.deletePostById);
    app.get("/api/posts/:id/usuario", controller.getUserFromPost);
}