const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");
const erroricon = document.querySelector(".erroricon");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (email.value === "") {
		error.innerHTML = "Please provide valid email";
		erroricon.style.opacity = ("1");
	} else {
		error.innerHTML = "";
		erroricon.style.opacity = ("0");
	}
})