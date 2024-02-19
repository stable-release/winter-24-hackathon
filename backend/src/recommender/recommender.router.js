const cors = require("cors");
const router = require("express").Router();
const controller = require("./recommender.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").all(cors()).all(methodNotAllowed);
router.route("/:username").all(cors()).get(controller.recommendation).all(methodNotAllowed);

module.exports = router;