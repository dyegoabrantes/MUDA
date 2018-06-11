let mongoose = require('mongoose');

module.exports = function(){
        
    let schema = mongoose.Schema({
        nome:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            index:{
                unique: true
            }
        },
        senha:{
            type:String,
            required:true
        },
        habitos:{
            type:{id:String},
            required:false
        },
        emblemas:{
            type:{id:String},
            required:false
        },
        desafiosId:{
            type:{desafioId: Number, status: String},
            required:false
        },
        logitude:{
            type:Number,
            required:false
        },
        latitude:{
            type:Number,
            required:false
        },
    });
    return mongoose.model('usuarios', schema);
} ();