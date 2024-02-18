const cors = require("cors");
const router = require("express").Router();
const controller = require("./employees.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").all(cors()).get(controller.list).all(methodNotAllowed);
router.route("/new").all(cors()).post(controller.create).all(methodNotAllowed);
router.route("/:user_id")
    .all(cors())
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;
