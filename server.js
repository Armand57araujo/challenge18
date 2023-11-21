// Import necessary libraries
const express = require('express');
const routes = require('./routes');

// Create an Express application
const app = express();

const db = require('./config/connection');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Sync models to the database
db.once('open', async () => {
  console.log('Connected to MongoDB');


  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
