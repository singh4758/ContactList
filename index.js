const express = require('express');
const path = require('path');
const { urlencoded } = require('express');

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const port = 8000;

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactlist = [

];


app.get('/',function(req,res){

    Contact.find({},function(err,contact){
        if(err){
            console.log('Error to fetch contact',err);
            return;
        }

        return res.render('home',{
            title : 'Contact List',
            heading : 'My Contact List',
            contact_list : contact
        });
    });
});


app.post('/create-contact',function(req,res){
    Contact.create({
        name : req.body.name,
        phone : req.body.phone
    },function(err,newContact){
        if(err){
            console.log('error in creating contact',err);
            return;
        }
        console.log('new contact created');
    });
    return res.redirect('back');
});

app.get('/delete-contact',function(req,res){
    let id = req.query.id;
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting contact',err);
        }
        res.redirect('back');
    });
});


app.listen(port,function(err){
    if(err){
        console.log('ther is an err',err);
    }

    console.log('Server is Up on port',port);

});