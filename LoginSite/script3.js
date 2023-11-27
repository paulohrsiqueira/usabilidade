var usersLogins = {
  // Read as: UserName: Password
  "estatic": "sidLouco"
};

document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Prevent the user from refreshing the page
  event.preventDefault();

  var username = document.getElementById('UserName').value;
  var password = document.getElementById('Password').value;

  var utilUsername = username.toLowerCase();
  var usernameNoSpaces = utilUsername.replace(/\s+/g, "");
  var passwordNoSpaces = password.replace(/\s+/g, "");

  if (usernameNoSpaces === "") {
    alert("Please enter a username. Try again");
    return;
  }
  else if (passwordNoSpaces === "") {
    alert("Please enter a password. Try again");
    return;
  }

  var usernameHasSpace = username.includes(" ");
  var passwordHasSpace = password.includes(" ");

  if (usernameHasSpace && passwordHasSpace) {
    alert(`"${username}" isn't a valid username. Usernames can't contain spaces. Your password isn't a valid password. Passwords can't contain any spaces.`);
    return;
  }
  else if (usernameHasSpace) {
    alert(`"${username}" isn't a valid username. Usernames can't contain spaces.`);
    return;
  }
  else if (passwordHasSpace) {
    alert("Your password isn't a valid password. Passwords can't contain spaces.");
    return;
  }

  if (usersLogins[usernameNoSpaces]) {
    if (usersLogins[usernameNoSpaces] === passwordNoSpaces) {
      alert("You have successfully logged in.");
    }
    else {
      alert("The password you entered is incorrect. Try again.");
    }
  }
  else {
    alert(`The user: "${username}" does not exist. Please try another.`);
  }
});