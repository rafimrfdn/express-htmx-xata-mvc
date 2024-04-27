import express from "express";
const routerUser = express.Router();

import {
    GetAllUsers,
    GetUser
} from "../controllers/User.js"

routerUser.get("/all", GetAllUsers);
routerUser.get("/byId/:id", GetUser);

export {
    routerUser
}
