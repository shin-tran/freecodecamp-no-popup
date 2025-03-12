// ==UserScript==
// @name         Freecodecamp No Popup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the donate popup on FreeCodeCamp
// @author       ngocshintran
// @match        www.freecodecamp.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org
// @grant        GM_addStyle
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver((mutations, obs) => {
        const test = document.getElementById("headlessui-portal-root");
        if (test) {
            test.remove();
            obs.disconnect();
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
})();
