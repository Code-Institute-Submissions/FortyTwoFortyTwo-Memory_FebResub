let start = true;
let select = false;
let boxToSelect = [];
let maxBoxToSelect = 0;
let currentBoxToSelect = 0;

$(document).ready(function()
{
	$(".memory-select").on("click", function()
	{
		if (!select)	//Not selectable
			return;

		select = false;
		
		//Set all selectable tiles color from blue to grey, so green or red can be set afterward
		SetAllSelectColor("grey");
		
		if ($(this).hasClass("memory-correct"))
		{
			//Correct square pressed, set color green
			SetColor($(this), "green");
			
			if (currentBoxToSelect < maxBoxToSelect)
			{
				//Show green color for short time, then reset colors for next select
				setTimeout(SetNextSelect, 250);
			}
			else
			{
				//Level complete, update counters and start next level
				maxBoxToSelect++;
				
				currentBoxToSelect = 0;
				setTimeout(SetAllSelectColor, 250, "grey");
				setTimeout(StartDisplay, 300);
			}
		}
		else
		{
			//Wrong square pressed, set colors and end game
			SetColor($(".memory-correct"), "green");
			SetColor($(this), "red");
			
			start = true;
			SetColor($(".memory-start"), "blue");
		}
	});
	
	$(".memory-start").on("click", function()
	{
		//If game already started, don't do anything
		if (!start)
			return;
		
		//The game has started
		start = false;
		boxToSelect = [];	//empty
		maxBoxToSelect = 1;
		currentBoxToSelect = 0;
		
		//Set button color to grey with restart text
		SetColor($(this), "grey");
		$(this).text("Restart");
		
		//Start the game
		StartDisplay();
	});
});

function StartDisplay()
{
	if (currentBoxToSelect < maxBoxToSelect)
	{
		if (currentBoxToSelect <= boxToSelect.length)
		{
			//Add new square from list of already-selected squares to the list
			const random = Math.floor(Math.random() * $(".memory-select").length);
			boxToSelect.push(random);
		}
		
		//Color correct square green
		SetAllSelectColor("grey");
		SetColor($(".memory-select").eq(boxToSelect[currentBoxToSelect]), "green");
		
		//Add delay to hide green square, and set next square to display
		currentBoxToSelect++;
		setTimeout(SetAllSelectColor, 300, "grey");
		setTimeout(StartDisplay, 400);
	}
	else
	{
		//Done displaying, allow player to select
		currentBoxToSelect = 0;
		SetNextSelect();
	}
}

function SetNextSelect()
{
	//Make all squares selectable, and give class "memory-correct" to correct square
	SetAllSelectColor("blue");
	$(".memory-select").removeClass("memory-correct");
	$(".memory-select").eq(boxToSelect[currentBoxToSelect]).addClass("memory-correct");
	
	select = true;
	currentBoxToSelect++;
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