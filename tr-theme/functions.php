<?php
function load_react_app() {
    $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';
    
    // JavaScript och CSS-filer som kommer från den byggda versionen
    wp_enqueue_script('react-app', $assets_url . 'index.js', array(), null, true);
    wp_enqueue_style('react-app-css', $assets_url . 'index.css', array(), null);
}
add_action('wp_enqueue_scripts', 'load_react_app');
add_filter('acf/rest_api/key', '__return_true');

// Registrera en ny REST API-slutpunkt
add_action('rest_api_init', function () {
    register_rest_route('my-api/v1', '/send-email/', [
        'methods' => 'POST',
        'callback' => 'send_email_callback',
        'permission_callback' => '__return_true', // Säkerställ att alla kan använda den här slutpunkten
    ]);
});

function expose_acf_fields_for_pages() {
    // Lägg till ACF-fält till REST API för alla sidor
    register_rest_field('page', 'acf', array(
        'get_callback' => function($object) {
            return get_fields($object['id']); // Hämta alla ACF-fält för denna sida
        },
        'update_callback' => null,
        'schema' => null,
    ));
}
add_action('rest_api_init', 'expose_acf_fields_for_pages');


?>
