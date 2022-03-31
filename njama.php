<?php

if (isset($_POST['submit']))
{
    echo "kod je:" .$_POST['slasnikod'];
    $file=fopen("form-save.txt","a");

    fwrite($file, "Kod je: ".$_POST['slasnikod'] . "\n");
}
            
?>