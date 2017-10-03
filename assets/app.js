$('#start').on('click',function(){
	$('#start').remove();
	for(var i = 0; i<questions.length;i++){
		$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
		 for (var j=0; j<questions[i].answers.length;j++){
			 $("#subwrapper").append("<input type='radio' name= 'question-'"+i+"' value = ' "+questions[i].answers[j]+"'>"+questions[i].answers[j])
		}
	}
})

var questions = [{
	question: "Who was known as the King of Pop?",
	answers: ["Justin Timberlake", "Elvis Presley", "Jay-Z", "Michael Jackson", "Usher"],
	correctAnswer: "Michael Jackson"
}, {
	question: "Which team drafted Kobe Bryant?",
	answers: ["Miami Heat", "LA Lakers", "Charlotte Hornets", "LA Clippers", "Charlotte Bobcats"],
	correctAnswer: "Charlotte Hornets"
}, {
	question: "Which team won the NBA finals in 2011?",
	answers: ["LA Lakers", "Miami Hornets", "Dallas Mavericks", "Boston Celtics", "trick question"],
	correctAnswer:"Dallas Mavericks"
}];

