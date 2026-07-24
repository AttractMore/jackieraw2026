/**
 * Handle the modal menu
 */
const menu_button = document.querySelector("header .menu-btn");
const menu_dialog = document.getElementById("modal-menu");
const menu_dialog_close = document.querySelector("#modal-menu .close-btn");

menu_button.addEventListener("click", (event) => {
  menu_dialog.showModal();
});

menu_dialog_close.addEventListener("click", (event) => {
  menu_dialog.close();
});
