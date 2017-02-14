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
		projectDemoLink: "https://gatorisgreater.github.io/weather-challenge-app/",
		projectImprovements: "Refactoring to ES6 syntax"
	},
	{
		projectTitle: "Repo Tracker",
		projectDescription: "User can track projects and details. This information is stored in a database for future recall.",
		projectStack: ["MongoDB", "Express", "`Node.js`", "`React/Redux`", "HTML", "CSS", "JavaScript", "JSX"],
		projectScreenShot: "",
		projectCodeLink: "",
		projectDemoLink: "https://bootcamp-bit.herokuapp.com/",
		projectImprovements: "Refactoring to ES6 syntax"
	},
	],
	personalStory: "I spent the first 10 years of my career at one company. I rode up the lifecycle wave as our product was in demand and rode back down the wave as preferences changed. The consumers of tomorrow are tech savvy. The companies of tomorrow are developing solutions to meet increasingly tech oriented problems. I want to help you get there. Thanks for taking a look.   - Will",
	techStack: ["HTML", "CSS", "JavaScript/ECMAScript 2015", "jQuery", "React", "Redux", "Express", "Node.js", "MongoDB", "Mongoose", "PostgreSQL", "--", "Husband", "Son", "Brother", "Friend"]
}

let quote;
let author;

//State Manipulation Functions

		let story = state.personalStory;

		let techStackArray = state.techStack.map(tool => {
			return '<li>' + tool + '</li>';
		});

//Render Functions

	function renderQuoteLanding() {
	$('.quote').html(quote);
	$('.author').html(author);
	}

	function renderAboutMe() {
	$('.quote, .author, .about-my-skills, .col-6').addClass("hidden");
	$('.landing, .about-me').removeClass("hidden");
	$('.about-me').html(story);
	}

	function renderTechStack() {
	$('.quote, .author, .about-me, .col-6').addClass("hidden");
	$('.landing, .about-my-skills').removeClass("hidden");
	$('.about-my-skills').html(techStackArray);
	}

	function renderProject(state, index) {
		let stackArray = state.projects[index].projectStack.map(tool => {
			return '<li>' + tool + '</li>';
		});
		console.log(state.projects[index].projectCodeLink);
		console.log(state.projects[index].projectDemoLink);
		$('.landing').addClass("hidden");
		$('.body, .col-6').removeClass("hidden");
		$('.body-details .project-name').html(state.projects[index].projectTitle);
		$('#code a').prop("href", "state.projects[index].projectCodeLink");
		$('#demo').html(state.projects[index].projectDemoLink);
		$('.body-details .project-description').html(state.projects[index].projectDescription);
		$('.body-details ul').html(stackArray);
	}

//AJAX Logic

const quoteGenerator = () => $.getJSON(SEARCH_URL, youveGotQuotes);

function youveGotQuotes(response) {
	quote = response.quote;
	author = response.author;
	renderQuoteLanding(quote, author);
}


//Event Handlers

$('#about-my-skills').mousedown(function(event){
                event.preventDefault();
                renderTechStack();
});

$('#about-me').click(function(event){
                event.preventDefault();
                renderAboutMe();
});

$('#quiz-app').click(function(event){
                event.preventDefault();
                renderProject(state, 0);
});

$('#weather-challenge').click(function(event){
                event.preventDefault();
                renderProject(state, 1);
});

$(document).ready(quoteGenerator());