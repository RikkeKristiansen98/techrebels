<?php
function load_react_app() {
    $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';
    
    // JavaScript och CSS-filer som kommer från den byggda versionen
    wp_enqueue_script('react-app', $assets_url . 'index.js', array(), null, true);
    wp_enqueue_style('react-app-css', $assets_url . 'index.css', array(), null);
}
add_action('wp_enqueue_scripts', 'load_react_app');
add_filter('acf/rest_api/key', '__return_true');

function send_email_callback(WP_REST_Request $request) {
    $data = $request->get_json_params();

    // Hämta data från formuläret
    $email = sanitize_email($data['email']);
    $kategori = sanitize_text_field($data['kategori']);
    $titel = sanitize_text_field($data['titel']);
    $alder = sanitize_text_field($data['alder']);
    $beskrivning = sanitize_textarea_field($data['beskrivning']);

    // Säkerhetskontroll
    if (empty($email) || empty($kategori) || empty($titel) || empty($alder) || empty($beskrivning)) {
        return new WP_REST_Response(['message' => 'Alla fält måste fyllas i'], 400);
    }

    // Mottagarens e-post
    $to = "hello@genzconsulting.se"; 
    $subject = "Nytt tips inskickat: " . $titel;
    $headers = array('Content-Type: text/html; charset=UTF-8', 'From: ' . $email);

    // Meddelandets innehåll
    $message = "<h2>Nytt tips inskickat</h2>";
    $message .= "<p><strong>E-post:</strong> {$email}</p>";
    $message .= "<p><strong>Kategori:</strong> {$kategori}</p>";
    $message .= "<p><strong>Titel:</strong> {$titel}</p>";
    $message .= "<p><strong>Ålder:</strong> {$alder}</p>";
    $message .= "<p><strong>Beskrivning:</strong> {$beskrivning}</p>";

    // Skicka e-post
    $sent = wp_mail($to, $subject, $message, $headers);

    if ($sent) {
        return new WP_REST_Response(['message' => 'E-post skickad!'], 200);
    } else {
        return new WP_REST_Response(['message' => 'E-post kunde inte skickas.'], 500);
    }
}

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
