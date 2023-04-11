const express = require('express');
const app = express();

// Define your Express routes and middleware here

// Start the Express server
const port = process.env.PORT || 3000; // Use the environment port or default to 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
