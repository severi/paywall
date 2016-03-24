// ==UserScript==
// @name        paywall
// @namespace   hesari
// @description add this script to tampermonkey(chrome)/greasemonkey(ff)
// @include     www.hs.fi/*
// @match       www.hs.fi/*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @author      severi
// @run-at      document-end
// @downloadURL https://github.com/severi/paywall/blob/master/paywall.user.js
// @supportURL  https://github.com/severi/paywall
// @source      https://github.com/severi/paywall
// ==/UserScript==

$( document ).ready(function() {
    $("#article-text p").css("display", "block");
    $("div#content div").css("display", "block");
    $("#article-speaker-content").css("display", "none");
    $("#paywall").css("display", "none !important");
    $("#paywall *").css("display", "none !important");
});
