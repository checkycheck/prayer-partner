const Devotion = require('../models/Devotion');
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse.js");

const createDevotion = asyncHandler(async(req, res, next) => {
    const devotion = await Devotion.create(req.body);
    return res.status(200).json({
        success: true,
        message: "Devotion created Successfully",
        data: devotion
    });
});

const getDevotions = asyncHandler(async(req, res, next) => {

    const devotions = await Devotion.find();

    if(!devotions[0]){
        return res.status(200).json({
            success: true,
            message: "No Devotions have been posted",
            data: []
        })
    }

    return res.status(200).json({
        success: true,
        message: "Devtions Found",
        data: devotions
    })
});

const getDevotionSingle = asyncHandler(async(req, res, next) => {

    const devotion = await Devotion.findById(req.params.id);

    if(!devotion) next(new ErrorResponse("Devotion not found", 404));

    return res.status(200).json({
        success: true,
        message: "Devtion Found",
        data: devotion
    })
});

const deleteDevotion = asyncHandler( async(req, res, next) =>{
    // finding devotion by ID
    const devotion = await Devotion.findById(req.params.id)
    
    if(!devotion) next( new ErrorResponse('no devotion with this id', 404));

    devotion.remove();

    res.status(200).json({
        success: true,
        message: 'devotion successfully deleted'
    })
});

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::EDITTING DEVOTION::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const editDevotion = asyncHandler(async(req, res, next) =>{
    // const update = req.body;
    const id = req.params.id;
    const options = { new: true };
    // updated = {};

    const devotionFields = {};
    if(req.body.title) devotionFields.title = req.body.title;
    if(req.body.imageUrl) devotionFields.imageUrl = req.body.imageUrl;
    if(req.body.audioUrl) devotionFields.audioUrl = req.body.audioUrl;
    if(req.body.videoUrl) devotionFields.videoUrl = req.body.videoUrl;
    if(req.body.text) devotionFields.text = req.body.text;
    if(req.body.time) devotionFields.time = req.body.time;
    if(req.body.publishDate) devotionFields.publishDate = req.body.publishDate;
    if(req.body.category) devotionFields.cat = req.body.category;
    if(req.body.subCatategory) devotionFields.subCat = req.body.subCategory;

     await Devotion.findByIdAndUpdate(
        { _id: id }, 
        { $set: devotionFields },
        { new: true }
     )
     .then(devotion =>{
         if(!devotion){
            return next( new ErrorResponse("Unable to update devotion", 404))
         }
        res.status(200).json({
            success: true,
            message: 'updated successfully',
            data: devotion
        })
     })
     .catch(() =>{
        return next( new ErrorResponse("Unable to update devotion", 404))
     })
 })

 const devotionCat = asyncHandler(async (req, res, next) =>{
     let cat  = req.params.cat
     await Devotion.find({category:cat})
     .then(devotion =>{
        if(!devotion) next(new ErrorResponse("Devotion not found", 404));

        res.status(200).json({
            success: true,
            message:`${cat} category`,
            data:devotion
        })

         
     })
     .catch(err =>{
         return next(new ErrorResponse("Devotion not found", 404));
     })
 })

 const devotionSubCat = asyncHandler(async (req, res, next) =>{
    let subcat  = req.params.subCat
    await Devotion.find({subCategory:subcat})
    .then(devotion =>{
       if(!devotion) next(new ErrorResponse("Devotion not found", 404));

       res.status(200).json({
           success: true,
           message:`${cat} category`,
           data:devotion
       })

        
    })
    .catch(err =>{
        return next(new ErrorResponse("Devotion not found", 404));
    })
})



module.exports = {
    createDevotion,
    getDevotions,
    getDevotionSingle,
    deleteDevotion,
    editDevotion,
    devotionCat,
    devotionSubCat
}