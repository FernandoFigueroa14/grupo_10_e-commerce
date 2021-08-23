const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator'); 
const modelUser = require('../models/modelUser');
const { use } = require('../routers/user');

const userController = {
    login: (req, res) => {
        res.render(path.resolve('views/userViews/login'));
    },
    processLogin: (req, res) => {
        let userToLogin = modelUser.findByField('emailUser', req.body.user);

        if(userToLogin){
            let validationPassword = bcryptjs.compareSync(req.body.password, userToLogin.passwordUser);
            if(validationPassword){
                delete userToLogin.passwordUser;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie('emailUser', req.body.user, {maxAge: (1000*60)*60});
                }

                return res.redirect('/profile');
            }else{
                return res.render(path.resolve('views/userViews/login'), {
                    errors: {
                        user: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                })
            }
        }
        
        return res.render(path.resolve('views/userViews/login'), {
            errors: {
                user: {
                    msg: 'No se encuentra este correo electronico en nuestra base de datos'
                }
            }
        })

        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            console.log(resultValidation);
            res.render(path.resolve('views/userViews/login'), {errors: resultValidation.mapped(), oldData: req.body});
        } else {
            res.send('login');
        }
        modelUser.create(req.body);
    },
    register: (req, res) => {
        res.render(path.resolve('views/userViews/register'));
    }, 
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            res.render(path.resolve('views/userViews/register'), {errors: resultValidation.mapped(), oldData: req.body});
        } else {

            let userInDB = modelUser.findByField('emailUser', req.body.emailUser);

            if(userInDB){
                return res.render(path.resolve('views/userViews/register'), {errors: {emailUser: {msg: 'Este correo electronico ya está registrado'}}, oldData: req.body});
            }

            let userToCreate = {
                ...req.body,
                passwordUser: bcryptjs.hashSync(req.body.passwordUser, 10),
                profilepic: req.file.filename
            }

            let userCreated = modelUser.create(userToCreate);
            res.redirect('/login');
        }
    }, 
    recoverPassword: (req, res) => {
        res.render(path.resolve('views/userViews/recoverPassword'));
    },
    cart: (req, res) => {
        res.render(path.resolve('views/carrito'));
    },
    profile: (req, res) => {

        console.log(req.cookies.emailUser);

        res.render(path.resolve('views/userViews/userProfile'), {user: req.session.userLogged});
    },
    logout: (req, res) => {
        res.clearCookie('emailUser');
        req.session.destroy();
        res.redirect('/');
    }
};

module.exports = userController;