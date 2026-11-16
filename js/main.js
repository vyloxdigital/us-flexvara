/* FlexVara — us-flexvara.vercel.app */
(function () {
  "use strict";

  /* Mobile menu */
  var btn = document.querySelector(".menu-btn");
  var list = document.getElementById("menu-list");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  /* Order dock: appears once the hero buttons leave, hides over the packages. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var gone = false;
    var onPacks = false;
    function sync() {
      dock.classList.toggle("up", gone && !onPacks);
    }
    var hero = document.getElementById("hero-ctas");
    if (hero) {
      new IntersectionObserver(
        function (en) {
          gone = !en[0].isIntersecting && en[0].boundingClientRect.top < 0;
          sync();
        },
        { threshold: 0 }
      ).observe(hero);
    }
    var packs = document.getElementById("packs");
    if (packs) {
      new IntersectionObserver(
        function (en) {
          onPacks = en[0].isIntersecting;
          sync();
        },
        { threshold: 0 }
      ).observe(packs);
    }
  }
})();
