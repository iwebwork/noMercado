<?php
    $arquivo = $_FILES['arquivo'];
    if(isset($arquivo['tmp_name']) && !empty($arquivo['tmp_name'])){
        move_uploaded_file($arquivo['tmp_name'],'planilhas/'.$arquivo['name']);
        //echo 'arquivo enviado com sucesso';
        header('Location: http://localhost/noMercado/app/appcorporativo/');
    }
?>