<?php
function load_react_app(): void
{
    $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';

    // JavaScript och CSS-filer som kommer från den byggda versionen
    wp_enqueue_script('react-app', $assets_url . 'index.js', array(), null, true);
    wp_enqueue_style('react-app-css', $assets_url . 'index.css', array(), null);
}
add_action('wp_enqueue_scripts', 'load_react_app');
add_filter('acf/rest_api/key', '__return_true');

// Tillåt CORS för alla domäner
add_action('send_headers', function (): void {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
});

function expose_acf_fields_for_pages(): void
{
    // Lägg till ACF-fält till REST API för alla sidor
    register_rest_field('page', 'acf', array(
        'get_callback' => function ($object): mixed {
            if (function_exists('get_fields')) {
                return get_fields($object['id']); // Hämta alla ACF-fält för denna sida
            }
            return null; // ACF är inte aktivt
        },
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'expose_acf_fields_for_pages');

function expose_acf_fields_for_forebilder(): void
{
    register_rest_field('forebilder', 'acf', array(
        'get_callback' => function ($object): mixed {
            if (function_exists('get_fields')) {
                return get_fields($object['id']); // Hämta alla ACF-fält
            }
            return null; // ACF är inte aktivt
        },
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'expose_acf_fields_for_forebilder');
?>
