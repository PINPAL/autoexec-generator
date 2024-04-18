// Detect prefers-color-scheme and set dark mode if enabled
// Run once on page load
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.body.classList.add("dark");
}
// Dark Mode Toggle (manual switch)
document.getElementById("darkModeToggle").addEventListener("click", function () {
	document.body.classList.toggle("dark");
});

/**
 * Display a fullscreen popup
 * @param {string} title - The title of the popup
 * @param {string} message - The message to display
 * @param {array} buttons - An array of button objects
 *
 */
function displayPopup(
	title = "",
	message = "",
	buttons = [
		{
			id: "closePopup",
			text: "Close",
			destructive: true,
			action: function () {
				document.getElementById("popupContainer").remove();
			},
		},
	]
) {
	let popupContainer = document.createElement("div");
	// check if a popup is already open
	if (document.getElementById("popupContainer")) {
		// if a popup is already open, don't open another one
		popupContainer = document.getElementById("popupContainer");
		// remove the previous popup
		document.getElementById("popup").remove();
	} else {
		popupContainer.id = "popupContainer";
	}

	const popup = document.createElement("div");
	popup.id = "popup";
	popup.classList.add("contentBox");
	popupContainer.appendChild(popup);

	const popupTitle = document.createElement("h1");
	popupTitle.id = "popupTitle";
	popupTitle.innerHTML = title;
	popup.appendChild(popupTitle);

	const popupMessage = document.createElement("p");
	popupMessage.id = "popupMessage";
	popupMessage.innerHTML = message;
	popup.appendChild(popupMessage);

	buttons.push({
		id: "closePopup",
		text: "Close",
		destructive: true,
		action: function () {
			document.getElementById("popupContainer").remove();
		},
	});
	buttons.forEach((button) => {
		const popupButton = document.createElement("button");
		popupButton.id = button.id;
		popupButton.innerHTML = button.text;
		if (button.destructive) {
			popupButton.classList.add("destructive");
		}
		popupButton.addEventListener("click", button.action);
		popup.appendChild(popupButton);
	});

	document.body.appendChild(popupContainer);
}
