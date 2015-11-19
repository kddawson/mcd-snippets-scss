if (jQuery) {
    (function ($) {
        "use strict";
        $(document).ready(function () {

            $(".box-reveal__content").each(function () {
                $(this).css({ "bottom": -$(this).outerHeight() });
            });

            $(".box-reveal").hover(
                function () {
                    $(this).find(".box-reveal__content").stop(1, 1).animate({ "bottom": 0 });
                }, function () {
                    $(this).find(".box-reveal__content").stop(1, 1).animate({ "bottom": -$(this).find(".box-reveal__content").outerHeight() });
                }
            );
        });
    }(jQuery));
}
