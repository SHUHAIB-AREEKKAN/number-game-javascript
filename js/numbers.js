var amount=1000;

function myFunction()
{

document.getElementById("balance").innerHTML = "you have "+amount;
var a=Math.floor(Math.random() * 10);
var b=Math.floor(Math.random() * 10);
var c=Math.floor(Math.random() * 10);

amount-=100;
if(amount<100)
	document.getElementById("startbtn").style.visibility = "hidden";
document.getElementById("numbers").innerHTML = a+" "+b+" "+c;
if(is_they_equal(a,b,c))
	return true
else if(in_series([a,b,c]))
	return true
else if(odd_or_even(a,b,c))
	return true
else
	{  
	document.getElementById("status").innerHTML = "you are unlicky this time";
	document.getElementById("balance").innerHTML = "you have "+amount;
	
	}		



}
















function is_they_equal(a,b,c)
{
	if (a===b && b===c)
		{	console.log("they are equal each other");
			amount+=1000;
			document.getElementById("status").innerHTML = "they are equal and you win 1000";
			document.getElementById("balance").innerHTML = "you have "+amount;
			return true;			
		}
	else
		return false;
		
}
function odd_or_even(a,b,c)
{
	if((a%2===0 && b%2===0 && c%2===0 ) || (a%2!==0 && b%2!==0 && c%2!==0 ))
		{
		amount+=300;
		document.getElementById("status").innerHTML = "they are odd/even win 300";
		document.getElementById("balance").innerHTML = "you have "+amount;
		return true;
		}
	else
		{
			return false;
		}
}

function in_series(params)
{
	params.sort(function(a,b){return a-b})
	if (params[2]===params[0]+2 && params[1]===params[0]+1)
	{	amount+=800;
		document.getElementById("status").innerHTML = "they are in Series and you win 800";
		document.getElementById("balance").innerHTML = "you have "+amount;
		return true;
	}
	else{

		return false;
	    }
}



