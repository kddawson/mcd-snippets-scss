/**
 * --------------------------------------------------------------------
 * Animate In
 * Deduce whether a content panel is in view and if not apply opacity=0.
 * When the panel scrolls into a view a CSS transition applies opacity=1.
 * Use with scss/elements/_animate-in.scss
 *
 * --------------------------------------------------------------------
 */


if (jQuery) {
    (function ($) {
        "use strict";
        $(document).ready(function () {
            $.fn.visible = function (partial) {

                var $t = $(this),
                    $w = $(window),
                    viewTop = $w.scrollTop(),
                    viewBottom = viewTop + $w.height(),
                    _top = $t.offset().top,
                    _bottom = _top + $t.height(),
                    compareTop = partial === true ? _bottom : _top,
                    compareBottom = partial === true ? _top : _bottom;

                return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

            };

            var win = $(window);
            var allMods = $(".animate-in");

            allMods.each(function (i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("already-visible");
                }
            });

            win.scroll(function (event) {

                allMods.each(function (i, el) {
                    var el = $(el);
                    if (el.visible(true)) {
                        el.addClass("come-in");
                    }
                });

            });
        });
    }(jQuery));
}
