<?php
/*	Lab
==================== */
//	echo theme_get_setting('show_slideshow');

/*	Start
-------------------- */

// bun.php
include('bun.php');

	drupal_add_js(base_path().path_to_theme().'/js/googleAnalytics.js',
		array('type' => 'file', 'scope' => 'header',  'type' => 'external'));

  drupal_add_js(base_path().'profiles/commerce_kickstart/themes/commerce_kickstart_theme/js/custom_function.js',
		array('type' => 'file', 'scope' => 'header',  'type' => 'external'));

	drupal_add_js(base_path().'profiles/commerce_kickstart/themes/commerce_kickstart_theme/js/app.js',
		array('type' => 'file', 'scope' => 'header'));

	drupal_add_js(base_path().'profiles/commerce_kickstart/themes/commerce_kickstart_theme/js/bun_index.js',
		array('type' => 'file', 'scope' => 'header'));
/**
 * Preprocess variables for html.tpl.php
 *
 * @see system_elements()
 * @see html.tpl.php
 */
function commerce_kickstart_theme_preprocess_html(&$variables) {
  // Add conditional stylesheets for IE
  drupal_add_css(path_to_theme() . '/css/commerce-kickstart-theme-ie-lte-8.css', array('group' => CSS_THEME, 'weight' => 23, 'browsers' => array('IE' => 'lte IE 8', '!IE' => FALSE), 'preprocess' => FALSE));
  drupal_add_css(path_to_theme() . '/css/commerce-kickstart-theme-ie-lte-7.css', array('group' => CSS_THEME, 'weight' => 24, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));

  // Add external libraries.
  drupal_add_library('commerce_kickstart_theme', 'selectnav');
}

/**
 * Implements hook_library().
 */
function commerce_kickstart_theme_library() {
  $libraries['selectnav'] = array(
    'title' => 'Selectnav',
    'version' => '',
    'js' => array(
      libraries_get_path('selectnav.js') . '/selectnav.min.js' => array(),
    ),
  );
  return $libraries;
}

/**
 * Override the submitted variable.
 */
function commerce_kickstart_theme_preprocess_node(&$variables) {
  $variables['submitted'] = $variables['date'] . ' - ' . $variables['name'];
  if ($variables['type'] == 'blog_post') {
    $variables['submitted'] = t('By') . ' ' . $variables['name'] . ', ' . $variables['date'];
  }
}
