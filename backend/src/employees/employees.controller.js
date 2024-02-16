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
};