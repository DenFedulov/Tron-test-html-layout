function toggleNavMenu() {
  var e = document.querySelector(".js-menu-btn");
  e.classList.contains("active")
    ? (e.classList.remove("active"),
      document.querySelector("body").classList.remove("lateral-menu"),
      (document.querySelector(".horizontal-slide-links").style.visibility =
        "visible"),
      l.a.mobile() &&
        (document.querySelector('[role="main"]').style.display = "block"))
    : (e.classList.add("active"),
      document.querySelector("body").classList.add("lateral-menu"),
      (document.querySelector(".horizontal-slide-links").style.visibility =
        "hidden"));
}

$(function () {
  $(".js-menu-btn").click(toggleNavMenu);
  $(".js-menu-close-btn").click(toggleNavMenu);
});
