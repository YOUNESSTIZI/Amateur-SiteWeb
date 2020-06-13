mongoose = require('mongoose');
const uniqueValidato=require('mongoose-unique-validator')

const articleSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {type :String ,required:true},
    description : {type : String , required: true},
    dateCreate : {type : Date},
    vu : {type : Number},
    filePath: {type:String },
    creator :{type : mongoose.Schema.Types.ObjectId, ref : "Member", required : true},
    state  : {
        type :  String,
        default : "Pending",
        enum : ["Pending", "Accepted","Rejected"],
    },
    dateMisAjour :{type:Date}
});
articleSchema.plugin(uniqueValidato);
module.exports = mongoose.model('Article', articleSchema)
