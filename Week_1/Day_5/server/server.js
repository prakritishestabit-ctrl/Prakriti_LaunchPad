const express = require ('express');
const app = express();

const port = 8000;

app.get('/', function(req, res){
    console.log("hello from the server");
    res.send("hi");
});

app.listen(port, () => {
    console.log('server started');
});
