$('.banner-top-wrapper').remove();
$('.kasad-wrapper').remove();
$('.skin').remove();
$('.r-link').remove();
$('.l-link').remove();
$('figure[itemprop=image]').remove();
$('.thread-prevnext').remove();
$('#site-footer').remove();
$('#site-header').css({
	'position': 'fixed',
	'width': '100%',
	'z-index': 99
});
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
$('#main').css({
	'padding-top': 30
});
$("div.user-details>a:contains('tanfasfasi')").closest(".hfeed").remove()
