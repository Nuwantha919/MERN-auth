import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router(); // Create a new router

router.post("/signup", signup);

export default router; 

