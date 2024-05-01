//const express = require('express');
//const userController = require('../controllers/userController');

import express from 'express';
//import userController from '../controllers/userController';

import { createUser, 
    getAllUsers, 
    getUserForUpdate, 
    updateUser, 
    deleteUser 
} from '../controllers/userController.js';

const router = express.Router();


router.post('/create-user', createUser);
router.get('/all', getAllUsers);

router.get('/users/:id/edit', getUserForUpdate);  // Route to get user for update form
router.patch('/users/:id', updateUser); // Update user route

router.delete('/users/:id', deleteUser); // Delete user route

//module.exports = router;

export default router ;

