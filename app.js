const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', (process.env.PORT || 2000));

app.listen(app.get('port'), () => {
  console.log(`Server listening on port: ${app.get('port')}`)
});

app.get('/*', (req, res) => {
  res.sendFile('./dist/index.html', { root: __dirname });
});
