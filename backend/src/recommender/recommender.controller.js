const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const entriesService = require("../entries/entries.services");
const employeesService = require("../employees/employees.services");
const { retrieveUser } = require("../auth/auth.services");

/**
 * Query entries history into local save
 */
async function getHistory(req, res, next) {
    const { username } = req.params; // API_BASE_URL/recommender/${username}
    const account = await retrieveUser(username);
    res.locals.username = username;
    res.locals.user_id = account[0].user_id;
    
    const entries = await entriesService.list(res.locals.user_id);
    res.locals.entries = entries;
    // if (entries.length) {
    //     res.locals.entries = entries;
    //     next();
    // } else {
    //     return next({
    //         status: 404,
    //         message: "User does not have entries yet.",
    //     });
    // }
    next();
}

/**
 * Query employee information into local save
 */
async function getBio(req, res, next) {
    const employee = await employeesService.read(res.locals.user_id);
    res.locals.employee = employee;
    next();
}

/**
 * Strategy
 */
async function strategy(req, res, next) {
    res.status(200).json({
        data: {
            strategy: Math.round(Math.random() * 4),
        },
    });
}

module.exports = {
    recommendation: [
        asyncErrorBoundary(getHistory),
        asyncErrorBoundary(getBio),
        asyncErrorBoundary(strategy),
    ],
};
