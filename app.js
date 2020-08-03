window.addEventListener('load', ()=> {
	const answers_holder = document.querySelector(".answers-holder")
	const submit = document.querySelector(".submit");
	const correctAlert = document.querySelector(".notify-correct")

	let answers = document.querySelectorAll(".answer");

	submit.addEventListener('click', () => {
		if (submit.innerText == "SUBMIT"){
			let allanswers = document.querySelectorAll(".answer");
			allanswers.forEach((element, index) => {
				if(element.classList.contains("checked") && (element.classList.contains("correct"))){
					element.style.background = '#8bb44d'
					element.addEventListener("mouseover", function() {
				    element.style.backgroundColor = "#7ba45d";
					});
				    
					element.addEventListener("mouseout", function() {
				    element.style.backgroundColor = "#8bb44d";
					});
					submit.innerText = "Next";

				} else if ((element.classList.contains("checked")) && !(element.classList.contains("correct"))){
					element.style.background = '#e60000'
					element.addEventListener("mouseover", function() {
				    element.style.backgroundColor = "#b30000";
					});
				    
					element.addEventListener("mouseout", function() {
				    element.style.backgroundColor = "#e60000";
					});

					allanswers.forEach((element, index) => {
						if((element.classList.contains("correct"))){
							console.log("HOORAY THIS WORKS!!!!!!!!");
							element.style.background = '#8bb44d'
							element.addEventListener("mouseover", function() {
						    element.style.backgroundColor = "#7ba45d";
							});
						    
							element.addEventListener("mouseout", function() {
						    element.style.backgroundColor = "#8bb44d";
							});
							submit.innerText = "Next";

						}
					})
				}

		})} else if (submit.innerText == 'NEXT'){
				questionNumber++;
				showQuestion();
				submit.innerText = "Submit";
				
			}
	})

	const questions = [
	{

		question:'When did Soviet Union collape?',
		answers:[
			{text: 'In 1995', correct: false},
			{text: 'In 1991', correct: true},
			{text: 'In 1900', correct: false},
			{text: 'In 1999', correct: false}

		]
	},
	{
		question:'Which country has the largest population?',
		answers:[
			{text: 'India', correct: false},
			{text: 'Russia', correct: false},
			{text: 'Canada', correct: false},
			{text: 'China', correct: true}

		]
	},
	{
		question:'What is the capital of Romania?',
		answers:[
			{text: 'Bucharest', correct: true},
			{text: 'Saipan', correct: false},
			{text: 'Khartoum', correct: false},
			{text: 'Tiraspol', correct: false}

		]
	},
	{
		question:'Which is the only continent that covers four hemispheresn?',
		answers:[
			{text: 'North America', correct: false},
			{text: 'South America', correct: false},
			{text: 'Africa', correct: true},
			{text: 'Australlia', correct: false}

		]
	}
	]

	console.log(questions)

	// Random order of questions
	let shuffledQuestions = questions.sort(() => Math.random()-0.5);
	let questionNumber = 0;

	


	const showQuestion = () => {
		answers_holder.innerHTML = null;
		document.querySelector(".qtext").innerText = questions[questionNumber].question;
		questions[questionNumber].answers.forEach((element, index) => {
			let button = document.createElement("button");
			button.innerText = questions[questionNumber].answers[index].text;
			button.classList.add("answer");
			console.log(questions[questionNumber].answers[index].correct)
			if (questions[questionNumber].answers[index].correct) {
				console.log(index)
				button.classList.add("correct");
			}
			
			answers_holder.appendChild(button);
			let allanswers = document.querySelectorAll(".answer");


			allanswers.forEach((element, index) => {
				element.addEventListener("click", () => {
				
				allanswers.forEach((element, index) => {
					element.classList.remove("checked");
				})
				element.classList.add("checked");
				})
			});
				
				
		});
	}

	showQuestion();
})



























