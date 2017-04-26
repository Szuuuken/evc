var questionHtmlRelation = [];

function markQuestionAs ($question, symbol, cssClass) {
	var $resultSpan = $question.find('.result');
	$resultSpan.empty();
	$resultSpan.append(symbol);
	$question.removeClass('bg-danger bg-success bg-info');
	$question.addClass(cssClass);
}

function markQuestionAsError ($question) {
	markQuestionAs($question, '✗', 'bg-danger');
}

function markQuestionAsSuccsess ($question) {
	markQuestionAs($question, '✓', 'bg-success');
}

function markQUestionAsUnknown ($question) {
	markQuestionAs($question, '?', 'bg-info');
}

function showQuestionResult (question) {
	var $question = $(question);
	var cbCorrect = $question.find('.rbCorrect').is(':checked');
	var cbIncorrect = $question.find('.rbIncorrect').is(':checked');
	var questionHtmlId = $question.attr('id');

	var questionObject = questionHtmlRelation[questionHtmlId];

	if (cbCorrect && questionObject.is_correct || cbIncorrect && !questionObject.is_correct) {
		markQuestionAsSuccsess($question);
	} else if (cbCorrect || cbIncorrect) {
		markQuestionAsError($question);
	}

	if (!cbCorrect && !cbIncorrect) {
		markQUestionAsUnknown($question);
	}
}

function showQuestionAnswer (question) {
	var $question = $(question);
	var $rbCorrect = $question.find('.rbCorrect');
	var $rbIncorrect = $question.find('.rbIncorrect');
	var questionHtmlId = $question.attr('id');

	var questionObject = questionHtmlRelation[questionHtmlId];

	if (questionObject.is_correct) {
		$rbCorrect.prop('checked', true);
	} else {
		$rbIncorrect.prop('checked', true);
	}
}

function addQuestion (question, $fragenlisteDiv) {
	var itemId = 'fragen-liste-item-id-' + question.id;
	var item = '<div class="fragen-liste-item" id="' + itemId + '">';
	item += '<div class="question-details">';
	item += '<div class="text">' + question.question + '</div>';
	item += '<div class="radio-buttons">';
	item += '<label class="radio-inline"><input type="radio" name="' + itemId + '" class="rbCorrect">richtig</label><label class="radio-inline"><input type="radio" name="' + itemId + '" class="rbIncorrect">falsch</label>';
	item += '<span class="result"> </span>';
	item += '</div>';
	item += '</div>';
	item += '<hr/>';
	item += '</div>';
	$fragenlisteDiv.append(item);
	questionHtmlRelation[itemId] = question;
}

/* #### events ####*/

function btnShowAnswersOnClick () {
	var fragenDivs = $('.fragen-liste-item');

	$.each(fragenDivs, function (index, value) {
		showQuestionAnswer(value);
	});
}

function btnShowResultOnClick () {
	var fragenDivs = $('.fragen-liste-item');

	$.each(fragenDivs, function (index, value) {
		showQuestionResult(value);
	});
}

function addQuestionsToSite (fragenFlag) {
	var $fragenlisteDiv = $('.fragenliste');
	$fragenlisteDiv.empty();

	if (fragenFlag === 0 || fragenFlag === 1) {
		$.each(fragenTest1, function (index, value) {
			addQuestion(value, $fragenlisteDiv);
		});
	}

	if (fragenFlag === 0 || fragenFlag === 2) {
		$.each(fragenTest2, function (index, value) {
			addQuestion(value, $fragenlisteDiv);
		});
	}
}

$(function () {
	addQuestionsToSite(0);
	var $fragenSelect = $('#fragen-select');

	$fragenSelect.on('change', function () {
		var selectedFragen = parseInt($fragenSelect.val(), 10);
		addQuestionsToSite(selectedFragen);
	});
});
