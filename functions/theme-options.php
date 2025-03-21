<?php

add_action('wp', 'load_initial_ram_model');
function load_initial_ram_model()
{
  if (is_front_page()) {
    $model = isset($_GET['model']) ? sanitize_text_field($_GET['model']) : 'rampage';
    set_query_var('model', $model);
  }
}

function get_theme_image($image_name)
{
  $image_url = home_url() . '/wp-content/themes/ram-theme/resources/images/' . $image_name;

  return $image_url;
}

function custom_swiper_gallery_rampage()
{
  ob_start(); ?>

  <div thumbsSlider="" class="swiper mySwiper mb-5">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider1.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider2.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider3.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider4.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider5.jpg') ?>" />
      </div>
    </div>
  </div>
  <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider1.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider2.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider3.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider4.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider5.jpg') ?>" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_rampage', 'custom_swiper_gallery_rampage');

function custom_swiper_gallery_ram1500()
{
  ob_start(); ?>

<div thumbsSlider="" class="swiper mySwiper mb-5">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider1.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider2.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider3.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider4.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider5.jpg') ?>" />
      </div>
    </div>
  </div>

  <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider1.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider2.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider3.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider4.jpg') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram1500-slider5.jpg') ?>" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_ram1500', 'custom_swiper_gallery_ram1500');

function custom_swiper_gallery_ram2500()
{
  ob_start(); ?>

<div thumbsSlider="" class="swiper mySwiper mb-5">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider1.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider2.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider3.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider4.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider5.jpg') ?>" />
      </div>
    </div>
  </div>
  <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider1.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider2.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider3.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider4.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram2500-slider5.jpg') ?>" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_ram2500', 'custom_swiper_gallery_ram2500');

function custom_swiper_gallery_ram3500()
{
  ob_start(); ?>

<div thumbsSlider="" class="swiper mySwiper mb-5">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider1.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider2.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider3.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider4.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider5.png') ?>" />
      </div>
    </div>
  </div>
  <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider1.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider2.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider3.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider4.png') ?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('ram3500-slider5.png') ?>" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_ram3500', 'custom_swiper_gallery_ram3500');

// Adiciona o Google Tag Manager no <head>
function adicionar_gtm_no_head() {
  ?>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TKWWDSCC');</script>
  <!-- End Google Tag Manager -->
  <?php
}
add_action('wp_head', 'adicionar_gtm_no_head');

// Adiciona o Google Tag Manager (noscript) logo após a tag <body>
function adicionar_gtm_no_body() {
  ?>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKWWDSCC"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <?php
}
add_action('wp_body_open', 'adicionar_gtm_no_body');
