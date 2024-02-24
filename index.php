
<?php 
const base_url = "http://localhost/RockBand/";
include "views/components/head.php"; 
?>

<main class=container-fluid>

    <?php
    // Lógica para determinar qué vista cargar
    $view = isset($_GET['view']) ? $_GET['view'] : 'home'; // Por defecto, cargará la vista "home"
    $view_path = "views/$view.php";

    // Verificar si el archivo de la vista existe
    if (file_exists($view_path)) {
        include "views/components/header.php"; 
        include $view_path; // Incluir la vista correspondiente
        
    } else {
        include "views/error.php"; // Mostrar página de error si la vista no existe
    }
    ?>

</main>
<?php include "views/components/footer.php"; ?>
