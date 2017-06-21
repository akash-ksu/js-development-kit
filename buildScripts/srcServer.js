import express from 'express';
import path from 'path';
import open from 'open';

const app = express();
const port = 3000;

app.get('/', function(req, resp) {
  resp.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log('Error while starting the server');
  } else {
    console.log('Server starting on port : ', port)
    open('http://localhost:' + port);
  }
});
