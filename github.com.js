/*
 Github Flat
 + Remove gradients
 + Remove repository language graph
*/

css = "*:not(.icon):not(i), *:not(.icon):not(i):after, *:not(.icon):not(i):before {box-shadow: none !important;text-shadow: none !important;background-image: none !important;} *:not(.icon):not(i) {border-color: transparent !important;}";
GM_addStyle(css);
$('.repository-lang-stats-graph').remove();