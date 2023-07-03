
let languagePrompt = window.prompt("Enter a language code (es, de, en, fr):");

let translatedMessage = "";

if (languagePrompt === "es") {
  translatedMessage = "Hola mundo";
} else if (languagePrompt === "de") {
  translatedMessage = "Hallo Welt";
} else if (languagePrompt === "fr") {
  translatedMessage = "Bonjour le monde";
} else {
  translatedMessage = "Hello World";
}
window.write(`Hello World translated in ${languagePrompt}  is: ${translatedMessage}`);

