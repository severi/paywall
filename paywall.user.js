// ==UserScript==
// @name        paywall
// @namespace   hesari
// @description 1. Add the following filter to AddBlock: http://*.snstatic.fi/webstatic/*/desktop-all.js  2. add this script to tampermonkey(chrome)/greasemonkey(ff)
// @include     www.hs.fi/*
// @match       www.hs.fi/*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @author      severi
// @run-at document-start
// ==/UserScript==

hs.paywall=true;

$( document ).ready(function() {
    $("html").removeClass("no-js");
});
