const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title: { type: String, required:false},
    detail: { type: String, required:false},
    imagePath:{type: String, required: false},
    date:{type: String, required: false}

});


module.exports = mongoose.model('event',eventSchema);
