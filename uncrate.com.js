$('#left>:not(div[id^=entry-], div.more)').remove();
$('#right').remove();
$('#left').css('width', '100%');
$('#left>div[id^=entry-] img').css({
	'width': '100%',
	'height': 'auto'
})