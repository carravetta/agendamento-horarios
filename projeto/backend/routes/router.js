var express = require('express');
var agendaController = require('../controllers/agendaController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/agendamentos', agendaController.getAll);

router.post('/agendamentos', agendaController.adicionarData);

module.exports = router;
