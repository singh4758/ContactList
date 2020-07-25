const express = require('express');

const port = 8000;

const app = express();


app.get('/',function(req,res){
    console.log(req);
    res.end('<h1>Cool It happen</h1>');
});


app.listen(port,function(err){
    if(err){
        console.log(err);
    }

    console.log('Server is Up on port',port);

});