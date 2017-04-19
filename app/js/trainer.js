var remainingQuestions = [];
var correctQuestions = [];
var incorrectQuestions = [];
var currentQuestion = null;

function initTrainer () {
	remainingQuestions = [];
	correctQuestions = [];
	incorrectQuestions = [];
	currentQuestion = null;
}

function startTrainerButtonOnClick () {
	initTrainer();
	var $cboTest1 = $('#cbo-test1');
	var $cboTest2 = $('#cbo-test2');

	if ($cboTest1.is(':checked')) {
		$.merge(remainingQuestions, fragenTest1);
	}

	if ($cboTest2.is(':checked')) {
		$.merge(remainingQuestions, fragenTest2);
	}

	$('#question-selection').addClass('hidden');
	$('#question-box').removeClass('hidden');
	$('#question-buttons').removeClass('hidden');
	$('#question-statistics').removeClass('hidden');
	showNextQuestion();
}

function showNextQuestion () {
	if(remainingQuestions.length > 0){
		currentQuestion = remainingQuestions.pop();
		$('#question-box .well').text(currentQuestion.question);
	}else{
		currentQuestion = null;
		showFinish();
	}
	updateQuestionStatistics();
}

function showSwal (title, text, type, callback) {
	swal(
		{
			title: title,
			text: text,
			type: type
		},
		callback);
}

function evaluateCurrentQuestion (userInput) {
	if(currentQuestion !== null) {
		if(userInput === currentQuestion.is_correct) {
			showSwal('korrekt', 'Du hast die Frage richtig beantwortet', 'success', function () {
				correctQuestions.push(currentQuestion);
				showNextQuestion();
			});
		}
		else{
			showSwal('Oops!', 'Du hast die Frage falsch beantwortet!', 'error', function () {
				incorrectQuestions.push(currentQuestion);
				showNextQuestion();
			});
		}
	}
}

function updateQuestionStatistics () {
	var answerdQuestionCount = correctQuestions.length + incorrectQuestions.length;
	var questionCount = remainingQuestions.length + answerdQuestionCount;

	if(currentQuestion !== null) {
		questionCount += 1;
	}

	$('#question-count').text(answerdQuestionCount + '/' + questionCount);
	$('#correct-count').text(correctQuestions.length);
	$('#incorrect-count').text(incorrectQuestions.length);
}

function showFinish () {
	$('#fin-richtig-count').text(correctQuestions.length);
	$('#fin-falsch-count').text(incorrectQuestions.length);
	$('#fin-gesammt-count').text(correctQuestions.length + incorrectQuestions.length);

	$('#question-finish').removeClass('hidden');
	$('#question-box').addClass('hidden');
	$('#question-buttons').addClass('hidden');
	$('#question-statistics').addClass('hidden');

	if (incorrectQuestions.length <= 0) {
		$('#btn-retry-incorrect').addClass('hidden');
	} else {
		$('#btn-retry-incorrect').removeClass('hidden');
	}
}

function btnRetryIncorrectOnClick () {
	remainingQuestions = incorrectQuestions;
	incorrectQuestions = [];
	correctQuestions = [];
	currentQuestion = null;

	$('#question-selection').addClass('hidden');
	$('#question-finish').addClass('hidden');
	$('#question-box').removeClass('hidden');
	$('#question-buttons').removeClass('hidden');
	$('#question-statistics').removeClass('hidden');
	showNextQuestion();
}

function btnRestOnClick () {
	$('#question-selection').removeClass('hidden');
	$('#question-finish').addClass('hidden');
	$('#question-box').addClass('hidden');
	$('#question-buttons').addClass('hidden');
	$('#question-statistics').addClass('hidden');
}

$(function () {
	$('#start-trainer-btn').on('click', startTrainerButtonOnClick);

	$('#btn-correct').on('click', function () {
		evaluateCurrentQuestion(true);
	});

	$('#btn-incorrect').on('click', function () {
		evaluateCurrentQuestion(false);
	});

	$(document).on('keydown', function (e) {
		switch (e.which) {
			case 82: // r
				evaluateCurrentQuestion(true);
				break;
			case 70: // f
				evaluateCurrentQuestion(false);
				break;
		}
	});

	$('#btn-retry-incorrect').on('click', btnRetryIncorrectOnClick);
	$('#btn-reset').on('click', btnRestOnClick);
});