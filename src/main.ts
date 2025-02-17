type UserData = {
  userName: string;
  password: string;
};

const allUserData: UserData[] = [
  {
    userName: "user123",
    password: "Password123",
  },
  {
    userName: "user223",
    password: "Password223",
  },
  {
    userName: "user323",
    password: "Password323",
  },
  {
    userName: "user423",
    password: "Password423",
  },
  {
    userName: "user523",
    password: "Password523",
  },
  {
    userName: "user623",
    password: "Password623",
  },
  {
    userName: "user723",
    password: "Password723",
  },
  {
    userName: "user823",
    password: "Password823",
  },
  {
    userName: "user923",
    password: "Password923",
  },
  {
    userName: "user1023",
    password: "Password1023",
  },
];

//HTML Elemente ziehen
const userNameInput =
  document.querySelector<HTMLInputElement>("#username-input");
const passwordInput =
  document.querySelector<HTMLInputElement>("#password-input");
const submitButton = document.querySelector("#submit-button");
const loginFormElement = document.querySelector("#login-form");
const welcomeUserElement = document.querySelector("#welcome-user");
const logoutElement = document.querySelector("#logout-button");
const wrongInputOutput = document.querySelector("#ausgabe-fehler");
const secretButton = document.querySelector("#secret-button");
const bodyElement = document.querySelector("#body");



//Login Daten auswerten
function evaluateUserInput() {
  if (
    userNameInput &&
    passwordInput &&
    loginFormElement &&
    welcomeUserElement &&
    wrongInputOutput
  ) {
    const userNameValue = userNameInput.value;
    const passwordValue = passwordInput.value;
    //!Die Fehlermeldung funktioniert nicht
    allUserData.forEach((user) => {
      if (
        userNameValue.toLowerCase() === user.userName &&
        passwordValue === user.password
      ) {
        loginFormElement.className = "opacity-0 w-0";
        welcomeUserElement.textContent += `${user.userName}`;
      } else if (userNameValue.toLowerCase() !== user.userName) {
        wrongInputOutput.textContent = "*user does not exist";
      } else if (passwordValue !== user.password) {
        wrongInputOutput.textContent = "*password is wrong";
      } else {
        wrongInputOutput.textContent = "*either password or username is wrong";
      }
    });
  }
}

//save cookie
function saveCookie () {
  if (userNameInput)
    document.cookie = `username=${userNameInput.value}`
}

//! Wie kriege ich Cookie richtig gelöscht? Inputfeld ist dann ja leer
//! plus einloggen nicht nötig checke ich nicht
//delete cookie
function deleteCookie () {
if (userNameInput) {
  document.cookie = `username=${userNameInput.value}; expires=Thu, 01 1970 00:00:00 UTC`;
}
}

//login
submitButton?.addEventListener("click", (event) => {
  event.preventDefault();
  evaluateUserInput();
  saveCookie();
});

//logout zurück zur Startseite
logoutElement?.addEventListener("click", () => {
  if (loginFormElement) {
    loginFormElement.className = "opacity-5";
    deleteCookie();
  }
});

//secret Button Event
secretButton?.addEventListener("click", () => {
  if (bodyElement) {
    bodyElement.innerHTML = "";
    bodyElement.innerHTML = `VIRUS VIRUS VIRUS - <span class="spin"><span class="spin">🤡</span><span class="spin">🤡</span><span class="spin">🤡</span><span class="spin">🤡</span><span class="spin">🤡</span><span class="spin">🤡</span></span> - VIRUS VIRUS VIRUS`;
    bodyElement.className = "text-center text-8xl text-bright-red my-50 blink";
  }
});

//! Bonus?
