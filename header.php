<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class( 'bg-white text-gray-900 antialiased' ); ?>>

<?php do_action( 'tailpress_site_before' ); ?>

<div id="page" class="min-h-screen flex flex-col">

	<?php do_action( 'tailpress_header' ); ?>

	<header class="bg-black w-full py-8 px-5 md:px-0">
		<div class="max-w-6xl flex justify-center mx-auto">
			<img src="<?php echo get_theme_image('logo-ram.png')?>" class="w-96">
		</div>
	</header>

	<div id="content" class="site-content grow">

		<?php if ( is_front_page() ) { ?>
		<?php } ?>

		<?php do_action( 'tailpress_content_start' ); ?>

		<main>
