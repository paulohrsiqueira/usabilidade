var usersLogins = {
  // Read as: UserName: Password
  "Estatic": "sidLouco"
};

document.getElementById('loginForm').addEventListener('submit', event => {
  // Prevent the user from refreshing the page
  event.preventDefault();

  var username = document.getElementById('UserName').value;
  var password = document.getElementById('Password').value;

  var utilUsername = username.toLowerCase();
  var usernameNoSpaces = utilUsername.replace(/\s+/g, "");
  var passwordNoSpaces = password.replace(/\s+/g, "");

  if (usernameNoSpaces === "") {
    alert("Please enter a username. Try again"); return
  }
  if (passwordNoSpaces === "") {
    alert("Please enter a password. Try again"); return
  }

  if (username.includes(" ")) {
    alert(`"${username}" isn't a valid username. Usernames can't contain spaces.`);
    return
  }
  if (password.includes(" ")) {
    alert("Your password isn't a valid password. Passwords cannot contain spaces."); return
  }

  if (!usersLogins[usernameNoSpaces]) {
    alert(`The user: "${username}" does not exist. Please try another.`); return
  }
  if (usersLogins[usernameNoSpaces] !== passwordNoSpaces) {
    alert("The password you entered is incorrect. Try again."); return
  }

  alert("You have successfully logged in.");
});