var kanban = kanban || {};
kanban.board = {};

kanban.board.initialize = function() {
   $('.queue-body').sortable();
   $('.story').draggable({ 
      cursor: 'move',
      cursorAt: { top: 0, left: 0 },
      containment: '#kanban-board', 
      revert: "invalid"
   });
   $('.queue-body').droppable();
}

$(function() {
      kanban.board.initialize();
});
