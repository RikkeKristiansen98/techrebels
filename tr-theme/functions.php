<?php
function load_react_app()
{
    $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';

    // JavaScript och CSS-filer som kommer från den byggda versionen
    wp_enqueue_script('react-app', $assets_url . 'index.js', array(), null, true);
    wp_enqueue_style('react-app-css', $assets_url . 'index.css', array(), null);
}
add_action('wp_enqueue_scripts', 'load_react_app');
add_filter('acf/rest_api/key', '__return_true');

// Tillåt CORS för alla domäner
add_action('init', function () {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
});
add_action('rest_api_init', function () {
    // Logga alla registrerade REST API routes
    error_log(print_r($GLOBALS['wp_rest_routes'], true));
});

function expose_acf_fields_for_pages()
{
    // Lägg till ACF-fält till REST API för alla sidor
    register_rest_field('page', 'acf', array(
        'get_callback' => function ($object) {
            return get_fields($object['id']); // Hämta alla ACF-fält för denna sida
        },
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'expose_acf_fields_for_pages');



?>