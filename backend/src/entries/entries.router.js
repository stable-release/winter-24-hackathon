const cors = require("cors");
const router = require("express").Router();
const controller = require("./entries.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .all(cors())
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/new")
    .all(cors())
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:date")
    .all(cors())
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;