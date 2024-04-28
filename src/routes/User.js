import express from "express";
const routerUser = express.Router();

import {
    GetAllUsers,
    GetUser,
    AddUser
} from "../controllers/User.js"

routerUser.get("/all", GetAllUsers);
routerUser.get("/byId/:id", GetUser);

routerUser.post("/insert-user", AddUser);


export {
    routerUser
}
