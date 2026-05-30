
var express = require('express');
var router = express.Router();

var personagemController = require('../controllers/personagemController');

router.get('/nome/:idPersonagemServer', (req, res) => {
	personagemController.nome(req, res);
});

router.get('/funcao/:idPersonagemServer', (req, res) => {
	personagemController.funcao(req, res);
});

router.get('/recompensa/:idPersonagemServer', (req, res) => {
	personagemController.recompensa(req, res);
});

router.get('/descricao/:idPersonagemServer', (req, res) => {
	personagemController.descricao(req, res);
});

module.exports = router;
