/**
 * --------------------------------------------------------------------
 * ARIA-enhanced navbar
 * Use with less/components/navbar.less
 *
 * --------------------------------------------------------------------
 */


if (jQuery) {
    (function ($) {
        "use strict";
        $('document').ready(function () {
            // ARIA support for menu
            var navMenuItem = $('li.nav__menu-item a');
            var hasSubMenu = $('ul.nav__subnav').prev('a');
            var subMenu = $('ul.nav__menu ul');

            // setup defaults
            navMenuItem.attr('aria-selected', false);
            hasSubMenu.attr('aria-haspopup', true);
            subMenu.attr('aria-expanded', false);

            hasSubMenu.on('click', function (e) {
                e.preventDefault();
                $(this).attr('aria-selected', $(this).attr('aria-selected') == 'true' ? 'false' : 'true');
                $(this).next(subMenu).attr('aria-expanded', $(this).next(subMenu).attr('aria-expanded') == 'true' ? 'false' : 'true');
            });
        });
    }(jQuery));
}
