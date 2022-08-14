/** @format */
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

form.addEventListener("submit", (Event) => {
	Event.preventDefault();

	checkInputs();
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".error");

	errorDisplay.innerText = message;
	inputControl.classList.add("error");
	inputControl.classList.remove("success");
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".error");
	errorDisplay.innerText = " ";
	inputControl.classList.add("success");
	inputControl.classList.remove("error");
};

const checkInputs = () => {
	const passwordValue = password.value;
	const emailValue = email.value;
	const confirm_passwordValue = confirm_password.value;

	if (
		emailValue.includes("@") &&
		(emailValue.includes(".in") || emailValue.includes(".com"))
	) {
		setSuccess(email);
	} else {
		setError(email, "Email is invalid");
	}

	if (passwordValue.length > 4 && passwordValue.length < 12) {
		setSuccess(password);
	} else {
		setError(password, "Passwords should be 4-12 characters long");
	}

	if (confirm_passwordValue === "") {
		setError(confirm_password, "Please confirm your password");
	} else if (confirm_passwordValue !== passwordValue) {
		setError(confirm_password, "Passwords doesn't match");
	} else {
		setSuccess(confirm_password);
	}
};
