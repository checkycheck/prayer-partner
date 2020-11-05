const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:{
        type: String
    },
    devotion:{

    },
    subCategory:[
        {
            name:{
                type: String
            }
        }
    ]
})

module.exports = mongoose.model('Category', CategorySchema);