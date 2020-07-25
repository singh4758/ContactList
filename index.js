const express = require('express');

const port = 8000;

const app = express();


app.listen(port,function(err){
    if(err){
        console.log(err);
    }

    console.log('Server is Up on port',port);

});