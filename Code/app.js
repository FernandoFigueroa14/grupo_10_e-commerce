const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname,'/public')));

app.get('/' ,function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/home.html' ,function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login.html' ,function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen(3000, ()=>{
    console.log('Servidor activo en el puerto 3000');
});