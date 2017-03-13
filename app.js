let quote;
let author;

const quotes = 
	[
  {
    author: "Robert Sewell",
    quote: "If Java had true garbage collection, most programs would delete themselves upon execution."
  },
  {
    author: "Jamie Zawinski",
    quote: "Linux is only free if your time has no value."
  },
  {
    author: "Rick Osborne",
    quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
  },
  {
    author: "Jamie Zawinski",
    quote: "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems."
  },
  {
    author: "Henry Petroski",
    quote: "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry."
  },
  {
    author: "Bill Sempf",
    quote: "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv."
  },
  {
    author: "Jeremy S. Anderson",
    quote: "There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence."
  },
  {
    author: "Ovidiu Platon",
    quote: "I don’t care if it works on your machine! We are not shipping your machine!"
  },
  {
    author: "Edward V Berard",
    quote: "Walking on water and developing software from a specification are easy if both are frozen."
  },
  {
    author: "Brian Kernighan",
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
  },
  {
    author: "Hofstadter’s Law",
    quote: "It always takes longer than you expect, even when you take into account Hofstadter’s Law."
  },
  {
    author: "Bjarne Stroustrup",
    quote: "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone."
  },
  {
    author: "N.J. Rubenking",
    quote: "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time."
  },
  {
    author: "James O. Coplien",
    quote: "You should name a variable using the same care with which you name a first-born child."
  },
  {
    author: "E. W. Dijkstra",
    quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
  },
  {
    author: "Bill Gates",
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."
  },
  {
    author: "Phil Karlton",
    quote: "There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors."
  },
  {
    author: "Mark Gibbs",
    quote: "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved."
  },
  {
    author: "C. A. R. Hoare",
    quote: "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil."
  },
  {
    author: "Larry DeLuca",
    quote: "I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS."
  },
  {
    author: "Mitch Ratcliffe",
    quote: "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila."
  },
  {
    author: "Donald Knuth",
    quote: "Beware of bugs in the above code; I have only proved it correct, not tried it. "
  },
  {
    author: "Fred Brooks",
    quote: "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer."
  },
  {
    author: "C. A. R. Hoare",
    quote: "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."
  },
  {
    author: "Jeff Atwood",
    quote: "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is."
  }
]

//Render Functions

	const renderQuoteLanding = () => {
	$('.quote').html(quote);
	$('.author').html("- " + author);
	}

// State Manipulation Function

const quoteGenerator = (quoteObject) => {
	let index = Math.floor(Math.random() * quoteObject.length);
	console.log(index);
	quote = quoteObject[index].quote;
	author = quoteObject[index].author;
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

})

$(document).ready(quoteGenerator(quotes));	
