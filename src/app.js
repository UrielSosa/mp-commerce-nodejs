require('dotenv').config();

const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

const mainRouter = require('./routes/MainRouter');

/*Config*/
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));


/*Routes*/
app.use('/', mainRouter);



 
app.listen(port, () => (console.log('El server corre en el puerto 3000')));