<?php
function numbersWithDigitInside($x, $d)
{
	$count = 0;
	$sum = 0;
	$product = 1;

	for ($i = 1, $iStr = ""; $i <= $x; $i++)
	{
	  $iStr = (string)$i;
	  if (preg_match("/$d/", $iStr, $match))
	  {
	    $count += 1;
	    $sum += $i;
	    $product *= $i;
	  }
	}

	if ($product == 1)
	{
	  $product = 0;
	}

	return([$count, $sum, $product]);
}
?>
