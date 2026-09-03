/* Vasyl Rakivnenko — AI Engineer. Progressive enhancement only:
   every section is readable and navigable with this file absent. */
(function () {
  "use strict";

  var on = function (el, ev, fn, opts) {
    if (el) el.addEventListener(ev, fn, opts);
  };
  var $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ---------------------------------------------------------- scroll -- */

  var nav = $(".nav");
  var bar = $(".progress");
  // The transparent-over-hero treatment only applies where there IS a hero.
  var overlaysHero = !!$(".hero");

  function onScroll() {
    var y = window.scrollY;
    if (nav) nav.classList.toggle("is-solid", !overlaysHero || y > 60);
    if (bar) {
      var max = document.body.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    }
  }
  on(window, "scroll", onScroll, { passive: true });
  on(window, "resize", onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------- reveal on scroll -- */

  var revealables = $$("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var revealer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
          setTimeout(function () {
            el.classList.add("is-in");
          }, delay);
          revealer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    revealables.forEach(function (el) {
      revealer.observe(el);
    });
  }

  /* ------------------------------------------------ sectors dropdown -- */

  var drop = $(".nav__drop");
  if (drop) {
    var dropBtn = $(".nav__drop-btn", drop);
    var closeTimer = null;
    var openDrop = function () {
      clearTimeout(closeTimer);
      drop.classList.add("is-open");
      if (dropBtn) dropBtn.setAttribute("aria-expanded", "true");
    };
    var closeDrop = function (delay) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(
        function () {
          drop.classList.remove("is-open");
          if (dropBtn) dropBtn.setAttribute("aria-expanded", "false");
        },
        delay === undefined ? 120 : delay,
      );
    };
    on(drop, "mouseenter", openDrop);
    on(drop, "mouseleave", function () {
      closeDrop();
    });
    on(dropBtn, "click", function (e) {
      e.preventDefault();
      drop.classList.contains("is-open") ? closeDrop(0) : openDrop();
    });
    on(drop, "focusin", openDrop);
    on(drop, "focusout", function (e) {
      if (!drop.contains(e.relatedTarget)) closeDrop(0);
    });
    on(document, "keydown", function (e) {
      if (e.key === "Escape" && drop.classList.contains("is-open")) {
        closeDrop(0);
        if (dropBtn) dropBtn.focus();
      }
    });
  }

  /* -------------------------------------------------- mobile drawer -- */

  var drawer = $(".drawer");
  var burger = $(".nav__burger");
  if (drawer && burger) {
    var setDrawer = function (open) {
      drawer.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    on(burger, "click", function () {
      setDrawer(!drawer.classList.contains("is-open"));
    });
    on($(".drawer__scrim", drawer), "click", function () {
      setDrawer(false);
    });
    on($(".drawer__close", drawer), "click", function () {
      setDrawer(false);
    });
    $$("a", drawer).forEach(function (a) {
      on(a, "click", function () {
        setDrawer(false);
      });
    });
    on(document, "keydown", function (e) {
      if (e.key === "Escape") setDrawer(false);
    });

    var subToggle = $(".drawer__toggle", drawer);
    var sub = $(".drawer__sub", drawer);
    on(subToggle, "click", function () {
      var open = subToggle.getAttribute("aria-expanded") === "true";
      subToggle.setAttribute("aria-expanded", String(!open));
      if (sub) sub.hidden = open;
    });
  }

  /* ------------------------------------------- card spotlight cursor -- */

  $$(".card, .project").forEach(function (card) {
    on(
      card,
      "mousemove",
      function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty(
          "--mx",
          ((e.clientX - r.left) / r.width) * 100 + "%",
        );
        card.style.setProperty(
          "--my",
          ((e.clientY - r.top) / r.height) * 100 + "%",
        );
      },
      { passive: true },
    );
  });

  /* ----------------------------------------------- the stack diagram -- */

  var layers = $$(".layer");
  var panel = $(".layerpanel");
  if (layers.length && panel) {
    var render = function (btn) {
      layers.forEach(function (l) {
        l.classList.toggle("is-active", l === btn);
        l.setAttribute("aria-selected", String(l === btn));
      });
      var chips = (btn.getAttribute("data-stack") || "")
        .split("|")
        .filter(Boolean)
        .map(function (c) {
          return '<span class="chip">' + c + "</span>";
        })
        .join("");
      panel.innerHTML =
        '<div class="layerpanel__body">' +
        '<p class="layerpanel__tag">Layer ' +
        btn.getAttribute("data-num") +
        " · " +
        btn.getAttribute("data-name") +
        "</p>" +
        "<h3>" +
        btn.getAttribute("data-headline") +
        "</h3>" +
        "<p>" +
        btn.getAttribute("data-detail") +
        "</p>" +
        '<div class="layerpanel__chips">' +
        chips +
        "</div>" +
        "</div>";
    };
    layers.forEach(function (btn) {
      on(btn, "click", function () {
        render(btn);
      });
      on(btn, "mouseenter", function () {
        render(btn);
      });
      on(btn, "focus", function () {
        render(btn);
      });
    });
    render(layers[0]);
  }

  /* ------------------------------------------------- count-up numbers -- */

  var counters = $$("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var counterObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          counterObs.unobserve(el);
          var target = parseFloat(el.getAttribute("data-count"));
          var suffix = el.getAttribute("data-suffix") || "";
          var started = 0;
          var step = function (now) {
            if (!started) started = now;
            var t = Math.min((now - started) / 1400, 1);
            var eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 },
    );
    counters.forEach(function (el) {
      counterObs.observe(el);
    });
  }

  /* ------------------------------------------------- speaking gallery -- */

  var gallery = $("[data-gallery]");
  if (gallery) {
    var photos = JSON.parse(gallery.getAttribute("data-gallery"));
    var grid = $(".gallery__grid", gallery);
    var dots = $(".gallery__dots", gallery);
    var PER = 4;
    var offset = 0;

    var paint = function () {
      grid.innerHTML = "";
      for (var i = 0; i < PER; i++) {
        var p = photos[(offset + i) % photos.length];
        var fig = document.createElement("button");
        fig.type = "button";
        fig.className = "gallery__cell";
        fig.setAttribute("aria-label", "Open photo: " + p.alt);
        fig.innerHTML =
          '<img src="' +
          p.src +
          '" alt="' +
          p.alt +
          '" loading="lazy">' +
          '<figcaption aria-hidden="true">' +
          p.alt +
          "</figcaption>";
        (function (photo) {
          on(fig, "click", function () {
            openLightbox(photo);
          });
        })(p);
        grid.appendChild(fig);
      }
      $$("button", dots).forEach(function (d, i) {
        d.setAttribute("aria-current", String(i === offset));
      });
    };

    photos.forEach(function (_, i) {
      var d = document.createElement("button");
      d.type = "button";
      d.setAttribute("aria-label", "Jump to photo " + (i + 1));
      on(d, "click", function () {
        offset = i;
        paint();
      });
      dots.appendChild(d);
    });

    on($("[data-gallery-prev]", gallery), "click", function () {
      offset = (offset - 1 + photos.length) % photos.length;
      paint();
    });
    on($("[data-gallery-next]", gallery), "click", function () {
      offset = (offset + 1) % photos.length;
      paint();
    });
    paint();
  }

  /* -------------------------------------------------------- lightbox -- */

  var lightbox = $(".lightbox");
  function openLightbox(photo) {
    if (!lightbox) return;
    $("img", lightbox).src = photo.src;
    $("img", lightbox).alt = photo.alt;
    $("p", lightbox).textContent = photo.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $(".lightbox__close", lightbox).focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }
  if (lightbox) {
    on(lightbox, "click", function (e) {
      if (e.target === lightbox || e.target.closest(".lightbox__close"))
        closeLightbox();
    });
    on(document, "keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  /* ------------------------------------------------- portfolio filter -- */

  var portfolio = $("[data-portfolio]");
  if (portfolio) {
    var filters = $$(".filter", portfolio);
    var projects = $$(".project", portfolio);
    var empty = $(".projects__empty", portfolio);

    var apply = function (sector, push) {
      filters.forEach(function (f) {
        f.setAttribute(
          "aria-pressed",
          String(f.getAttribute("data-sector") === sector),
        );
      });
      var shown = 0;
      projects.forEach(function (p) {
        var match =
          sector === "all" || p.getAttribute("data-sector") === sector;
        p.hidden = !match;
        if (match) {
          shown++;
          p.style.animation = "none";
          // force reflow so the entrance animation replays on every filter
          void p.offsetWidth;
          p.style.animation = "";
        }
      });
      if (empty) empty.hidden = shown > 0;
      if (push) {
        var url =
          sector === "all"
            ? window.location.pathname + "#portfolio"
            : window.location.pathname + "?sector=" + sector + "#portfolio";
        history.replaceState(null, "", url);
      }
    };

    filters.forEach(function (f) {
      on(f, "click", function () {
        apply(f.getAttribute("data-sector"), true);
      });
    });

    var initial = new URLSearchParams(window.location.search).get("sector");
    apply(
      initial &&
        projects.some(function (p) {
          return p.getAttribute("data-sector") === initial;
        })
        ? initial
        : "all",
      false,
    );
  }
})();
