$(function(){
  var contentDiv = $('.content');

  function addQuestion(question){
    contentDiv.append('<div><div class="col-sm-11">'+question.question+'</div><div class="col-sm-1"><input type="checkbox"/></div></div>');
  }

  $.each(fragenTest1, function( index, value ) {
    addQuestion(value);
  });

  $.each(fragenTest2, function( index, value ) {
    addQuestion(value);
  });
});