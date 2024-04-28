// import express from "express";
// import * as path from "path";
// // import { routerUser } from "./src/routes/userRoutes.js";
// import bodyParser from "body-parser";
//
// const app = express();
// const port = process.env.PORT || 3000;
//
// const xataApiKey = 'xau_2WWywKSiOweq3EOkvZJOnAHnWMpfJpP90';
//
// app.use(express.json()); 
//
// // Middleware to parse JSON bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
//
// app.set("view engine", "ejs");
// app.set("views", path.resolve("./src/views"));
//
// app.use("/user", routerUser);




const express = require('express');
const path = require('path'); // To resolve file paths
const bodyParser = require('body-parser'); // For parsing request bodies

const app = express();

const port = process.env.PORT || 3000;

// Set view engine to EJS
//app.set('views', path.join(__dirname, 'views'));
app.set("views", path.resolve("./src/views"));
app.set('view engine', 'ejs');

// Use body-parser middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/users', userRoutes);  // Register routes with a base path of '/users'

// Serve static assets from the 'public' directory
//app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.static(path.resolve('./src/public')));

// Handle any routes not explicitly defined (e.g., serve index.html for the root path)
app.get('*', (req, res) => {
  res.render('index'); // Replace with your actual index.html file name if it's different
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`server run di localhost port ${port}`);
})









// app.post('/insert-user', async (req, res) => {
//   const { nama, email, password } = req.body;
//
//   const options = {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${xataApiKey}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ nama, email, password })
//   };
//
//   try {
//     const response = await fetch('https://muhammad-rafiuddin-s-workspace-beligo.us-east-1.xata.sh/db/express-fullstack:main/tables/Users/data?columns=id', options);
//     const data = await response.json();
//
//     if (response.ok) {
//       res.json({ message: 'User created successfully!', userId: data.id }); // Assuming 'id' is returned in the response
//     } else {
//       console.error('Error creating user:', data);
//       res.status(response.status).json({ message: 'An error occurred.' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// app.get('/getall', async (req, res) => {
//     try {
//         const options = {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${xataApiKey}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ columns: ["nama", "email", "password"], page: { size: 15 } })
//         };
//
//         const response = await fetch('https://muhammad-rafiuddin-s-workspace-beligo.us-east-1.xata.sh/db/express-fullstack:main/tables/Users/query', options);
//         const data = await response.json();
//
//         let html = '<table><thead><tr><th>Nama</th><th>Email</th><th>Password</th></tr></thead><tbody>';
//
//         data.records.forEach(user => {
//             html += `<tr><td>${user.nama}</td><td>${user.email}</td><td>${user.password}</td></tr>`;
//         });
//
//         html += '</tbody></table>';
//
//         res.send(html);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });





