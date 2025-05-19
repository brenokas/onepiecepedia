var express = require('express');
var router = express.Router();

var checagemController = require('../controllers/checagemController');

router.get('/checagemQuiz/:idUsuario', (req, res) => {
	checagemController.checagemQuiz(req, res);
});

router.get('/pegarIdPersonagem/:idUsuario', (req, res) => {
	checagemController.pegarIdPersonagem(req, res);
});

module.exports = router;
