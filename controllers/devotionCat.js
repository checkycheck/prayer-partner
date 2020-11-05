const Categoty =  require('../models/category');
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse.js")

const createCat = asyncHandler(async(req, res) =>{
    
    let {
        title,
        cat,
        catSub,
        audioUrl,
        videoUrl,
        imageUrl
    } = req.body;

    let newCat =  new Categoty({
        title,
        cat,
        catSub,
        audioUrl,
        videoUrl,
        imageUrl
    })

    newCat.save()
    .then(cat =>{
        res.json({
            success: true,
            message: 'Category created successfully',
            data: cat
        })
    })
    .catch(err =>res.json({
        success: false,
        message: 'Unable to create category',
        data: null
    }))
    
})

const deleteCat = asyncHandler(async(req, res, next ) =>{
    
    let id  = req.params.id;

    await Categoty.findById(id)
    .then(cat =>{
        cat.remove();

        res.json({
            success: true,
            message:'Category deleted successfully',
            data: null
        })
    })
    .catch(err =>{
        return next( new ErrorResponse("Unable delete category", 404))
    })
})


module.exports = {
    createCat,
    deleteCat
}