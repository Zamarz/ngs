class question {
constructor(titulo,NManswer){
	this.titulo = titulo ;
	this.NManswer = NManswer;
	this.answer = [];	
}


addTitle(newtitulo){
	this.titulo= newtitulo;

	}
addAnswer(answer){
	this.answer.push(answer)
}
printQUestion(){
	console.log('title',this.titulo);
	console.log('Number of Answers',this.answer.length);
	console.log('Max Number of Answers',this.NManswer);
	console.log('answers',this.answer)
}
}
class singleChoice extends question {
	constructor(){
		super('singleChoice','10');
	}
}
class multipleChoice extends question {
	constructor(){
		super('multipleChoice', '12');
	}
}

const newQuestion = new question();
newQuestion.addTitle('this is a title');
newQuestion.printQUestion();

const newSIngleCHoice = new singleChoice;
newSIngleCHoice.addTitle('juego favorito');
newSIngleCHoice.addAnswer('wow');
newSIngleCHoice.addAnswer('dota2');
newSIngleCHoice.addAnswer('MU');

newSIngleCHoice.printQUestion();