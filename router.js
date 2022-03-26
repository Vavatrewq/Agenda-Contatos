const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/logar', loginController.index);
route.post('/login/login', loginController.login);

route.get('/login/cadastro', loginController.cadastro);
route.post('/login/register', loginController.register);

route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contato/logar', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);

route.get('/contato/logar/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);

route.get('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;