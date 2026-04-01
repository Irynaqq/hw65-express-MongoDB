import express from 'express';
import {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById,
} from '../controllers/articlesController.js';

import { checkArticleAccess } from '../middlewares/articleAccess.js';

const router = express.Router();

router.get('/', checkArticleAccess, getArticles);
router.post('/', checkArticleAccess, postArticles);

router.get('/:articleId', checkArticleAccess, getArticleById);
router.put('/:articleId', checkArticleAccess, putArticleById);
router.delete('/:articleId', checkArticleAccess, deleteArticleById);

export default router;