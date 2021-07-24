const express = require('express');
const path = require('path');
const routerMain = require('./routers/main');
const routerUser = require('./routers/user');
const routerProduct = require('./routers/product');
const routerCategories = require('./routers/categories');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.resolve('./public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(routerMain);
app.use(routerUser);
app.use('/product', routerProduct);
app.use(routerCategories);

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT + ', check it! :D');
});