const root = document.querySelector(":root");
const toggleBtn = document.querySelector(".checkbox");

toggleBtn.addEventListener("click", function () {
  if (toggleBtn.checked) {
    root.style.setProperty("--very-pale-blue", "hsl(228, 28%, 20%)");
    root.style.setProperty("--backg", "hsl(232, 19%, 15%)");
    root.style.setProperty("--very-dark-blue", "hsl(0, 0%, 100%)");
    root.style.setProperty(" --dark-grayish-blue", "hsl(228, 34%, 66%)");

    root.style.setProperty("--light-grayish-blue", "hsl(228, 28%, 20%)");
    root.style.setProperty("--toggle-light", "hsl(228, 12%, 44%)");
  } else {
    root.style.setProperty("--backg", "hsl(0, 0%, 100%)");
    root.style.setProperty("--very-pale-blue", "hsl(225, 100%, 98%)");
    root.style.setProperty("--very-dark-blue", "hsl(230, 17%, 14%)");
    root.style.setProperty("--light-grayish-blue", "hsl(227, 47%, 96%)");
    root.style.setProperty(" --dark-grayish-blue", "hsl(228, 12%, 44%)");
    root.style.setProperty("--toggle-light", "hsl(230, 22%, 74%)");
  }
});