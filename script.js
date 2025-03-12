// ==UserScript==
// @name         Freecodecamp No Popup
// @namespace    https://github.com/shin-tran
// @version      0.2
// @description  Removes the donate popup on FreeCodeCamp
// @author       ngocshintran
// @match        https://www.freecodecamp.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org
// @grant        GM_addStyle
// @supportURL   https://github.com/shin-tran/freecodecamp-no-popup/issues
// @downloadURL https://raw.githubusercontent.com/shin-tran/freecodecamp-no-popup/refs/heads/main/script.js
// @updateURL https://raw.githubusercontent.com/shin-tran/freecodecamp-no-popup/refs/heads/main/script.js
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
