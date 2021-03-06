const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: './config.env'});
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/user'));
app.use(require('./routes/artist'));

const listRoutes = require('express-list-routes');
console.log('\n ---------------- ALL ROUTES ---------------- \n');
console.log(listRoutes(app));
console.log('\n ---------------- ALL ROUTES ---------------- \n');

// get driver connection
const dbo = require('./db/conn');

const path = require('path');

// Serve static files from the React client app
app.use(express.static(path.join(__dirname, '../client/build')));

// After defining the routes: Anything that doesn't match what's above,
// send back index.html;
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function(err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
