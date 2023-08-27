import express from 'express';
import { Signup, login, loginwithgoogle } from '../db/auth.mjs';

var router=express.Router();

// Signup
router.post("/signup" ,Signup);

// login
router.post("/login",login );

// google
router.post("/google",loginwithgoogle);

export default router; 