import express from "express";
import authController from "./authController";

const router = express.Router();

router.post('/register', authController.register)
router.post('/register-company',authController.registerCompany)


export default router;