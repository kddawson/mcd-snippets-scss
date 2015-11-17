/**
 * --------------------------------------------------------------------
 * Flyout panel
 * Use with less/components/panel-flyout.less
 *
 * --------------------------------------------------------------------
 */


if (jQuery) {
    (function ($) {
        "use strict";
        $('document').ready(function () {
            $('#panelFlyout').attr('aria-hidden', 'true');

            $('#flyoutToggle').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('flyout-open');
                $('#panelFlyout').toggleClass('panel-open');
                $('#panelFlyout').attr('aria-hidden', $('#panelFlyout').attr('aria-hidden') == 'true' ? 'false' : 'true');
            });

            // Close the flyout if we tab through any focusable content
            $('body').focusin(function () {
                $('#flyoutToggle').removeClass('flyout-open');
                $('#panelFlyout').removeClass('panel-open').attr('aria-hidden', 'true');
                $('#panelFlyout').focusin(function (e) {
                    e.stopPropagation();
                });
            });
        });
    }(jQuery));
}
