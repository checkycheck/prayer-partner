const express = require('express');
const router = express.Router();
const DevotionsController = require('../controllers/devotion.controller');
const { authorize } = require('../middleware/authJwt');
const devotionController = require('../controllers/devotion.controller');

// :::::::::::
router
.route('/:id')
.get(DevotionsController.getDevotionSingle)
.delete(DevotionsController.deleteDevotion)
.put(DevotionsController.editDevotion)


router
.route('/')
.post(DevotionsController.createDevotion )
.get(DevotionsController.getDevotions)

router
.route('/category/:cat')
.get(devotionController.devotionCat)

router
.route('/sub_category/:subCat')
.get(devotionController.devotionSubCat)



module.exports = router