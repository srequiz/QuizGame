var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller'); //añadimos el controlador de preguntas

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', function(req, res) {
  res.render('author', { title: 'Quiz' });
});

module.exports = router;
