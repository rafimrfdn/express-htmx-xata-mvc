//const fetch = require('node-fetch');

const xataApiKey = 'xau_2WWywKSiOweq3EOkvZJOnAHnWMpfJpP90'; // Replace with your actual Xata API key

async function insertUser(user) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${xataApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };

  const response = await fetch('https://muhammad-rafiuddin-s-workspace-beligo.us-east-1.xata.sh/db/express-fullstack:main/tables/Users/data?columns=id', options);
  return response;
}


async function getAllUsers() { // Changed name to plural for consistency
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${xataApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      columns: ["nama", "email", "password"],
      page: { size: 15 }
    })
  };

  try {
    const response = await fetch('https://muhammad-rafiuddin-s-workspace-beligo.us-east-1.xata.sh/db/express-fullstack:main/tables/Users/query', options);
    if (!response.ok) {
      throw new Error(`Failed to get users: ${await response.text()}`); // Throw an error with details
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error for handling in the controller
  }
}


module.exports.insertUser = insertUser;
module.exports.getAllUsers = getAllUsers;
