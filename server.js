//dependencies
const express = require('express');
const exphbs = require('express-handlebars');

//set up express and ports
const PORT = process.env.PORT || 7777;

const app = express();

//establish static server
app.use(express.static('public'));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes and set up
require('./controllers/burgers_controller.js')(app);

app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));