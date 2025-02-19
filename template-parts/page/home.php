<div id="ram-content">
    <?php
    $model = isset($_GET['model']) ? sanitize_text_field($_GET['model']) : 'rampage';
    get_template_part('template-parts/templates/ram', $model);
    ?>
</div>