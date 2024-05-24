const express = require("express")
const routerActivities = express.Router();
let activities = require("../data/activites")

routerActivities.get("/", (req,res) => {
    res.send(activities)
})
module.exports = routerActivities