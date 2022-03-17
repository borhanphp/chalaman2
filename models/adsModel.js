const mongoose = require('mongoose');

const adsSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },

    image:{
        data: Buffer,
        contentType: String
    }
});


module.exports = adsModel = mongoose.model('adsModel',adsSchema);