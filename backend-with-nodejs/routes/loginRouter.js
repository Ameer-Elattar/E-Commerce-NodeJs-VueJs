const express = require("express");
const controller = require("../controllers/loginController");
const router = express.Router();

router.route("/login").post(controller.login);

module.exports = router;
