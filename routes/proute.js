const express = require("express");
const { getEmail, EnterMessage } = require("../controllers/pcontroller");
const router = express.Router();
router.route("/email").post(getEmail);
router.route("/message").post(EnterMessage);
module.exports = router;