const express = require("express")
const app = express()
const port = 8081

let routerActivities = require("./routuers/routerActivities")
app.use("/activities", routerActivities)

app.listen(port, () => {
    console.log("Servidor activo en " + port)
})