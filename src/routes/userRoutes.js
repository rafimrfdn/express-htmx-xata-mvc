//const express = require('express');

import express from 'express';

const userController = require('../controllers/userController');

const routerUser = express.Router();

routerUser.post('/create-user', userController.createUser);

module.exports = routerUser;
