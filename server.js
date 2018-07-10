const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;


var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();

});

hbs.registerHelper('screamIt', (text) =>{
  return text.toUpperCase();
});
app.get('/', (req,res) => {

  // res.send('<h2>Hello Express !</h2>');

  res.render('home.hbs', {
    pageTitle:'HomePage',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome To Our WebSite'
  })
});

app.get('/about',(req,res) => {

res.render('about.hbs',{pageTitle: 'About Page', currentYear: new Date().getFullYear()});

});


app.get('/bad',(req,res) => {
res.send({
  ErrorMessage: 'The Page Not Found'
});

});
app.listen(port, () =>{
  console.log(`Server is up on port ${port}`);
});
