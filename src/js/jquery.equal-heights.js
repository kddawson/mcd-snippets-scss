/**
 * --------------------------------------------------------------------
 * Equal Height grid items
 * Set the height of items with .jsEqualHeight to match the tallest sibling
 *
 * --------------------------------------------------------------------
 */


if (jQuery) {
    (function ($) {
        "use strict";
        $(document).ready(function () {

            $(window).on('resize', function () {
                equalHeights();
            });

            equalHeights();

            function equalHeights() {
                if (window.matchMedia("(min-width: 992px)").matches) {

                    var elementHeights = $('.jsEqualHeight').map(function () {
                        return $(this).height();
                    }).get();

                    // Math.max takes a variable number of arguments
                    // 'apply' is equivalent to passing each height as an argument
                    var maxHeight = Math.max.apply(null, elementHeights);

                    // Set each height to the max height
                    $('.jsEqualHeight').height(maxHeight);
                } else {
                    $('.jsEqualHeight').css({ "height": "auto" });
                }
            }
        });
    }(jQuery));
}
