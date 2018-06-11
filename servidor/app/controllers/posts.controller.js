let usersController = require('./../controllers/users.controller');

posts = [
    {
        "id": "1",
        "texto": "Esse post é top!",
        "likes": "0",
        "uid": "1"
    },
    {
        "id": "2",
        "texto": "Outro post top!",
        "likes": "0",
        "uid": "1"
    }
];

module.exports.getPosts = function(){
    return posts;
}

module.exports.getAllPosts = function(req,res) {
    if(posts.length>0){
        res.json(posts);
    }else{
        res.status(404).send('Ainda não há posts inseridos')
    }
};
module.exports.getPostById = function(req,res) {
    let id = req.params.id;
    let post = posts.find(post=>(post.id==id));
    if (post){
        res.json(post);
    }else{
        res.status(404).send('Post não encontrado');
    }
};
module.exports.newPost = function(req,res) {
    posts.push(req.body);
    res.status(200).send(req.body);
};
module.exports.updatePostById = function(req,res) {
    let id = req.params.id;
    let data = req.body;
    let post = posts.find(post=>(post.id==id));
    post.nome = data.nome;
    post.email = data.email;
    post.senha = data.senha;
    res.json(post);
};
module.exports.deletePostById = function(req,res) {
    let id = req.params.id;
    let postIndex = posts.findIndex(user=>(user.id==id));
    if (postIndex){
        posts.splice(postIndex,1);
        res.status(200).send('Post Deletado')
    }else{
        res.status(404).send('Post não encontrado');
    }
};
module.exports.getUserFromPost = function(req,res) {
    let id = req.params.id;
    let users = usersController.getUsers();
    let post = this.posts.find( post => (post.id==id));
    let user = users.find( user => (user.id==post.uid));
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send('Não foram encontrados usuários');
    }
};