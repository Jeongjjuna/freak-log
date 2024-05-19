document.addEventListener("DOMContentLoaded", function() {
  const switchEl = document.getElementById("switch");

  switchEl.addEventListener("change", function(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  });
});
