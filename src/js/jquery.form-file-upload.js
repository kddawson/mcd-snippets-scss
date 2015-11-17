/**
 * --------------------------------------------------------------------
 * JS-enhanced file upload
 * Use with less/elements/form-file-upload.less
 *
 * --------------------------------------------------------------------
 */


if (jQuery) {
    (function ($) {
        "use strict";
        $('document').ready(function () {
            $( '.jsFileUpload' ).each( function() {
                var $input   = $( this ),
                    $label   = $input.next( 'label' ),
                    labelVal = $label.html();

                $input.on( 'change', function( e )
                {
                    var fileName = '';

                    if( this.files && this.files.length > 1 )
                        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                    else if( e.target.value )
                        fileName = e.target.value.split( '\\' ).pop();

                    if( fileName )
                        $label.find( '.jsFileName' ).html( fileName );
                    else
                        $label.html( labelVal );
                });

                // Firefox bug fix
                $input
                .on( 'focus', function(){ $input.addClass( 'fileupload-has-focus' ); })
                .on( 'blur', function(){ $input.removeClass( 'fileupload-has-focus' ); });
            });
        });
    }(jQuery));
}
