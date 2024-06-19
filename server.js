const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/save_user', (req, res) => {
  const user = req.body;
  const filename = `user_data/${user.id}telegram.txt`;

  fs.writeFile(filename, JSON.stringify(user), (err) => {
    if (err) {
      console.error('Error saving user data:', err);
      res.status(500).send('Error saving user data');
    } else {
      res.send('User data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
