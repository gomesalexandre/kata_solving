var sum_pairs=function(ints, s)
{
	var result = 0;
	var j = 0;

	for (i=0;i<=ints.length-1;i++)
	{
		for (j=1;j<=ints.length-2;j++)
		{
			if (ints[i]+ints[j] === s){
				console.log(ints[i],ints[j]);
				return 0;
			}
		}
		if (ints[i]+ints[j] === s){
			console.log(ints[i],ints[j]);
			return 0;
		}
	}
}
sum_pairs([1, 4, 8, 7, 3, 15], 8);
