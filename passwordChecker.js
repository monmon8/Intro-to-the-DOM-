function checkPassword() {
  let passwordInput = document.getElementById("password");
  let progressBar = document.getElementById("progress-bar");
  let feedback = document.getElementById("feedback");

  let password = passwordInput.value;
  let strength = 0;

  if (password.match(/[a-z]/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }
  if (password.match(/[0-9]/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]/)) {
    strength += 1;
  }

  let progressWidth = password.length * 5;
  progressBar.style.width = progressWidth + "%";

  if (password.length < 8) {
    progressBar.className = "red";
    feedback.innerText = "Should be longer";
  } else if (password.length >= 8 && password.length < 12) {
    progressBar.className = "orange";
    feedback.innerText = "Pretty good";
  } else {
    progressBar.className = "green";
    feedback.innerText = "Grrrreat!";
  }
}
