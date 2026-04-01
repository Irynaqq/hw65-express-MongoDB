import express from 'express';
import { getMongoArticles } from '../controllers/dbController.js';

const router = express.Router();

router.get('/mongo-articles', getMongoArticles);

export default router;