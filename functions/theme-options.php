<?php

add_action('wp', 'load_initial_ram_model');
function load_initial_ram_model() {
    if (is_front_page()) {
        $model = isset($_GET['model']) ? sanitize_text_field($_GET['model']) : 'rampage';
        set_query_var('model', $model);
    }
}

function get_theme_image($image_name){
    $image_url = home_url() . '/wp-content/themes/ram-theme/resources/images/' . $image_name;

    return $image_url;
}

function custom_swiper_gallery_rampage() {
    ob_start(); ?>

<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2 mb-5">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider1.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider2.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider3.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider4.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider5.jpg')?>" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  <div thumbsSlider="" class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider1.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider2.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider3.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider4.jpg')?>" />
      </div>
      <div class="swiper-slide">
        <img src="<?php echo get_theme_image('rampage-slider5.jpg')?>" />
      </div>
    </div>
  </div>

    <?php
    return ob_get_clean();
}
add_shortcode('swiper_gallery_rampage', 'custom_swiper_gallery_rampage');

function custom_swiper_gallery_ram1500() {
  ob_start(); ?>

<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2 mb-5">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider1.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider2.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider3.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider4.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider5.jpg')?>" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
<div thumbsSlider="" class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider1.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider2.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider3.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider4.jpg')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram1500-slider5.jpg')?>" />
    </div>
  </div>
</div>

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_ram1500', 'custom_swiper_gallery_ram1500');

function custom_swiper_gallery_ram2500() {
  ob_start(); ?>

<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2 mb-5">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider1.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider2.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider3.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider4.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider5.jpg')?>" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
<div thumbsSlider="" class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider1.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider2.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider3.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider4.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram2500-slider5.jpg')?>" />
    </div>
  </div>
</div>

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_ram2500', 'custom_swiper_gallery_ram2500');

function custom_swiper_gallery_ram3500() {
  ob_start(); ?>

<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff;" class="swiper mySwiper2 mb-5">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider1.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider2.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider3.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider4.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider5.png')?>" />
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
<div thumbsSlider="" class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider1.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider2.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider3.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider4.png')?>" />
    </div>
    <div class="swiper-slide">
      <img src="<?php echo get_theme_image('ram3500-slider5.png')?>" />
    </div>
  </div>
</div>

  <?php
  return ob_get_clean();
}
add_shortcode('swiper_gallery_ram3500', 'custom_swiper_gallery_ram3500');