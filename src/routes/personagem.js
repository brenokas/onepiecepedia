var express = require('express');
var router = express.Router();

var personagemController = require('../controllers/personagemController');

router.post('/cadastrar', (req, res) => {
	personagemController.cadastrar(req, res);
});

router.get('/listar', (req, res) => {
	personagemController.listar(req, res);
});

module.exports = router;
