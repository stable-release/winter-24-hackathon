const employeesService = require("./employees.services");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasRequiredProperties = hasProperties("first_name", "last_name", "email");

const VALID_PROPERTIES = [
    "first_name",
    "last_name",
    "email",
];

function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body;
    const invalidFields = Object.keys(data)
        .filter((field) => !VALID_PROPERTIES.includes(field));
    if(invalidFields.length) {
        next({
        status: 404,
        message: `Invalid field(s): ${invalidFields.join(", ")}`,
        });
    };
    next();
};

async function validPermission(req, res, next) {
    const { data: { permission } } = req.body;
    if (permission != 2) {
        return next({
            status: 404,
            message: `Incorrect permission level: ${permission}`
        });
    };
    next();
};

async function userExists(req, res, next) {
    const { user_id } = req.body.data;
    const user = await employeesService.read(user_id);
    if (user) {
        res.locals.user = user;
        next();
    } else {
        return next({
            status: 404,
            message: `Cannot find user: ${user_id}`
        });
    };
};

async function create(req, res) {
    const data = await employeesService.create(req.body.data);
    const user = {
        user_id: data.user_id
    };
    await employeesService.addInitialUserCredentials(user);
    res.status(201).json({ data });
};

async function list(req, res) {
    res.json({ data: await employeesService.list() });
};

async function destroy(req, res) {
    const { user } = res.locals;
    await employeesService.delete(user.user_id)
    res.status(204);
};

module.exports = {
    create: [
        hasOnlyValidProperties,
        hasRequiredProperties,
        asyncErrorBoundary(create)
    ],
    list: [
        validPermission,
        asyncErrorBoundary(list)
    ],
    delete: [
        asyncErrorBoundary(userExists),
        asyncErrorBoundary(destroy)
    ],
};