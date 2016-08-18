function toCode(arg)
{
	if ( arg === null || arg === "" || arg.match(/[^a-zA-Z]/g) )
	{
		return 0;
	}
	return arg.split('').map(function(x)
	{
		return x.toUpperCase().charCodeAt(0);
	}).reduce(function(x,y)
	{
		return (x + y);
	})
}

function compare(s1, s2)
{
	return toCode(s1) === toCode(s2);
}
