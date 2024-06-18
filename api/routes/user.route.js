import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router(); // Create a new router

router.get('/', test);

export default router; // Export the router