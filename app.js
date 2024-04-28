import express from "express";
import * as path from "path";
import { routerUser } from "./src/routes/User.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

const xataApiKey = 'xau_2WWywKSiOweq3EOkvZJOnAHnWMpfJpP90';

app.use(express.json()); 

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

app.use("/user", routerUser);

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

app.get('/getall', async (req, res) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${xataApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ columns: ["nama", "email", "password"], page: { size: 15 } })
        };

        const response = await fetch('https://muhammad-rafiuddin-s-workspace-beligo.us-east-1.xata.sh/db/express-fullstack:main/tables/Users/query', options);
        const data = await response.json();

        let html = '<table><thead><tr><th>Nama</th><th>Email</th><th>Password</th></tr></thead><tbody>';

        data.records.forEach(user => {
            html += `<tr><td>${user.nama}</td><td>${user.email}</td><td>${user.password}</td></tr>`;
        });

        html += '</tbody></table>';

        res.send(html);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(port, () => {
    console.log(`server run di localhost port ${port}`);
})

