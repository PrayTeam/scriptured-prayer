const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('demo'));
app.use(express.static('../cardbox/static'));

app.listen(PORT, function() {
  console.log('Listening on localhost:' + PORT);
});
