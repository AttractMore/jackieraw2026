var domains = [
  "aol.com",
  "aol.co.uk",
  "facebook.com",
  "gmail.com",
  "googlemail.com",
  "google.com",
  "hotmail.com",
  "hotmail.co.uk",
  "mac.com",
  "me.com",
  "mail.com",
  "msn.com",
  "live.com",
  "yahoo.com",
  "yahoo.co.uk",
  "zoho.com",
  "btinternet.com",
  "virginmedia.com",
  "blueyonder.co.uk",
  "freeserve.co.uk",
  "live.co.uk",
  "ntlworld.com",
  "o2.co.uk",
  "orange.net",
  "sky.com",
  "talktalk.co.uk",
  "tiscali.co.uk",
  "virgin.net",
  "bt.com",
  "hotmail.es",
  "yahoo.es",
  "outlook.com",
];
var topLevelDomains = ["co.uk", "com", "net", "org", "info", "edu", "gov", "org.uk", "es", "uk", "eu", "ca"];

var email = document.getElementById("email"),
  emailSuggestion = document.getElementsByClassName("email-suggestion")[0],
  emailSuggestedEmail = document.getElementsByClassName("suggested-email")[0],
  emailSuggestedAddress = document.getElementsByClassName("address")[0],
  emailSuggestedDomain = document.getElementsByClassName("domain")[0];
email.addEventListener("blur", function () {
  Mailcheck.run({
    email: email.value,
    domains: domains, // optional
    topLevelDomains: topLevelDomains, // optional
    suggested: function (suggestion) {
      // callback code
      emailSuggestedAddress.innerHTML = suggestion.address;
      emailSuggestedDomain.innerHTML = suggestion.domain;
      emailSuggestion.classList.add("open");
      emailSuggestedEmail.addEventListener("click", function () {
        email.value = suggestion.full;
        emailSuggestion.classList.remove("open");
      });
    },
    empty: function () {
      // callback code
      emailSuggestion.classList.remove("open");
    },
  });
});
