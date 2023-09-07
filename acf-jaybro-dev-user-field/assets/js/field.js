/**
 * Included when jaybro_dev_user_field fields are rendered for editing by publishers.
 */
 ( function( $ ) {
	function initialize_field( $field ) {
		/**
		 * $field is a jQuery object wrapping field elements in the editor.
		 */
		console.log( 'jaybro_dev_user_field field initialized' );
	}

	if( typeof acf.add_action !== 'undefined' ) {
		/**
		 * Run initialize_field when existing fields of this type load,
		 * or when new fields are appended via repeaters or similar.
		 */
		acf.add_action( 'ready_field/type=jaybro_dev_user_field', initialize_field );
		acf.add_action( 'append_field/type=jaybro_dev_user_field', initialize_field );
	}
} )( jQuery );
