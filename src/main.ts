//..In dieser Aufgabe sollst du eine passwortgeschützte Seite mit Login-Fenster programmieren.
//..Wenn der/die User:in die Seite aufruft sieht er/sie ein Login-Formular (siehe Vorschau).

//..Hinter dem Login-Formular befindet sich die “geschützte” Seite.
//..Erst bei Eingabe einer gültigen Name-Passwort-Kombination verschwindet das Formular.

//..Danach wird der dahinter liegende Inhalt sichtbar (die Seite wird nicht verlassen).
//..Das Passwort ist case-sensitive. Der Benutzername nicht.
//..Die Abfrage, ob ein Passwort gültig ist, erfolgt via TypeScript.
//..Es existiert ein Array mit gültigen Name-Passwort-Kombinationen (siehe Code-Snippet).

//..Der Name des/der aktuell eingeloggten Benutzer:in wird auf der Seite angezeigt.

//! Cookie fehlt
//..Bei erfolgreichem Login wird ein Cookie gesetzt. Wenn das Cookie gesetzt ist, soll der/die User:in sich nicht nochmal einloggen müssen.
//..Ein Klick auf die Schaltfläche “Logout” entfernt das Cookie und die Seite wird verlassen.

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
const bodyElement = document.querySelector("#body")

//Login Daten auswerten
function evaluateUserInput() {
  if (userNameInput && passwordInput) {
    const userNameValue = userNameInput.value;
    const passwordValue = passwordInput.value;

    allUserData.forEach((user) => {
      if (
        userNameValue.toLowerCase() === user.userName &&
        passwordValue === user.password
      ) {
        if (loginFormElement && welcomeUserElement) {
          loginFormElement.className = "opacity-0";
          welcomeUserElement.textContent += `${user.userName}`;
        }
      } else if (
        userNameValue.toLowerCase() !== user.userName &&
        passwordValue === user.password
      ) {
        if (wrongInputOutput) {
          wrongInputOutput.textContent = "*user does not exist";
        }
      } else if (
        userNameValue.toLowerCase() === user.userName &&
        passwordValue !== user.password
      ) {
        if (wrongInputOutput) {
          wrongInputOutput.textContent = "*password is wrong";
        }
      } else {
        if (wrongInputOutput) {
          wrongInputOutput.textContent =
            "*either password or username is wrong";
        }
      }
    });
  }
}

//login
submitButton?.addEventListener("click", (event) => {
  event.preventDefault();
  evaluateUserInput();
});

//logout zurück zur Startseite
logoutElement?.addEventListener("click", () => {
  if (loginFormElement) {
    loginFormElement.className = "opacity-1";
  }
});

//secret Button Event
secretButton?.addEventListener("click", ()=> {
  if (bodyElement) {
    bodyElement.innerHTML = "";
    bodyElement.innerHTML = "VIRUS VIRUS VIRUS - 🤡 you deleted all your data 🤡 - VIRUS VIRUS VIRUS"
    bodyElement.className = "text-center text-8xl text-bright-red"
  }
})