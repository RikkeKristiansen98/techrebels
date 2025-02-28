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


add_action('rest_api_init', function () {
    register_rest_route('my-api/v1', '/send-email/', array(
        'methods' => 'POST',
        'callback' => 'send_email_callback',
        'permission_callback' => '__return_true',
    ));
});

function send_email_callback(WP_REST_Request $request) {
    $data = $request->get_json_params();

    if (empty($data)) {
        return new WP_REST_Response(['message' => 'Inga data mottagna.'], 400);
    }

    $to = 'hello@genzconsulting.com'; // Replace with your email
    $subject = 'Nytt formulärmeddelande';
    $message = "E-post: " . sanitize_email($data['email']) . "\n";
    $message .= "Kategori: " . sanitize_text_field($data['kategori']) . "\n";
    $message .= "Titel: " . sanitize_text_field($data['titel']) . "\n";
    $message .= "Ålder: " . sanitize_text_field($data['alder']) . "\n";
    $message .= "Beskrivning: " . sanitize_textarea_field($data['beskrivning']) . "\n";

    $headers = array('Content-Type: text/plain; charset=UTF-8');

    if (wp_mail($to, $subject, $message, $headers)) {
        return new WP_REST_Response(['message' => 'E-post skickad!'], 200);
    } else {
        return new WP_REST_Response(['message' => 'E-post kunde inte skickas.'], 500);
    }
}

?>