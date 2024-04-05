const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDatabase');

const Admin = require('./admin');

const newAdmin = new Admin({
 username : 'John',
 password: 'thisispassword'
});

newAdmin.save().then((resp)=>{
    console.log(resp);
});

