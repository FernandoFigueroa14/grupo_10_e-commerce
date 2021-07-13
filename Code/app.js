const express = require('express');
const path = require('path');
const router = require('./routers/main');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve('./public')));
app.use(router);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log('Servidor funcionando en puerto: ' + PORT);
});