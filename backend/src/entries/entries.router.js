const router = require("express").Router();
const controller = require("./entries.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/new")
    .post(controller.create)
    .all(methodNotAllowed);

router.route("/:date")
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;