const express = require("express")
const routerActivities = express.Router();
let activities = require("../data/activites")

routerActivities.get("/", (req,res) => {
    res.render("index.ejs", {
        acts: activities
    })
})
module.exports = routerActivities