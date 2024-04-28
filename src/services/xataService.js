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

//module.exports = { insertUser };

export {
    insertUser
}
