const express = require('express')
const app = express()
 
// middleware
app.set('view-engine', 'ejs');
app.use(express.static("./public"));


// app routes

// student profile route
app.get('/profile', function (req, res) {
  console.log("you hit the profile route");
  res.render('profile.ejs');
});

// student log hours route (keshari)
app.get('/log-hours', function (req, res) {
  console.log("you hit the log hours route");
  res.send('log hours page here')
});

// log in route (brandon)
app.get('/login', function (req,res){
  console.log('we hit student log in')
  res.send('welcome to student log in page');
});

// registration route (brandon)
app.get('/register', function (req,res){
  console.log('we hit student registration')
  res.send('student register');
});

// admin login route (anthony)
app.get('/admin-login', function (req,res){
  console.log('we hit admin log in')
  res.send('welcome to admin log in page');
});

 // admin registration route (anthony)
app.get('/admin-register', function (req,res){
  console.log('we hit admin registration')
  res.send('admin register page here');
});

// admin dash route (keshari)
app.get('/admin-dash', function (req, res) {
  console.log("you hit the admin dash route");
  res.send('admin dash page here')
})

// admin single student route (keshari)
app.get('/single-student', function (req, res) {
  console.log("you hit the single-student route");
  res.send('admin student view page here')
})


 
app.listen(3000, function () {
    console.log("server is live....");
})
