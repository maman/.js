/*
 Speedhunters
 + New fonts
 + Better layout
*/

/* Embed Google Fonts*/
$("head").append("<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,700italic' rel='stylesheet' type='text/css'>");
$("head").append("<link href='http://fonts.googleapis.com/css?family=Abril+Fatface' rel='stylesheet' type='text/css'>");
/* Custom CSS */
css = " * { font-family: Lato !important } body {background: #ddd !important} section.top-nav { background: transparent !important } section.top-nav .branding { background: transparent !important; padding: 0 0 20px 0 !important; } .dark-grad, section.top-nav .menu-strip { background: #222; } h1.entry-title { font-family: 'Abril Fatface' !important; } .story-meta dd a { font-family: 'Lato' !important; text-transform: uppercase; font-weight: 700; letter-spacing: 3px; font-size: 18pt; } section.side-bar h4 { font-family: 'Abril Fatface' !important; } .pelette h2 a { font-family: 'Lato' !important; font-size: 14pt; } .pellete .date, .pellete-second .date, .pellete .comments, .pellete-second .comments { font-family: 'Lato' !important; font-size: 10pt; font-weight: 700; } nav.top-bar.chapter-nav { display: none; } /* .top-bar .top-bar-section a { font-family: 'Lato' !important; font-size: 11pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0; } */ article p { font-family: 'Lato' !important; font-size: 16pt !important; } .post section.content .chapter-block:first-child p:nth-of-type(1) { font-size: 18pt !important; } footer.end-bloc { display: none; } .sitcky-nav {display: none !important;}";
GM_addStyle(css);
