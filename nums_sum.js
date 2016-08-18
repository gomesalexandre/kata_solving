function GetSum( c,d )
{
	var result = 0;
	if (c > d)
	{
		var tmp = d;
		d = c;
		c = tmp;
	}
	for (i=c;i<=d;i++)
	{
		result += i;
	}

	return(result);
}
