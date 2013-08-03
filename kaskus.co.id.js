/*
 Kaskus Enhancer
 + site cleanup
 + auto-block ads
 + block specific user post
 + disable avatars on forum pages
 + additional styling
*/

$('.banner-top-wrapper').remove();
$('.kasad-wrapper').remove();
$('.skin').remove();
$('.r-link').remove();
$('.l-link').remove();
$('figure[itemprop=image]').remove();
$('.thread-prevnext').remove();
$('#site-footer').remove();
$('#main-site-nav').parent().remove();
$('#site-search').parent().addClass('grid-9');
$('#hot-cat').remove();
$('.main-site-header').hide();
$('.nav-home').click(function(e){
	e.preventDefault();
	$('.main-site-header').slideToggle({
		'duration': 100
	});
});

// Custom CSS
$('#site-header').css({
	'position': 'fixed',
	'width': '100%',
	'z-index': 99
});
$('#main').css({
	'padding-top': 30
});

// Block specific post
$("div.user-details>a:contains('tanfasfasi')").closest(".hfeed").remove()
