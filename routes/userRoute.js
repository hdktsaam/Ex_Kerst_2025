const express = require("express");
const spelersctrl = require("../controllers/user");

// maak router object aan
const routes = express.Router();

// routes aanmaken

routes.get("/", spelersctrl.welkom)
routes.post("/", spelersctrl.checkUser);
routes.patch("/", spelersctrl.changePSW);

// export router object
module.exports = routes;
