var guestList = ["Steve", "Mike", "Harvey", "Bridgette", "Amy"];

function addName()
{
	var newName = document.getElementById("name").value;
	guestList.push(newName);

	initGuestList();
}

function initGuestList()
{
	var inner = "<ul>";
	for(i = 0; i < guestList.length; i++)
	{
		inner += "<li>" + guestList[i] + "</li>";
	}
	inner += "</ul>"

	var list = document.getElementById("guests");
    list.innerHTML = inner;
}
