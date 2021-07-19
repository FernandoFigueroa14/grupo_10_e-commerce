const express = require('express');
const path = require('path');
const routerMain = require('./routers/main');
const routerUser = require('./routers/user')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve('./public')));
app.use(routerMain);
app.use(routerUser);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT + ', check it! :D');
});