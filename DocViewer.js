// ==UserScript==
// @name         DocViewer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  View Word Documents in your browser
// @author       https://github.com/kareemagha/
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    if (links[i].href.includes(".docx" || ".doc")) {
        links[i].href = 'https://docs.google.com/gview?url=' + links[i].href;
    }
}
