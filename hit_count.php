<?php
function counter_effect($hit_count)
{
	$hit_count = str_split($hit_count);
	$hit_final = array();

	for($i = 0; $i < count($hit_count); $i++)
	{
		$hit_final[$i] = [];
		for ($j = 0; $j <= $hit_count[$i]; $j++)
		{
			array_push($hit_final[$i], $j);
		}
	}

	print_r($hit_final);

}
counter_effect("984");
?>
