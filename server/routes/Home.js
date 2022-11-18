import express from  'express';

import {newUserData,userSignIn} from "../controllers/Home.js";

const router = express.Router();


router.post('/Registration',newUserData);
router.post('/signIn', userSignIn);



export default router;
