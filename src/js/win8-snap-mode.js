/**
 * --------------------------------------------------------------------
 * Windows 8 Snap Mode
 * See: http://mattstow.com/responsive-design-in-ie10-on-windows-phone-8.html#update-2013015
 * Use with scss/elements/_win8-snap-mode.scss
 *
 * --------------------------------------------------------------------
 */


(function() {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();
