<?php
function load_react_app() {
    $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';
    
    // JavaScript och CSS-filer som kommer från den byggda versionen
    wp_enqueue_script('react-app', $assets_url . 'index.js', array(), null, true);
    wp_enqueue_style('react-app-css', $assets_url . 'index.css', array(), null);
}
add_action('wp_enqueue_scripts', 'load_react_app');
add_filter('acf/rest_api/key', '__return_true');

add_action('rest_api_init', function () {
    register_rest_route('my-api/v1', '/send-email/', [
        'methods' => 'POST',
        'callback' => 'send_email_callback',
        'permission_callback' => '__return_true',
    ]);
});

function send_email_callback(WP_REST_Request $request) {
    $data = $request->get_json_params();

    // Hämta data från formuläret
    $email = sanitize_email($data['email']);
    $kategori = sanitize_text_field($data['kategori']);
    $titel = sanitize_text_field($data['titel']);
    $alder = sanitize_text_field($data['alder']);
    $beskrivning = sanitize_textarea_field($data['beskrivning']);

    if (empty($email) || empty($kategori) || empty($titel) || empty($alder) || empty($beskrivning)) {
        return new WP_REST_Response(['message' => 'Alla fält måste fyllas i'], 400);
    }

    $to = "hello@genzconsulting.se";
    $subject = "Nytt tips inskickat: " . $titel;
    $headers = array('Content-Type: text/html; charset=UTF-8', 'From: ' . $email);
    $message = "<h2>Nytt tips inskickat</h2>
                <p><strong>Kategori:</strong> {$kategori}</p>
                <p><strong>Titel:</strong> {$titel}</p>
                <p><strong>Ålder:</strong> {$alder}</p>
                <p><strong>Beskrivning:</strong> {$beskrivning}</p>";

    $sent = wp_mail($to, $subject, $message, $headers);

    if ($sent) {
        return new WP_REST_Response(['message' => 'E-post skickad!'], 200);
    } else {
        return new WP_REST_Response(['message' => 'E-post kunde inte skickas.'], 500);
    }
}

add_action('rest_api_init', 'expose_acf_fields_for_pages');


?>
