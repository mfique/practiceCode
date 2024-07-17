const express = require('express')
const ejs = require('ejs');
const collection = require('./mongodb');
const app = express();
const Constants = require('buffer')

const bcrypt  = require('bcrypt');
const internal = require('stream');

app.use(express.urlencoded({ extended : false}))

app.listen(5000,()=>{
    console.log("listening on port 5000");
})

app.set('view engine','ejs');

app.get('/home.html',(req,res)=>{
    res.render('home')
})

app.get('/',(req,res)=>{
    res.render("login")
})
app.post('/login.html', async (req,res)=>{
const user = await collection.findOne( {email: req.body.email}).exec();
const verified = await bcrypt.compare(req.body.password, user.password);

if(verified){
    return res.redirect('/home.html');
}else{
    res.status(500).send("internal server error")
}




})





app.get('/login.html',(req,res)=>{    res.render("login")
})
app.post('/signup.html', async (req,res)=>{
    
const salt =  await bcrypt.genSalt(10);
const hash=  await bcrypt.hash( req.body.password,salt);

const data = {
    email :req.body.email,
    password : hash,
    username: req.body.text,
    phonenumber: req.body.Number,
}

await collection.insertMany([data]);

res.redirect("/")
})



app.get('/signup.html',(req,res)=>{
    res.render("signup")
})
app.get('/forgot',(req,res)=>{
    res.render("forgot")
})
app.get('/pricing.html',(req,res)=>{
    res.render("pricing")
});


