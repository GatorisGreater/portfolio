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

		// $(document).click(function(e){
		// 	$('.icons').append('<div class="stamp" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
		// });




$('#loader-overlay').show();
$(document).ready(function(){

	$(window).on('load resize', function(e){
		$('#top').css('height', $(window).height() * .995);
		$('#about-me').css('height', $(window).height() * .995);
		$('#loader-overlay').delay(1000).fadeOut(300);
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

$(document).ready(quoteGenerator(youveGotQuotes));