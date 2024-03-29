const express = require('express');
const router = express.Router();
const userMangementController = require('../controllers/userManagement.controller');

// @route /getAllUser
// @desc getting all users
// @access private
router.route('/')
.get(userMangementController.getAllUsers);


// @route /getSingleUser
// @desc getting single user
// @access private
router
.route('/getSingleUser/:id')
.get(userMangementController.getSingleUser);

// @route /deleteUser
// @desc deleting user
// @access private
router
.route('/deleteUser/:id')
.delete(userMangementController.deleteUser);

// @route /suspendUser
// @desc suspending user
// @access private
router
.route('/suspendUser/:id')
.post(userMangementController.suspendUser);

// @route /unsuspendUser
// @desc unsuspending user
// @access private
router
.route('/unsuspendUser/:id')
.post(userMangementController.unsuspendUser);

// @route /assignUser
// @desc assign user a role
// @access private
router
.route('/assignuser/:roleId/:userId')
.post(userMangementController.assignUser);

module.exports = router
