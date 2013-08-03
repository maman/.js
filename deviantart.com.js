/*
 Deviantart enhancer
 + auto-redirect outgoing links
*/

$(document).ready(function () {
  if(window.location.href.indexOf("outgoing") > -1) {
    location.assign(location.href.substring(location.href.indexOf('?')+1));
  }
});
