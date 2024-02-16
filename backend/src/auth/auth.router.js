const cors = require("cors");
const router = require("express").Router();
const controller = require("./auth.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").all(cors()).put(controller.activation).all(methodNotAllowed);
router.route("/login").all(cors()).put(controller.verification).all(methodNotAllowed);

module.exports = router;