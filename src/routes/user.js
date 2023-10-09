// Import dependency 'express'
import express from "express";
// Import csrf
import csrf from "csurf";
const csrfProtection = csrf({cookie: true});

const router = express.Router();
router.use(csrfProtection);

// Import controller methods
import { UserController } from "./../controllers/userController.js";
const userController = new UserController();

// Import own middleware "auth.js"

// Routes

export {
  router
};