var express = require('express');
var router = express.Router();

var dashboardController = require('../controllers/dashboardController');

router.get('/qtdEscolhasPersonagem', (req, res) => {
	dashboardController.qtdEscolhasPersonagem(req, res);
});

module.exports = router;
