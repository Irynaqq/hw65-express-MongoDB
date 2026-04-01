import express from 'express';
import { passport } from '../config/passport.js';
import {
  register,
  loginSuccess,
  logout,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login-fail',
    failureMessage: true,
  }),
  loginSuccess
);

router.get('/login-fail', (req, res) => {
  res.status(401).send('Login failed');
});

router.get('/logout', logout);

export default router;