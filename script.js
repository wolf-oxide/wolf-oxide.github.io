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
      '<path d="M2 20 Q8 13 24 13 L48 15 L60 7 L55 20 L60 33 L48 25 L24 27 Q8 27 2 20 Z" fill="#3f474f" stroke="#8b949e" stroke-width="2"/>' +
      '<path d="M24 13 L27 8 L32 13 Z" fill="#3f474f" stroke="#8b949e" stroke-width="1.5"/>' +
      '<path d="M18 25 L21 30 L26 25 Z" fill="#3f474f" stroke="#8b949e" stroke-width="1.5"/>' +
      '<path d="M10 16 Q8 20 10 24" stroke="#8b949e" stroke-width="2" fill="none"/>' +
      '<path d="M6 21 Q20 18 40 19" stroke="#8b949e" stroke-width="1.5" fill="none"/>' +
      '<circle cx="9" cy="17" r="3" fill="#fff"/><circle cx="9" cy="17" r="1.5" fill="#000"/></svg>'),
    label: "My GitHub",
    url: "https://github.com/wolf-oxide"
  },
  {
    big: true,
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M46 20 Q54 10 62 4 Q58 12 58 20 Q58 28 62 36 Q54 30 46 20 Z" fill="#1d9bf0" stroke="#0a5c94" stroke-width="2"/>' +
      '<path d="M26 10 Q30 0 38 2 Q34 6 36 10 Z" fill="#1d9bf0" stroke="#0a5c94" stroke-width="2"/>' +
      '<path d="M2 22 Q8 10 24 10 Q42 10 46 20 Q42 30 24 30 Q8 30 2 22 Z" fill="#1d9bf0" stroke="#0a5c94" stroke-width="2"/>' +
      '<path d="M24 28 L30 37 L36 28 Z" fill="#1d9bf0" stroke="#0a5c94" stroke-width="2"/>' +
      '<path d="M14 16 Q12 20 14 24 M18 16 Q16 20 18 24 M22 16 Q20 20 22 24" stroke="#0a5c94" stroke-width="2" fill="none"/>' +
      '<path d="M3 22 Q10 27 20 26" stroke="#0a5c94" stroke-width="2" fill="none"/>' +
      '<circle cx="10" cy="17" r="3.5" fill="#fff"/><circle cx="10" cy="17" r="1.8" fill="#000"/></svg>'),
    label: "Twitter (main)",
    url: "https://x.com/wolf_oxide"
  },
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M6 20 Q20 4 40 14 L54 4 L50 20 L54 36 L40 26 Q20 36 6 20 Z" fill="#2b2b2b" stroke="#5c5c5c" stroke-width="2"/>' +
      '<circle cx="20" cy="17" r="4" fill="#fff"/><circle cx="20" cy="17" r="2" fill="#000"/>' +
      '<path d="M26 20 Q34 24 42 20" stroke="#5c5c5c" stroke-width="2" fill="none"/></svg>'),
    label: "Twitter (sub)",
    url: "https://x.com/wolf_quartz"
  },
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 40">' +
      '<path d="M6 20 Q20 4 40 14 L54 4 L50 20 L54 36 L40 26 Q20 36 6 20 Z" fill="#0085ff" stroke="#0057a3" stroke-width="2"/>' +
      '<circle cx="20" cy="17" r="4" fill="#fff"/><circle cx="20" cy="17" r="2" fill="#000"/>' +
      '<path d="M26 20 Q34 24 42 20" stroke="#0057a3" stroke-width="2" fill="none"/></svg>'),
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
  if (data.big) el.classList.add("fish-big");
  el.target = data.url.startsWith("#") ? "_self" : "_blank";
  el.rel = "noopener noreferrer";
  el.innerHTML = '<img src="' + data.img + '" alt=""><span class="label"></span>';
  el.querySelector(".label").textContent = data.label;
  tank.appendChild(el);

  fishObjs.push({
    el,
    big: !!data.big,
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
