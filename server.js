//dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
const burgerRoutes = require('./controllers/burgers_controller.js')

//set up express and ports
const PORT = process.env.PORT || 7777;

const app = express();

//establish static server

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes and set up
app.use(burgerRoutes);

app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));