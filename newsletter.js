// Newsletter JavaScript for Assessment 4
// Author: Avenjal Thapa

// Opens the newsletter form in a new browser tab or window from javascriptpage.html.
function openNewsletterForm() {
  window.open("newsletter.html", "_blank");
}

// Displays the required welcome alert when the signup page loads.
function showWelcomeMessage() {
  alert("Welcome to the BrewMaster Barista Academy Ltd. - Newsletter Signup");
}

// Validates that first name and last name are not empty before form submission.
function validateSignupForm() {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();

  if (firstName === "") {
    alert("Please enter your first name before submitting the form.");
    document.getElementById("firstName").focus();
    return false;
  }

  if (lastName === "") {
    alert("Please enter your last name before submitting the form.");
    document.getElementById("lastName").focus();
    return false;
  }

  alert("Thank you for signing up to the BrewMaster Barista Academy newsletter.");
  return true;
}
