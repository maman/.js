/*
 Hide google toolbar like chrome quicksearch, and remove w3school from search results
*/
// $('#mngb').remove();
window.setInterval(function(){var maxI=50,ii=0;var w3links=document.querySelectorAll("a[href^='http://www.w3schools.com']");for(var i=0;i<w3links.length;i++){var resultItem=w3links[i].parentElement;do resultItem=resultItem.parentElement;while(resultItem!=null&&(ii++<maxI&&!(resultItem.nodeName.toLowerCase()=="li"&&resultItem.classList.contains("g"))));if(resultItem!=null)resultItem.remove()}},500);