<?php
    include 'Fresh\touchdraw\AMP_Tool\cartoDBProxy.php';
    //          ^CHANGE THIS TO THE PATH TO YOUR cartodbProxy.php
    $queryURL = $_POST['sql'];
    $return = goProxy($queryURL);
    echo $return;
?>
