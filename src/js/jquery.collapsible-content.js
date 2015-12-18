/**
 * --------------------------------------------------------------------
 * jQuery collapsible plugin
 * Based on: https://github.com/filamentgroup/jQuery-Collapsible-Content
 * See also: http://filamentgroup.com/lab/expand_and_collapse_content_accessibly_with_progressive_enhancement_jquery/
 *
 * --------------------------------------------------------------------
 *
 * Arrow-key and collapsed to begin additions by James Frank, 2011
 *
 * Modified CSS & ARIA support, Karl Dawson June 2014
 * Attach: $('.jsCollapsible').collapsible();
 * Opens next sibling container by default
 * Use with less/components/accessible-content-toggle.less
 *
 * --------------------------------------------------------------------
 */


if (jQuery) {
    (function ($) {
        "use strict";
        $.fn.collapsible = function(collapsed){
            return $(this).each(function( index ){

                //define
                var collapsibleHeading = $(this);
                var collapsibleContent = collapsibleHeading.next();

                //modify markup & attributes
                collapsibleHeading.addClass('jsCollapsed')
                .attr('id', 'button-' + index)
                .attr('aria-controls', 'content-' + index)
                .attr('aria-expanded', false);


                collapsibleContent.addClass('collapsible-content')
                .attr('aria-labelledby', 'button-' + index)
                .attr('id', 'content-' + index)
                .attr('aria-hidden', true);

                //events
                collapsibleHeading
                .bind('collapse', function () {
                    $(this)
                        .addClass('jsCollapsed')
                        .attr('aria-expanded', false)
                        .find('.jsRevealStatus').text('Show');

                    collapsibleContent.slideUp(function(){
                        $(this)
                            .removeAttr('style')
                            .attr('aria-hidden', true);
                    });
                })
                .bind('expand', function(){
                $(this)
                    .removeClass('jsCollapsed')
                    .attr('aria-expanded',true)
                    .find('.jsRevealStatus').text('Hide');

                collapsibleContent
                    .slideDown(function(){
                        $(this)
                            .removeAttr('style')
                            .attr('aria-hidden', false);
                    });
                })
                .click(function(){
                    if ($(this).is('.jsCollapsed')) {
                        $(this).trigger('expand');
                    }
                    else {
                        $(this).trigger('collapse');
                    }
                    return false;
                })
                .keydown(function(e){
                    var code = (e.keyCode ? e.keyCode : e.which);
                    switch (code) {
                        case 13:
                            $(this).click();
                            break;
                        case 39:
                            $(this).trigger('expand');
                            break;
                        case 37:
                            $(this).trigger('collapse');
                            break;
                        default:
                            return true;
                    }
                    return false;
                });

                if(collapsed)
                collapsibleHeading.trigger('collapse');
            });
        };
    }(jQuery));
}
