import express from "express";
import { signup, login } from "../Controllers/user.controllers.js";

const router = express.Router();
router.post("/signup", signup); // Change to /signup
router.post("/login", login)
export default router;
