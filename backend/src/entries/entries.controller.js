const entriesServices = require("./entries.services");
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const employeesServices = require("../employees/employees.services");
const hasRequiredProperties = hasProperties(
    "user_id", 
    "entry_date", 
    "activity_level", 
    "daily_steps", 
    "stress_level", 
    "sleep_duration",
    "sleep_quality",
    "blood_pressure");

const VALID_PROPERTIES = [
    "user_id",
    "entry_date",
    "activity_level",
    "daily_steps",
    "stress_level",
    "sleep_duration",
    "sleep_quality",
    "blood_pressure",
    "notes",
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

async function entryExists(req, res, next) {
    const entry_date = req.params.date;
    const entry = await entriesServices.read(entry_date);
    if (entry) {
        res.locals.entry = entry;
        next();
    } else {
        return next({
            status: 404,
            message: `There is no entry for this date: ${entry_date}`
        });
    };
};

async function userHasEntries(req, res, next) {
    const { data: { user_id } } = req.body;
    const entries = await entriesServices.list(user_id);
    if (entries.length) {
        res.locals.entries = entries;
        next();
    } else {
        return next({
            status: 404,
            message: "User does not have entries yet.",
        });
    };
};

async function create(req, res) {
    res.status(201).json({ data: await entriesServices.create(req.body.data) });
};

async function list(req, res) {
    res.json({ data: res.locals.entries });
};

async function read(req, res) {
    res.json({ data: res.locals.entry });
};

module.exports = {
    create: [
        hasOnlyValidProperties,
        hasRequiredProperties,
        asyncErrorBoundary(create),
    ],
    read: [
        asyncErrorBoundary(entryExists),
        read,
    ],
    list: [
        asyncErrorBoundary(userHasEntries),
        list,
    ],
};