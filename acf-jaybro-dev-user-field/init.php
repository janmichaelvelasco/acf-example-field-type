<?php
/**
 * Registration logic for the new ACF field type.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'jaybro_acf_include_acf_field_jaybro_dev_user_field' );
/**
 * Registers the ACF field type.
 */
function jaybro_acf_include_acf_field_jaybro_dev_user_field() {
	if ( ! function_exists( 'acf_register_field_type' ) ) {
		return;
	}

	require_once __DIR__ . '/class-jaybro-acf-acf-field-jaybro-dev-user-field.php';

	acf_register_field_type( 'jaybro_acf_acf_field_jaybro_dev_user_field' );
}
