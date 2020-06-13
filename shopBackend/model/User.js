const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userName: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    state  : {
        type :  String,
        default : "pending",
        enum : ["pending", "accepted","rejected"],
    },
    isAdmin: { type : Boolean,
        required : true,
        default : false
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);
