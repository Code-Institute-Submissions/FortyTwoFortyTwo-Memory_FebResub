$(document).ready(function()
{
	$(".memory-start").on("click", function()
	{
		//Set button color to grey
		SetColor($(this), "grey");
	});
});

function SetColor(btn, color)
{
	//Remove all class colors button may potentally have
	btn.removeClass("color-background-red");
	btn.removeClass("color-background-green");
	btn.removeClass("color-background-blue");
	btn.removeClass("color-background-grey");
	
	//Set button color to given value
	btn.addClass("color-background-" + color);
} 