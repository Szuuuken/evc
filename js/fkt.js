function get_random_quenstion(){
	question_id = 0;
	if(not_asked_qeustions.length >= 1){
		question_id = Math.floor((Math.random() * not_asked_qeustions.length ) % not_asked_qeustions.length)
	}

	current_question = not_asked_qeustions[question_id];
	asked_quenstions.push(current_question);

	not_asked_qeustions.splice(question_id,1);

	return current_question;
}

function btn_go() {
   window.location = "fragen.html";
}

function show_next_question(){
	$('#answer_box').removeClass('correct')
	$('#answer_box').removeClass('incorrect')
	$('#btn_wrong').removeClass('hidden')
	$('#btn_right').removeClass('hidden')
	$('#next_question_box').addClass('hidden');
	$('#correct').addClass('hidden');
	$('#incorrect').addClass('hidden');
	show_random_question();
}

function show_random_question(){
	if(not_asked_qeustions.length > 0){
		question = get_random_quenstion();
		$("#question_box").text(question.question)
	}else{
		alert('keine Fragen mehr');
	}
}

function awnser_button(button){
	if((button == "btn_right" && current_question.correct == true) || (button == "btn_wrong" && current_question.correct == false)){
		$('#answer_box').addClass('correct')
		$('#correct').removeClass('hidden');
	}else{
		$('#incorrect').removeClass('hidden');
		$('#answer_box').addClass('incorrect')
	}

	if(current_question.correct == true){
		$('#btn_wrong').addClass('hidden');
	}else{
		$('#btn_right').addClass('hidden');
	}

	$('#next_question_box').removeClass('hidden');
}

$(window).load(show_random_question);