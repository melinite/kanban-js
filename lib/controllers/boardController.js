
var BoardController = function(boardModel){
   function index(req, res) {
      res.render('board/index');
   }
   return {
      index: index
   };
};

module.exports = BoardController
