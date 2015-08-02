var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(null, null, null, 
  { dialect:  "sqlite", storage: "quiz.sqlite"}      
);

// Importar definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

// exportar definicion de la tabla Quiz
exports.Quiz = Quiz; 

// sequelize.sync() inicializa tabla de preguntas en DB
sequelize.sync().success(function() {
  // success(..) ejecuta el manejador una vez creada la tabla
  Quiz.count().success(function (count){
    if(count === 0) {   // la tabla se inicializa solo si está vacía
        Quiz.create({pregunta: 'Capital de Italia',
                    respuesta: 'Roma'}) // estos quizes pertenecen al usuario pepe (2)
        .success(function(){console.log('Base de datos (tabla quiz) inicializada')});
          };
    });
});