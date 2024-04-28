import {
    QueryListOfUsers,
    QueryUserById
} from "../services/User.js";

const GetAllUsers = (req, res) => {
    const userList = QueryListOfUsers();
    return res.render("userAll", {userList});
}

const GetUser = (req, res) => {
    const userId = req.params.id;
    const userData = QueryUserById(userId);

    return res.render("userById", {userData});
}

const AddUser = async (req, res) => {
  const { nama, email, password } = req.body;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${xataApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nama, email, password })
  };

  try {
    const response = await fetch('https://muhammad-rafiuddin-s-workspace-beligo.us-east-1.xata.sh/db/express-fullstack:main/tables/Users/data?columns=id', options);
    const data = await response.json();

    if (response.ok) {
      res.json({ message: 'User created successfully!', userId: data.id }); // Assuming 'id' is returned in the response
    } else {
      console.error('Error creating user:', data);
      res.status(response.status).json({ message: 'An error occurred.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}


export {
    GetAllUsers, 
    GetUser,
    AddUser
}
