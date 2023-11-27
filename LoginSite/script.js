const usersLogins = [
  { username: "Estatic", password: "sidLouco" },
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Prevent the user from refreshing the page
  event.preventDefault();

  const username = document.getElementById('UserName').value;
  const password = document.getElementById('Password').value;

  const isInvalidUsername = username.includes(" ");
  const isInvalidPassword = password.includes(" ");

  const utilUsername = username.toLowerCase();
  const usernameNoSpaces = utilUsername.replace(/\s+/g, "");
  const passwordNoSpaces = password.replace(/\s+/g, "");

  if (isInvalidUsername && isInvalidPassword) {
    alert(`"${username}" is not a valid username. Usernames cannot contain spaces. 
        And your password isn't a valid password. Passwords cannot contain any spaces.`);
  }
  else if (isInvalidUsername) {
    alert(`"${username}" isn't a valid username. Usernames can't contain spaces.`);
  }
  else if (isInvalidPassword) {
    alert("Your password is not a valid password. Passwords can't contain spaces.");
  }
  else if (usernameNoSpaces === "" && passwordNoSpaces === "") {
    alert("Please enter a username and a password. Try again");
  }
  else if (usernameNoSpaces === "") {
    alert("Please enter a username. Try again");
  }
  else if (passwordNoSpaces === "") {
    alert("Please enter a password. Try again");
  }
  else {
    const user = usersLogins.find(u => u.username.toLowerCase() === usernameNoSpaces);
    if (user) {
      if (user.password === passwordNoSpaces) {
        alert("You have successfully logged in.");
      }
      else {
        alert("The password you entered is incorrect. Try again.");
      }
    }
    else {
      alert(`The user: ${username}. does not exist, try another`);
    }
  }
});