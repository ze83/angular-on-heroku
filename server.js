const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/dist/deployonheroku'));
app.get('/*', function(request, response){
  response.sendFile(path.join(__dirname +
    '/dist/deployonheroku/index.html'));
  console.log('path', path.join(__dirname +
    '/dist/deployonheroku/index.html'))
});
app.listen(process.env.PORT || 8080);
