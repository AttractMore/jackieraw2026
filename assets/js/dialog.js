/**
 * Handle the modal menu
 */

const dialog = document.querySelector("dialog");

if (typeof dialog.showModal === "function") {
  // Load polyfill script
  const polyfill = document.createElement("script");
  polyfill.type = "text/javascript";
  polyfill.src = "/js/dialog-polyfill.js";
  document.body.append(polyfill);

  // Register polyfill on dialog element once the script has loaded
  polyfill.onload = () => {
    dialogPolyfill.registerDialog(dialog);
  };

  // Load polyfill CSS styles
  const polyfillStyles = document.createElement("link");

  polyfillStyles.rel = "stylesheet";
  polyfillStyles.href = "/css/dialog-polyfill.css";
  document.head.append(polyfillStyles);
}

const menu_button = document.querySelector("header .menu-btn");
const menu_dialog = document.getElementById("modal-menu");
const menu_dialog_close = document.querySelector("#modal-menu .close-btn");

menu_button.addEventListener("click", (event) => {
  menu_dialog.showModal();
});

menu_dialog_close.addEventListener("click", (event) => {
  menu_dialog.close();
});
