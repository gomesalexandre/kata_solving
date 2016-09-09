function countPositivesSumNegatives($input) {

    $positives = 0;
    $negatives = 0;

	if empty($input)
	{
		return([]);
	}

	for ($i = 0; $i < sizeof($input); $i++)
    {
      if ($input[$i] > 0 )
      {
        $positives++;
      }
      else if ($input[$i] < 0)
      {
        $negatives += $input[$i];
      }
    }

    return[$positives, $negatives];
}
