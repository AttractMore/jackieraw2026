/**
 * @description - Set target=_blank on all external links
 */
const body = document.querySelector("body");
let links = body.getElementsByTagName("a");

for (let i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = "_blank";
    links[i].rel = "noopener";
  }
}
/**
 * @description - Set up main navigation
 * @source - https://web.dev/articles/website-navigation
 */
const nav = document.querySelector(".site-head__nav");
const head = document.querySelector(".site-head__inner");
const button = head.querySelector(".nav-burger");
const siteOverlay = body.querySelector(".site-overlay");
button.addEventListener("click", (e) => {
  const isOpen = button.getAttribute("aria-expanded") === "false";

  button.setAttribute("aria-expanded", isOpen);
  nav.setAttribute("aria-expanded", isOpen);
  isOpen ? body.classList.add("navOpen") : body.classList.remove("navOpen");
});

body.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    button.setAttribute("aria-expanded", false);
    nav.setAttribute("aria-expanded", false);
    body.classList.remove("navOpen");
    button.focus();
  }
});
siteOverlay.addEventListener("click", (e) => {
  button.setAttribute("aria-expanded", false);
  nav.setAttribute("aria-expanded", false);
  body.classList.remove("navOpen");
  button.focus();
});
