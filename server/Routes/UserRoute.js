import express from 'express';
import UserLoginController from '../Controllers/LoginController.js';
import UserSignupController from '../Controllers/SignupController.js';
const router = express.Router();


router.post('/login', UserLoginController);
router.post('/signup', UserSignupController);


export default router;