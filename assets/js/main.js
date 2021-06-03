$(document).ready(function()
{
	$(".memory-start").on("click", function()
	{
		//Set button color to grey
		SetColor($(this), "grey");
		
		//Start the game
		StartDisplay();
	});
});

function StartDisplay()
{
	//Select one of the squares at random, then set selected square to green
	const random = Math.floor(Math.random() * $(".memory-select").length);
	SetColor($(".memory-select").eq(random), "green");
};

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