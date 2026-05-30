var express = require("express");
var router = express.Router();

var kpiController = require('../controllers/kpiController');

router.get('/tempoDeConclusao/:idUsuario', (req, res) => {
  kpiController.tempoDeConclusao(req, res);
});

router.get(`/mediaTempodeConclusao`, (req, res) => {
  kpiController.mediaTempodeConclusao(req, res);
});

router.get(`/personagemMaisEscolhido`, (req, res) => {
  kpiController.personagemMaisEscolhido(req, res);
});

module.exports = router;