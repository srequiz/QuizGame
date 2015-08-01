// GET /quizes/question

exports.question = function(req, res){

	res.render('quizes/question', {pregunta: 'La Capital de Italia',title: 'Quiz' });
};

// GET /quizes/answer

exports.answer = function(req, res){
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Es Correcto',title: 'Quiz' });
	} else {
		res.render('quizes/answer', {respuesta: 'Es Incorrecto',title: 'Quiz' });
	}


};	