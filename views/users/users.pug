import express from 'express';
import { getRoot } from '../controllers/rootController.js';
import { logRequests } from '../middlewares/logger.js';
import { ensureAuth } from '../middlewares/ensureAuth.js';

const router = express.Router();

router.get('/', logRequests, getRoot);

router.get('/set-theme/:theme', (req, res) => {
  const { theme } = req.params;
  const { redirect } = req.query;

  res.cookie('theme', theme, {
    maxAge: 1000 * 60 * 60 * 24,
  });

  if (redirect) {
    return res.redirect(redirect);
  }

  return res.redirect('/');
});

router.get('/protected', ensureAuth, (req, res) => {
  res.send(`Protected route. Hello, ${req.user.email}`);
});

export default router;