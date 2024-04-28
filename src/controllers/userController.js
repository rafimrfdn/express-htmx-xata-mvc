//const User = require('../models/user');
//const xataService = require('../services/xataService'); // Assuming xataService exists

import { User } from '../models/user';
import xataService from '../services/xataService';

exports.createUser = async (req, res) => {
  try {
    const { nama, email, password } = req.body;
    const user = new User(nama, email, password);

    const response = await xataService.insertUser(user);
    if (response.ok) {
      res.json({ message: 'User created successfully!', userId: response.id });
    } else {
      console.error('Error creating user:', await response.json());
      res.status(response.status).json({ message: 'An error occurred.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
