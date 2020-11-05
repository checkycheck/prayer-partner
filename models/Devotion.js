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
        cat:{
            type:String
        },
        subCat:{
            type: String
        }
    }
})

module.exports = mongoose.model('Devotion', DevotionSchema);