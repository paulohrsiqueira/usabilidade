var usersLogins = {
  // Read as: UserName: Password
  "Estatic": "sidLouco"
};

document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Prevent the user from refreshing the page
  event.preventDefault();

  var username = document.getElementById('UserName').value.trim();
  var password = document.getElementById('Password').value.trim();

  var incorrectMessageElement = document.getElementById('incorrectMessage');
  var correctMessageElement = document.getElementById('correctMessage');

  // Clear old messages
  incorrectMessageElement.style.display = 'none';
  correctMessageElement.style.display = 'none';
  incorrectMessageElement.textContent = '';
  correctMessageElement.textContent = '';

  if (!username) {
    incorrectMessageElement.textContent = "Please enter a username. Try again";
    incorrectMessageElement.style.display = 'block';
    return;
  }

  if (!password) {
    incorrectMessageElement.textContent = "Please enter a password. Try again";
    incorrectMessageElement.style.display = 'block';
    return;
  }

  if (username.includes(" ") && password.includes(" ")) {
    incorrectMessageElement.textContent = `"${username}" isn't a valid username. Usernames can't contain spaces. And your password isn't a valid password. Passwords can't contain any spaces.`;
    incorrectMessageElement.style.display = 'block';
  }
  else if (username.includes(" ")) {
    incorrectMessageElement.textContent = `"${username}" isn't a valid username. Usernames can't contain spaces.`;
    incorrectMessageElement.style.display = 'block';
  }
  else if (password.includes(" ")) {
    incorrectMessageElement.textContent = "Your password isn't a valid password. Passwords cannot contain spaces.";
    incorrectMessageElement.style.display = 'block';
  }
  else {
    if (usersLogins[username]) {
      if (usersLogins[username] === password) {
        correctMessageElement.textContent = "You have successfully logged in.";
        correctMessageElement.style.display = 'block';
      }
      else {
        incorrectMessageElement.textContent = "The password you entered is incorrect. Try again.";
        incorrectMessageElement.style.display = 'block';
      }
    }
    else {
      incorrectMessageElement.textContent = `The user: "${username}" does not exist. Please try another.`;
      incorrectMessageElement.style.display = 'block';
    }
  }
});