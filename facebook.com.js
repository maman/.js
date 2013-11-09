/*
 Facebook HD Photos from @holman, and remove sidebar because I use messages.app to chat
*/

css="#blueBar {margin-left: 0 !important;} ._4_37 {margin-left: 0;} .fbChatSidebar {display: none !important} /* div[role='complementary'] {display: none !important} */";
GM_addStyle(css);

hd_download = $('a.fbPhotosPhotoActionsItem[href*=_o\\.jpg]')

if (hd_download.attr('href')) {
  $('#fbPhotoImage').attr('src', hd_download.attr('href'))
}