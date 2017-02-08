const SEARCH_URL = 'https://cors.now.sh/http://quotes.stormconsultancy.co.uk/random.json';
// const SEARCH_URL = 'http://quotes.stormconsultancy.co.uk/random.json';

// Initial State Object
const state = {
	projects: [{
		projectTitle: "Quiz App",
		projectDescription: "User plays a Simpsons trivia game. The user gets a chance to answer 5 questions and receive right or wrong feedback on each selection. The user cannot skip a question without answering. After the 5th question the user receives their final score and the option to start the quiz over.",
		projectStack: ["HTML", "CSS", "JavaScript", "jQuery", "Basic State Management Principles"],
		projectScreenShot: "",
		projectCodeLink: "https://github.com/GatorisGreater/Quiz-App",
		projectDemoLink: "https://gatorisgreater.github.io/Quiz-App/",
		projectImprovements: "Refactoring to ES6 syntax"
	},
	{
		projectTitle: "Weather Challenge",
		projectDescription: "User can see which of 2 cities has better weather. User inputs city#1 in the left-hand input box and submits to get basic current weather information about that city. User inputs city#2 in the right-hand input box to get basic current weather information about that city. The user then selects the `{Who Wins?}` button to run a calculation to determine which city has the better weather and the prevailing city is displayed. If the result is a tie, the user is given a feedback message saying it's a tie.",
		projectStack: ["HTML", "CSS", "Mobile Viewing`/Responsive Grid`", "JavaScript", "jQuery", "RESTful API communication", "Basic State Management Principles"],
		projectScreenShot: "",
		projectCodeLink: "",
		projectDemoLink: "",
		projectImprovements: "Refactoring to ES6 syntax"
	},
	{
		projectTitle: "Repo Tracker",
		projectDescription: "User can track projects and details. This information is stored in a database for future recall.",
		projectStack: ["MongoDB", "Express", "`Node.js`", "`React/Redux`", "HTML", "CSS", "JavaScript", "JSX"],
		projectScreenShot: "",
		projectCodeLink: "",
		projectDemoLink: "",
		projectImprovements: "Refactoring to ES6 syntax"
	},
	]
}

let quote;
let author;

//State Manipulation Functions

//Render Functions

	function renderQuoteLanding(quote, author) {
	$('.quote').html(quote);
	$('.author').html(author);
	}

	function renderProject(state, index) {
		let stackArray = state.projects[index].projectStack.map(tool => {
			return '<li>' + tool + '</li>';
		});
		console.log(state.projects[index].projectCodeLink);
		console.log(state.projects[index].projectDemoLink);
		$('.landing').addClass("hidden");
		$('.body').removeClass("hidden");
		$('.body-details p').html(state.projects[index].projectTitle);
		$('#code a').prop("href", "state.projects[index].projectCodeLink");
		$('#demo').html(state.projects[index].projectDemoLink);
		$('.body-details ul').html(stackArray);
	}

//AJAX Logic

const quoteGenerator = (callback) => $.getJSON(SEARCH_URL, callback);

function callback(response) {
	quote = response.quote;
	author = response.author;
	renderQuoteLanding(quote, author);
}


//Event Handlers

$('#quiz-app').click(function(event){
                event.preventDefault();
                renderProject(state, 0);
});

$('#weather-challenge').click(function(event){
                event.preventDefault();
                renderProject(state, 1);
});

$(document).ready(quoteGenerator(callback));