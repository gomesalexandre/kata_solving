function correct_hour(hour)
{
	hour = hour.split(':').map(function(x){
		return parseInt(x);
	})
	while (hour[0] > 24)
	{
		hour[0] = hour[0] - 24 ;
	}
	if (hour[0] === 24)
	{
		hour[0] = 0;
	}

	if (hour[2] >= 60)
	{
		hour[2] = hour[2] - 60;
		hour[1] = hour[1] + 1;
	}

	if (hour[1] >= 60)
	{
		hour[1] = hour[1] - 60;
		hour[0] = hour[0] + 1;
	}

	return (hour);
}

function fix_zeros(hour)
{
	for (i=0; i<hour.length; i++)
	{
		if (hour[i]>=0 && hour[i]<=9)
		{
			hour[i] = "0"+(hour[i].toString());
		}
		else
		{
			hour[i] = hour[i].toString();
		}
	}

	return (hour);
}
function timeCorrect(timestring)
{
	if (timestring === null || timestring === "")
	{
		return(timestring);
	}
  else if ((/^([0-9]{2}\:[0-9]{2}\:[0-9]{2})$/g).test(timestring)===false)
  {
    return (null);
  }
	else
	{
		timestring = fix_zeros(correct_hour(timestring));
		return(timestring[0]+":"+timestring[1]+":"+timestring[2]);
	}
}
