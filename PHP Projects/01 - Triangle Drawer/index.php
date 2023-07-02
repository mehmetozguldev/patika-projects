<?php
function ucgen($satir)
{
    $nokta = 0;
    while ($nokta <= $satir) {
        for ($i = 0; $i <= $nokta; $i++) {
            echo "0";
        }
        $nokta++;
        echo "<br>";
    }
};
ucgen(10);
