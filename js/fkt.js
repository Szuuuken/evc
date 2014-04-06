asked_quenstions = new Array();

not_asked_qeustions = [
	{question : "Die sphärische Aberration führt zu Farbverfälschungen im Bild.", correct: false},
	{question : "Je größer die Brennweite, desto kleiner erscheinen Objekte im Bild", correct: true}
];

function get_random_quenstion(){
	question_id = Math.floor(Math.random() * not_asked_qeustions.length)
	return not_asked_qeustions[question_id]
}

function btn_go() {
   window.location = "fragen.html";
}