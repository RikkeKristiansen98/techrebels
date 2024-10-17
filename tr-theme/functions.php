<?php
function load_react_app() {

    if (defined('WP_DEBUG') && WP_DEBUG) {

        echo '<script type="module" src="http://localhost:5173/src/main.tsx"></script>';
    } else {
        // Produktionsläge - dynamisk sökning av byggfilerna
        $assets_dir = get_template_directory() . '/frontend/dist/assets/';
        $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';

        // Hitta rätt JS- och CSS-filer dynamiskt
        $js_file = '';
        $css_file = '';

        foreach (glob($assets_dir . 'index-*.js') as $file) {
            $js_file = basename($file);
        }

        foreach (glob($assets_dir . 'index-*.css') as $file) {
            $css_file = basename($file);
        }

        // Enqueue JavaScript-filen
        if ($js_file) {
            wp_enqueue_script(
                'react-app',
                $assets_url . $js_file,
                array(),
                filemtime($assets_dir . $js_file), // Cache-busting med filens senaste ändringstid
                true // Ladda i footern
            );
        }

        // Enqueue CSS-filen
        if ($css_file) {
            wp_enqueue_style(
                'react-app-css',
                $assets_url . $css_file,
                array(),
                filemtime($assets_dir . $css_file) // Cache-busting med filens senaste ändringstid
            );
        }
    }
}
add_action('wp_enqueue_scripts', 'load_react_app');

function custom_api_route() {
    register_rest_route('myplugin/v1', '/data/', array(
        'methods' => 'GET',
        'callback' => 'custom_api_callback',
    ));
}

function custom_api_callback() {
    return new WP_REST_Response('Hello from the API!', 200);
}

add_action('rest_api_init', 'custom_api_route');

?>
