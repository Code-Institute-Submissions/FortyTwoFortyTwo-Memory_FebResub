let start = true;
let maxBoxToSelect = 0;
let currentBoxToSelect = 0;

$(document).ready(function()
{
	$(".memory-start").on("click", function()
	{
		//If game already started, don't do anything
		if (!start)
			return;
		
		//The game has started
		start = false;
		maxBoxToSelect = 1;
		currentBoxToSelect = 0;
		
		//Set button color to grey
		SetColor($(this), "grey");
		
		//Start the game
		StartDisplay();
	});
});

function StartDisplay()
{
	if (currentBoxToSelect < maxBoxToSelect)
	{
		//Select one of the squares at random, then set selected square to green
		const random = Math.floor(Math.random() * $(".memory-select").length);
		SetColor($(".memory-select").eq(random), "green");
		
		//Add delay to hide green square, and set next square to display
		currentBoxToSelect++;
		setTimeout(SetAllSelectColor, 300, "grey");
		setTimeout(StartDisplay, 400);
	}
	else
	{
		//Done displaying, allow player to select
		SetNextSelect();
	}
}

function SetNextSelect()
{
	//Make all squares selectable
	SetAllSelectColor("blue");
}

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

function SetAllSelectColor(color)
{
	//Reset all square colors and set all square given color
	$(".memory-select").removeClass("color-background-red");
	$(".memory-select").removeClass("color-background-green");
	$(".memory-select").removeClass("color-background-blue");
	$(".memory-select").removeClass("color-background-grey");

	$(".memory-select").addClass("color-background-" + color);
} 