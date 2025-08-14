import express from 'express';
import { getArray, addItem } from '../controllers/sidebarController.js';

const router = express.Router();

router.get('/', getArray);
router.post('/', addItem);

export default router;