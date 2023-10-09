// Import dependency 'express'
import express from "express";
// Import csrf
import csrf from "csurf";
const csrfProtection = csrf({ cookie: true });

const router = express.Router();
router.use(csrfProtection);

// Import controller methods
import { PublicController } from "./../controllers/publicController.js";
const publicController = new PublicController();

// Import own middleware "auth.js"

// Routes
router.get("/test", publicController.test);

export {
    router
};