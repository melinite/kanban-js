var kanban = kanban || {};

kanban.goBack = function() {
   history.go(-1);
}

kanban.print = function(obj, pattern) {
   var s = '';
   for (var key in obj) {
      if (!pattern || key.match(pattern)) {
         var value = obj[key];
         s += '[' + key + ']=' + value + '\n';
      }
   }
   alert(s);
}

$(function() {
   $('.cancel').click(function() {
      kanban.goBack();
   });

   $('input:submit, input:button, a.button').button();
});
