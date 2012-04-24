var kanban = kanban || {};
kanban.Board = function() {
   function _initialize() {
      $('.queue-body').droppable({
         drop: _drop
      });
      $('.story').draggable({ 
         cursor: 'move',
         cursorAt: { top: 0, left: 0 },
         containment: '#kanban-board', 
         revert: 'invalid'
      });
   }

   function _drop(event, ui) {
      kanban.print(event.srcElement, /offset/gi);
      kanban.print(event.target, /top|left/gi);
   }

   return { initialize: _initialize };
};

$(function() {
      var board = new kanban.Board();
      board.initialize();
});
