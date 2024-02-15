const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { validatePassword, encryptPassword } = require("./auth.middleware");
const {
    retrievePassword,
    retrieveUser,
    updateCredentials,
} = require("./auth.services");

/**
 * Property Validation
 */
function hasOnlyValidProperties(req, res, next) {
    // Email and username point to the same table column
    const VALID_PROPERTIES = [
        "username",
        "password",
        "FirstName",
        "LastName",
        "Email",
    ];

    const { data = {} } = req.body;
    const invalidFields = Object.keys(data).filter(
        (field) => !VALID_PROPERTIES.includes(field)
    );
    if (invalidFields.length) {
        next({
            status: 404,
            message: `Invalid field(s): ${invalidFields.join(", ")}`,
        });
    }
    next();
}

async function extractProperties(req, res, next) {
    const { data: { username, password } = {} } = req.body;
    res.locals.username = username;
    res.locals.password = password;
    next();
}

/**
 * Takes a data object in req.body containing username and password.
 * Responds with either valid permissions or null values.
 */
async function verifyPassword(req, res, next) {
    const response = await retrievePassword(res.locals.username);
    res.locals.hash = response[0].password;
    res.locals.permissions = response[0].permission;
    const valid = await validatePassword(res.locals.password, res.locals.hash);

    if (!valid) {
        return next({
            status: 401,
            message: `Credentials incorrect`,
        });
    }

    res.status(200).json({
        data: {
            username: res.locals.username,
            permissions: res.locals.permissions,
        },
    });
}

async function activateAccount(req, res, next) {
    const { data: { FirstName, LastName, Email, password } = {} } = req.body;
    const response = await retrieveUser(Email);
    if (
        response[0] &&
        response[0].first_name == FirstName &&
        response[0].last_name == LastName
    ) {
        res.locals.UserID = response[0].user_id;
        res.locals.email = response[0].email;

        const hash = await encryptPassword(password);

        // Default activation permission to 1
        await updateCredentials(res.locals.UserID, res.locals.email, hash, 1);
        const newCredentials = await retrievePassword(Email);

        return res.status(200).json({
            data: {
                username: newCredentials[0].username,
                permissions: newCredentials[0].permission,
            },
        });
    }

    next({
        status: 402,
        message: `Invalid email`,
    });
}

module.exports = {
    verification: [
        hasOnlyValidProperties,
        hasProperties("username", "password"),
        extractProperties,
        asyncErrorBoundary(verifyPassword),
    ],
    activation: [
        hasOnlyValidProperties,
        hasProperties("FirstName", "LastName", "Email", "password"),
        asyncErrorBoundary(activateAccount),
    ],
};
