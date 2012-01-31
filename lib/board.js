var Data = require('./data');
var BoardModel = require('./models/boardModel');
var BoardController = require('./controllers/boardController');

var boardController = new BoardController(new BoardModel(new Data()));

exports.index = boardController.index;
