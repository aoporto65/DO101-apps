const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 2 of the app in port 3000.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(3000, function () {
  console.log('Server listening on port 3000...');
});
