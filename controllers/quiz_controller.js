var models = require('../models/model.js');

// autoload - Factoriza el código si la ruta contiene :quizId
exports.load=function(req, res, next, quizId){
	models.Quiz.find().(quizId).then
	(function(quiz){
		if (quiz) {
			req.quiz=quiz;
			next();
		} else { next(new Error('No existe quizId='+ quizId)); }
     }
	).catch(function(erro) {next (error);});
};

//GET /quizes

exports.index=function(req, res){
	models.Quiz.findAll().then(function(quizes){

		res.render('quizes/index.ejs', {quizes: quizes});
	})
};

// GET /quizes/:id

exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
	res.render('quizes/show', {quiz: req.quiz});
	})
};

// GET /quizes/:id/answer

exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
	if (req.query.respuesta === req.quiz.respuesta){
		res.render('quizes/answer', {quiz: req.quiz, respuesta: 'Es Correcto',title: 'Quiz' });
	} else {
		res.render('quizes/answer', {quiz: req.quiz, respuesta: 'Es Incorrecto',title: 'Quiz' });
	}
})

};	