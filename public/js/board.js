var kanban = kanban || {};
kanban.Board = function() {
   function _initialize() {
      $('.queue-body').sortable({
         revert: true
      }).droppable();
      $('.story').draggable({ 
         connectToSortable: '.queue-body',
         cursor: 'move',
         cursorAt: { top: 0, left: 0 },
         containment: '#kanban-board', 
         revert: 'invalid'
      });
   }
   return { initialize: _initialize };
};

$(function() {
      var board = new kanban.Board();
      board.initialize();
});
