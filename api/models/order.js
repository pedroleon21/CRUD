const mongoose - require('mongoose');

const UserSchema = nwe mongoose.Schema({
    plateName: {
        type : String,
        require: true,
    },
    destinyTable :{
        type : String,
        require,true,
    },
    email: {
        type:String,
        unique: true,
        required: true,
        lowercase:true,
    },
    password: {
        type : String,
        require : true,
        select : false,
    },
    createdAt : {
        type : Date,
        default: Data.now,
    }
})