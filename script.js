/* =========================================================
   ADD A NEW FISH HERE!
   ---------------------------------------------------------
   Just add an entry to the FISHES array:

   {
     img:   "fish/myfish.png",   // path to the image
     label: "my blog",           // text shown under the fish
     url:   "https://..."        // link it swims to
   }

   Then drop the image in the fish/ folder. Done.
   ========================================================= */

const FISHES = [
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M6 20 Q20 4 40 14 L54 4 L50 20 L54 36 L40 26 Q20 36 6 20 Z" fill="#ff8c00" stroke="#a34a00" stroke-width="2"/>' +
      '<circle cx="20" cy="17" r="4" fill="#fff"/><circle cx="20" cy="17" r="2" fill="#000"/>' +
      '<path d="M26 20 Q34 24 42 20" stroke="#a34a00" stroke-width="2" fill="none"/></svg>'),
    label: "My github",
    url: "https://github.com/wolf-oxide"
  },
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M6 20 Q20 4 40 14 L54 4 L50 20 L54 36 L40 26 Q20 36 6 20 Z" fill="#ff4f9a" stroke="#8f1e56" stroke-width="2"/>' +
      '<circle cx="20" cy="17" r="4" fill="#fff"/><circle cx="20" cy="17" r="2" fill="#000"/>' +
      '<path d="M26 20 Q34 24 42 20" stroke="#8f1e56" stroke-width="2" fill="none"/></svg>'),
    label: "Twitter (main)",
    url: "https://x.com/wolf_oxide"
  },
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M6 20 Q20 4 40 14 L54 4 L50 20 L54 36 L40 26 Q20 36 6 20 Z" fill="#39d353" stroke="#14641f" stroke-width="2"/>' +
      '<circle cx="20" cy="17" r="4" fill="#fff"/><circle cx="20" cy="17" r="2" fill="#000"/>' +
      '<path d="M26 20 Q34 24 42 20" stroke="#14641f" stroke-width="2" fill="none"/></svg>'),
    label: "Twitter (sub)",
    url: "https://x.com/wolf_quartz"
  },
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M6 20 Q20 4 40 14 L54 4 L50 20 L54 36 L40 26 Q20 36 6 20 Z" fill="#ffe95c" stroke="#8f7a00" stroke-width="2"/>' +
      '<circle cx="20" cy="17" r="4" fill="#fff"/><circle cx="20" cy="17" r="2" fill="#000"/>' +
      '<path d="M26 20 Q34 24 42 20" stroke="#8f7a00" stroke-width="2" fill="none"/></svg>'),
    label: "Bluesky",
    url: "https://bsky.app/profile/wolf-oxide.bsky.social"
  }
];

/* ---------------- swimming logic ---------------- */

const tank = document.getElementById("tank");

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

const fishObjs = [];

FISHES.forEach((data, i) => {
  const el = document.createElement("a");
  el.href = data.url;
  el.className = "fish";
  el.target = data.url.startsWith("#") ? "_self" : "_blank";
  el.rel = "noopener noreferrer";
  el.innerHTML = '<img src="' + data.img + '" alt=""><span class="label"></span>';
  el.querySelector(".label").textContent = data.label;
  tank.appendChild(el);

  fishObjs.push({
    el,
    x: rand(20, tank.clientWidth - 110),
    y: 40 + i * (tank.clientHeight - 140) / FISHES.length,
    vx: rand(0.4, 1.1) * (Math.random() < 0.5 ? -1 : 1),
    pause: 0,
    hold: false
  });
});

// pause a fish while hovered or keyboard-focused so it's easier to click
fishObjs.forEach(f => {
  f.el.addEventListener("mouseenter", () => { f.hold = true; });
  f.el.addEventListener("mouseleave", () => { f.hold = false; });
  f.el.addEventListener("focus", () => { f.hold = true; });
  f.el.addEventListener("blur", () => { f.hold = false; });
});

let W = tank.clientWidth, H = tank.clientHeight;
window.addEventListener("resize", () => {
  W = tank.clientWidth;
  H = tank.clientHeight;
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let ticking = false;

function tick() {
  if (reduceMotion.matches) {
    // static aquarium: fish stay put, but keep links visible & clickable
    ticking = false;
    fishObjs.forEach(f => {
      f.el.classList.toggle("flip", false);
      f.el.style.left = f.x + "px";
      f.el.style.top = f.y + "px";
    });
    return;
  }
  ticking = true;
  fishObjs.forEach(f => {
    if (f.hold) {
      // hovered/focused: hold still so it can be clicked
    } else if (f.pause > 0) {
      f.pause--;
    } else {
      if (Math.random() < 0.0008) f.pause = rand(30, 70) | 0; // occasionally stop & float
      f.x += f.vx;
    }

    // bounce off glass
    if (f.x < 4) { f.x = 4; f.vx = Math.abs(f.vx); }
    if (f.x > W - 78) { f.x = W - 78; f.vx = -Math.abs(f.vx); }

    // sprite drawn facing LEFT; flip when moving right
    f.el.classList.toggle("flip", f.vx > 0);
    f.el.style.left = f.x + "px";
    f.el.style.top = f.y + "px";
  });
  requestAnimationFrame(tick);
}
tick();

// resume/pause when the OS setting changes mid-session
if (reduceMotion.addEventListener) {
  reduceMotion.addEventListener("change", () => {
    if (!reduceMotion.matches && !ticking) tick();
  });
}

/* ---------------- bubbles ---------------- */
for (let i = 0; i < 18; i++) {
  const b = document.createElement("div");
  b.className = "bubble";
  const s = rand(4, 14);
  b.style.width = b.style.height = s + "px";
  b.style.left = rand(0, 100) + "%";
  b.style.animationDuration = rand(5, 14) + "s";
  b.style.animationDelay = rand(0, 12) + "s";
  document.getElementById("bubbles").appendChild(b);
}

/* ---------------- retro hit counter ---------------- */
document.getElementById("hitcount").textContent = "-32768";
