<?php
/**
 * Created by PhpStorm.
 * User: austinsun
 * Date: 7/20/16
 * Time: 3:17 PM
 */
$csv=$_POST['line'];
$index=$_POST['index'];
$file = fopen("Volunteers.csv","r");
fclose($file);

/**
 * writes time to output.csv file
 * does not work
 */
$f2 = fopen("output.csv", "w");
$time = strftime("%Y. %B %d. %A. %X %Z");

fputcsv($f2, explode(',', $time));
fclose($f2);

return $time;
?>
