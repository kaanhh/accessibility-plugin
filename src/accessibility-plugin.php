<?php
/**
 * Plugin Name : Accessibility Plugin
 * Description: Koftes Barrierefreiheitsplugin
 * Version: 1.0
 * Author: Kaan Ertugrul
 */

 if (!defined('ABSPATH')) {
    exit; 
}

// Enqueue React-Assets
function enqueue_plugin_assets() {
    wp_enqueue_script(
        'accessibility-plugin-js',
        plugin_dir_url(__FILE__) . 'dist/assets/index.js',
        array(),
        '1.0',
        true
    );
    wp_enqueue_style(
        'accessibility-plugin-css',
        plugin_dir_url(__FILE__) . 'dist/assets/index.css',
        array(),
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_plugin_assets');