import express from "express";
import { getMenu } from "../controllers/MenuController.js"; // Pastikan impor dengan { }

const router = express.Router();

router.get('/menu', getMenu);

export default router;
