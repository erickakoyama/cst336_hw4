const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index.ejs', { activeRoute: '/' });
});

app.get('/deep-space-network', (req, res) => {
  res.render('deep-space-network.ejs', { activeRoute: 'deep-space-network' });
});

app.get('/interplanetary-internet', (req, res) => {
  res.render('interplanetary-internet.ejs', { activeRoute: 'interplanetary-internet' });
});

app.get('/satellite-internet', (req, res) => {
  res.render('satellite-internet.ejs', { activeRoute: 'satellite-internet' });
});


// starting server
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Express server is running...');
});
