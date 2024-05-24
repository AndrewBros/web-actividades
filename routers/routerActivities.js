const express = require("express")
const routerActivities = express.Router();

let activities = require("../data/activities")
let users = require("../data/users")

routerActivities.get("/", (req,res) => {
    res.render("index.ejs", {
        acts: activities
    })
})
routerActivities.post("/donate", (req, res) =>{
    let userName = req.body.userName
    let password = req.body.password
    let activityName = req.body.activityName
    let money = parseFloat(req.body.money)

    // Check data
    let user = users.find(u => u.name == userName && u.password == password)
    if (user == null){
        res.send("Error")
        return
    }
    if (user.money <= money){
        res.send("Not enough money")
        return
    }
    let activity = activities.find(a => a.name == activityName)
    if(activity == null){
        res.send("Not valid name")
        return
    }
    user.money = user.money - money
    activity.money = activity.money + money
    res.send("/activities")
})
module.exports = routerActivities