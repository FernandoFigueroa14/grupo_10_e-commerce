const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const routerMain = require('./routers/main');
const routerUser = require('./routers/user');
const routerProduct = require('./routers/product');
const routerCategories = require('./routers/categories');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.resolve('./public')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(logger('dev'));
app.use(session( {secret: "Acceso seguro"} ));

app.use(routerMain);
app.use(routerUser);
app.use('/product', routerProduct);
app.use(routerCategories);

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT + ', check it! :D');
});

// http://localhost:3000/product/create
// http://localhost:3000/product/delete
// http://localhost:3000/product/edit
