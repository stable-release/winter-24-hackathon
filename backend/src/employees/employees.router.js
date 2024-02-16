const router = require("express").Router();
const controller = require("./employees.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/new").post(controller.create).all(methodNotAllowed);
router.route("/:user_id")
//     .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;
