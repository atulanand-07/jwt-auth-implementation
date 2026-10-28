import express from "express";


import { userPrivate } from "../controllers/private.controller.js";
import { authenticationToken } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.get("/", authenticationToken, userPrivate)

export default router;
