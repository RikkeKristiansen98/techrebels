<?php
function load_react_app() {
    $assets_url = get_template_directory_uri() . '/frontend/dist/assets/';
    
    // JavaScript och CSS-filer som kommer från den byggda versionen
    wp_enqueue_script('react-app', $assets_url . 'index-CbDfEAQT.js', array(), null, true);
    wp_enqueue_style('react-app-css', $assets_url . 'index-D4nLGXzL.css', array(), null);
}
add_action('wp_enqueue_scripts', 'load_react_app');
?>


