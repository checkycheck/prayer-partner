const mongoose = require('mongoose');

const DevotionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String
    },
    audioUrl:{
        type: String
    },
    videoUrl:{
        type: String
    },
    text:{
        type: String
    },
    category:{
        type:String
    },
    subCategory:{
        type:String
    }
})

module.exports = mongoose.model('Devotion', DevotionSchema);