const express = require("express")
const app = express()
const port = 8081

app.set("views", "views")
app.set("views engine", "ejs")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

let routerActivities = require("./routers/routerActivities")
app.use("/activities", routerActivities)

app.listen(port, () => {
    console.log("Servidor activo en " + port)
})