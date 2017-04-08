var questionHtmlRelation = new Array();

function markQuestionAs($question, symbol, cssClass){
  var $resultSpan = $question.find('.result');
  $resultSpan.empty();
  $resultSpan.append(symbol);
  $question.removeClass("error,succsess,unkown");
  $question.addClass(cssClass);
}

function markQuestionAsError($question){
  markQuestionAs($question, '✗', 'bg-danger');
}

function markQuestionAsSuccsess($question){
  markQuestionAs($question, '✓', 'bg-success');
}

function markQUestionAsUnknown($question){
  markQuestionAs($question, '?', 'bg-info');
}

function showQuestionResult(question){
  var $question = $(question);
  var cbCorrect = $question.find('.rbCorrect').is(':checked');
  var cbIncorrect = $question.find('.rbIncorrect').is(':checked');
  var questionHtmlId = $question.attr('id');

  var questionObject = questionHtmlRelation[questionHtmlId];

  if(cbCorrect && questionObject.is_correct || cbIncorrect && !questionObject.is_correct)
    markQuestionAsSuccsess($question);

  else if(cbCorrect || cbIncorrect)
    markQuestionAsError($question);

  else
    markQUestionAsUnknown($question);
}

function btnShowResultOnClick(){
  var fragenDivs = $('.fragen-liste-item');

  $.each(fragenDivs, function(index, value){
    showQuestionResult(value);
  })
}

$(function(){
  var fragenlisteDiv = $('.fragenliste');

  function addQuestion(question){
    var itemId = 'fragen-liste-item-id-' + question.id;
    var item = '<div class="fragen-liste-item" id="' + itemId + '">';
    item += '<div class="col-sm-10">' + question.question + '</div>';
    item += '<div class="col-sm-2">';
    item += '<label class="radio-inline"><input type="radio" name="'+itemId+'" class="rbCorrect">richtig</label><label class="radio-inline"><input type="radio" name="'+itemId+'" class="rbIncorrect">falsch</label>';
    item += '<span class="result"></span>';
    item += '</div>';
    item += '<div class="col-sm-12"><hr/></div>';
    item += '</div>';
    fragenlisteDiv.append(item);
    questionHtmlRelation[itemId] = question;
  }

  $.each(fragenTest1, function( index, value ) {
    addQuestion(value);
  });

  $.each(fragenTest2, function( index, value ) {
    addQuestion(value);
  });
});