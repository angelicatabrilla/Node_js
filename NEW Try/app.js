const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')


// express app
const app = express();

//CONNECT TO MONGO DB
const dbURI = 'mongodb+srv://netninja:test1234@artcluster.4laoo.mongodb.net/NODE_JS?retryWrites=true&w=majority';
mongoose.connect(dbURI)
// , { userNewUrlParser: true, useUnifiedTopology: true}
  .then((result) =>app.listen(3000))
  .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
 res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
