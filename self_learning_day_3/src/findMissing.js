function findMissing(num1, num2)
{
	var num1 = num1.sort(function(a, b){return a - b;});
	var num2 = num2.sort(function(a, b){return a - b;});
	var len1 = num1.length;
	var len2 = num2.length;
	if(len1 == 0 && len2 == 0)
	{
		return 0;
	}
	if(len1 == len2)
	{
		return 0;
	}
	if(len1 > len2)
	{
		for(var i = 0; i <= len2 - 1; i++)
		{
			var present = false;
			for(var j = 0; j <= len2 - 1; j++)
			{
				if(num1[i] == num2[j])
				{
					var present = true;
				}
			}

			if(present == false)
			{
				return num1[i];
			}
		}

		if(present == true)
		{
			return num1[len2];
		}
	}

	if(len2 > len1)
	{
		for(var i = 0; i <= len1 - 1; i++)
		{
			var present = false;
			for(var j = 0; j <= len1 - 1; j++)
			{
				if(num2[i] == num1[j])
				{
					var present = true;
				}
			}

			if(present == false)
			{
				return num2[i];
			}
		}

		if(present == true)
		{
			return num2[len1];
		}
	}
}