<?php
function load_react_app() {

    if (defined('WP_DEBUG') && WP_DEBUG) {
   
        echo '<script type="module" src="http://localhost:5173/src/main.tsx"></script>';
    } else {
        wp_enqueue_script(
            'react-app',
            get_template_directory_uri() . '/headlessfront/dist/assets/index.js', 
            array(), 
            null, 
            true 
        );
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