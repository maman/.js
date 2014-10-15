/*
 Make Arstechnica more accesible
 + Set Article width
 + Remove ads, I think.
*/

css = "article{float: none !important; width: 100% !important; padding-right: 0 !important; border-right: none !important} ul#recommendations>li{width: 225px; margin: 0 26px 50px 0} ul#recommendations > li a { display: block; } ul#recommendations > li img {width: 100% !important; height: auto !important;} figure.image.center.full-width {width: 100% !important} figure.image img {width: 100% !important; height: auto !important} #article-sidebar {display: none;}"
GM_addStyle(css);