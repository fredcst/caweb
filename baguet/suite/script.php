<?php

echo 'Server address :' ,
    $_SERVER['SERVER_ADDR'] ,
    "<br>",
    'Your IP : ',
    $_SERVER['REMOTE_ADDR'] ,
    "<br>",
    'Script Path :',
    $_SERVER['SCRIPT_FILENAME']
;

?>