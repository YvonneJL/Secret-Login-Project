# Secret Content Login Page



Das Projekt „Secret Content Login Page“ wurde im Rahmen des sechsmonatigen Web-Development-Kurses während des „TypeScript“-Moduls entwickelt. Ziel dieses Projekts war es, meine neu erlernten Fähigkeiten in der Programmiersprache TypeScript zu demonstrieren. 
Auf dieser Seite müssen Benutzer*innen ihre Zugangsdaten eingeben (Benutzername: user / Passwort: password), um Zugriff auf den geschützten Bereich zu erhalten. Nach erfolgreichem Login wird der Benutzername im localStorage des Browsers gespeichert, sodass eine erneute Anmeldung bei einem späteren Besuch nicht erforderlich ist. Die gespeicherten Daten werden jedoch gelöscht, sobald der Benutzer die "Logout"-Funktion verwendet.
Mit dem Drücken des "Submit"-Buttons wird die Login-Seite verborgen, und der Benutzer wird auf die geschützte Seite "weitergeleitet".In Wirklichkeit verlässt der Benutzer jedoch niemals die aktuelle Seite.
Bist du bereit, den geheimen Inhalt freizuschalten? 😉

## Table of Contents 

- [Über das Projekt](#über-das-projekt)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Voraussetzungen](#voraussetzungen)
  - [Installation](#installation)
- [Design](#design)
- [Deployment](#deployment)

## Über das Projekt

Für die Entwicklung dieses Projekts habe ich Visual Studio Code als Entwicklungsumgebung verwendet und die Website unter Verwendung von HTML sowie Tailwind CSS gestaltet. Die Logik für das Login-System, das Speichern des Benutzernamens im LocalStorage und die Implementierung der „Logout“-Funktion habe ich in TypeScript umgesetzt. Darüber hinaus wird die Benutzeranmeldung über eine POST-Anfrage an eine API abgeglichen, um sicherzustellen, dass die eingegebenen Zugangsdaten korrekt sind.

Nach erfolgreichem Login wird der Benutzername im LocalStorage gespeichert, sodass der Benutzer beim erneuten Laden der Seite nicht erneut eingeloggt werden muss. Die API gibt den Namen des Benutzers zurück, der daraufhin auf der Seite angezeigt wird. Beim Drücken des „Submit“-Buttons wird die Login-Seite ausgeblendet, während der Benutzer scheinbar die Seite verlässt – tatsächlich bleibt der Benutzer jedoch auf derselben Seite. Wenn der Nutzer die „Logout“-Funktion betätigt, wird der LocalStorage gelöscht und der Benutzer wird zurück zur Login-Seite geführt.

## Tech Stack

**Markup:**  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  

**Styling:**  
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  

**IDE:**  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

**Build Tool:**  
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) 

**TS:**<br/>
![Typescript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

**Version Control:**  
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 

**Design:**  
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)


## Getting Startet

Hier ist eine Anleitung, wie du das "Secret Content Login Page"-Projekt auf deinem lokalen Rechner einrichtest und ausführst:

### Voraussetzungen

Folgende Programme solltest du installiert haben:

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/download)
- [Vite](https://v5.vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

### Installation

1. **Clone das "Repository":**
   ```bash
   git clone https://github.com/YvonneJL/Secret-Login-Project
   ```

### Ausführen des Projekts

2. **Öffne das Projekt und installiere Vite und Tailwind CSS, indem du den Instruktionen auf den oben verlinkten Webseiten folgst :**
 
Alles ist eingerichtet! Nun kannst du das "Secret Content Login Page"-Projekt erkunden und überlegen, ob du den "Secret Content" sehen möchtest🤡.

## Design

Das Design wurde bereitgestellt und mit Figma erstellt. Die erforderlichen Elemente sowie die vorgegebenen Farben habe ich extrahiert, um sie in das Projekt zu integrieren und das Design exakt nach der Vorlage umzusetzen. 



## Deployment

Hier gelangst du direkt zur Webseite
- [Secret Content Login Page](secret-login-project.vercel.app)
