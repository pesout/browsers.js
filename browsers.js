function getCurrentBrowser() {
    var isSafari = /constructor/i.test(window.HTMLElement);
    if (isSafari) return "safari";

    var isFirefox = !!window.sidebar;
    if (isFirefox) return "firefox";

    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome) return "chrome";

    var isIE = window.navigator.msPointerEnabled;
    if (! isIE) isIE = /*@cc_on!@*/false;
    if (isIE) return "internet-explorer";

    var isEdge = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style && !window.navigator.msPointerEnabled;
    if (isEdge) return "edge";

    var isOpera = !window.opera || /opera|opr/i.test(navigator.userAgent);
    if (isOpera) return "opera";

    var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
    if (isOperaMini) return "opera-mini";

    return "undefined";
}
