const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index.html');
});


// starting server
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Express server is running...');
});
