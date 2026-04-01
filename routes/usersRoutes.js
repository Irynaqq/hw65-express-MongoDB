import express from 'express';

import {
  getUsers,
  postUsers,
  getUserById,
  putUserById,
  deleteUserById,
} from '../controllers/usersController.js';

import { basicAuth } from '../middlewares/auth.js';
import { validateUserInput } from '../middlewares/validateUser.js';
import { verifyToken } from '../middlewares/authJWT.js';

const router = express.Router();

router.get('/', verifyToken, basicAuth, getUsers);

router.post('/', verifyToken, basicAuth, validateUserInput, postUsers);

router.get('/:userId', verifyToken, basicAuth, getUserById);

router.put('/:userId', verifyToken, basicAuth, validateUserInput, putUserById);

router.delete('/:userId', verifyToken, basicAuth, deleteUserById);

export default router;