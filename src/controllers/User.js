import {
    QueryListOfUsers,
    QueryUserById
} from "../services/User.js";

const GetAllUsers = (req,res) => {
    const userList = QueryListOfUsers();
    return res.render("userAll", {userList});
}

const GetUser = (req, res) => {
    const userId = req.params.id;
    const userData = QueryUserById(userId);

    return res.render("userById", {userData});
}

export {
    GetAllUsers, 
    GetUser
}
