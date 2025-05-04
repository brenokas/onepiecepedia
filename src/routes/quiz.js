var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quizController');

//registrando o início do quiz
router.post('/inicio', (req, res) => {
	quizController.inicio(req, res);
});

//registrando o final do quiz
router.post('/final', (req, res) => {
	quizController.final(req, res);
});

router.get('/listar', (req, res) => {
	quizController.listar(req, res);
});

module.exports = router;
