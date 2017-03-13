const SEARCH_URL = 'https://cors.now.sh/http://quotes.stormconsultancy.co.uk/random.json';
// const SEARCH_URL = 'http://quotes.stormconsultancy.co.uk/random.json';

let quote;
let author;

//Render Functions

	const renderQuoteLanding = () => {
	$('.quote').html(quote);
	$('.author').html("- " + author);
	}

//AJAX Logic

const quoteGenerator = (callback) => $.getJSON(SEARCH_URL, callback);

const youveGotQuotes = (response) => {
	quote = response.quote;
	author = response.author;
	renderQuoteLanding(quote, author);
}

//Event Handlers

// $('#loader-overlay').show();
$(document).ready(function(){

	$(window).on('load resize', function(e){
		$('#loader-overlay').show();
		$('#loader-overlay').delay(1000).fadeOut(300);
		$('#top').css('height', $(window).height() * .995);
		$('#about-me').css('height', $(window).height() * .995);

	})

	$('#learn-more').click(function(){
		$('html, body').animate({
			scrollTop: $("#about-me").offset().top
		}, 450);

	});

	$('#see-portfolio').click(function(){
		$('html, body').animate({
			scrollTop: $("#project-1").offset().top
		}, 450);

	});

	$('#back-to-top').click(function(){
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 450);

	});

	// quoteGenerator(youveGotQuotes);	
})

$(document).ready(quoteGenerator(youveGotQuotes));	

// const quotes = {
// 	[
//   {
//     "author": "Robert Sewell",
//     "id": 41,
//     "quote": "If Java had true garbage collection, most programs would delete themselves upon execution.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/41"
//   },
//   {
//     "author": "Jamie Zawinski",
//     "id": 32,
//     "quote": "Linux is only free if your time has no value.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/32"
//   },
//   {
//     "author": "Rick Osborne",
//     "id": 9,
//     "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/9"
//   },
//   {
//     "author": "Jamie Zawinski",
//     "id": 4,
//     "quote": "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/4"
//   },
//   {
//     "author": "Henry Petroski",
//     "id": 35,
//     "quote": "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/35"
//   },
//   {
//     "author": "Bill Sempf",
//     "id": 44,
//     "quote": "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/44"
//   },
//   {
//     "author": "Jeremy S. Anderson",
//     "id": 34,
//     "quote": "There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/34"
//   },
//   {
//     "author": "Ovidiu Platon",
//     "id": 11,
//     "quote": "I don’t care if it works on your machine! We are not shipping your machine!",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/11"
//   },
//   {
//     "author": "Edward V Berard",
//     "id": 2,
//     "quote": "Walking on water and developing software from a specification are easy if both are frozen.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/2"
//   },
//   {
//     "author": "Brian Kernighan",
//     "id": 5,
//     "quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/5"
//   },
//   {
//     "author": "Hofstadter’s Law",
//     "id": 3,
//     "quote": "It always takes longer than you expect, even when you take into account Hofstadter’s Law.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/3"
//   },
//   {
//     "author": "Bjarne Stroustrup",
//     "id": 12,
//     "quote": "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/12"
//   },
//   {
//     "author": "N.J. Rubenking",
//     "id": 25,
//     "quote": "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/25"
//   },
//   {
//     "author": "James O. Coplien",
//     "id": 23,
//     "quote": "You should name a variable using the same care with which you name a first-born child.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/23"
//   },
//   {
//     "author": "E. W. Dijkstra",
//     "id": 14,
//     "quote": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/14"
//   },
//   {
//     "author": "Bill Gates",
//     "id": 6,
//     "quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/6"
//   },
//   {
//     "author": "Phil Karlton",
//     "id": 43,
//     "quote": "There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/43"
//   },
//   {
//     "author": "Mark Gibbs",
//     "id": 36,
//     "quote": "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/36"
//   },
//   {
//     "author": "C. A. R. Hoare",
//     "id": 1,
//     "quote": "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/1"
//   },
//   {
//     "author": "Larry DeLuca",
//     "id": 37,
//     "quote": "I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/37"
//   },
//   {
//     "author": "Mitch Ratcliffe",
//     "id": 13,
//     "quote": "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/13"
//   },
//   {
//     "author": "Donald Knuth",
//     "id": 27,
//     "quote": "Beware of bugs in the above code; I have only proved it correct, not tried it. ",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/27"
//   },
//   {
//     "author": "Fred Brooks",
//     "id": 22,
//     "quote": "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/22"
//   },
//   {
//     "author": "C. A. R. Hoare",
//     "id": 24,
//     "quote": "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/24"
//   },
//   {
//     "author": "Jeff Atwood",
//     "id": 42,
//     "quote": "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.",
//     "permalink": "http://quotes.stormconsultancy.co.uk/quotes/42"
//   }
// ]
// }