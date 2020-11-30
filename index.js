const express = require('express');
const app = express();

const port = 3000; 

app.get('/', function(request, response) {
    response.send('Hello Ngan');
});

app.listen(port, function() {
    console.log('Server is running on port ' + port);
})