const mongoose = require('mongoose');


const relaiSchema = mongoose.Schema({

    region : {type:String,required:true},
    latitude: {type:Number,required:true},
    longitude: {type:Number,required:true},
    site: {type:String,required:true},
    freqTx: {type:Number,required:true},
    shift: {type:Number,required:true},
    tone: {type:Number,required:true},
    mode: {type:String,required:true},
    locator: {type:String,required:true}

});


module.exports = mongoose.model('relai',relaiSchema);

