var should = require('should');

var BoardController = require('../../lib/controllers/boardController');

var boardModelStub = {};
var testObject = new BoardController(boardModelStub);

describe('BoardController', function() {
   describe('#index', function() {
      it('should display the board/index view', function() {
         var _view;
         var res = {
            render: function(view) {
               _view = view;
            }
         };

         testObject.index({}, res);

         _view.should.equal('board/index');
      });
   });
});

