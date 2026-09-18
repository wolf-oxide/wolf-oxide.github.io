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
    label: "GitHub",
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
  },
  {
    img: "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 160 400 220">' +
      '<path fill="#dcae4f" d="m 402.50887,170.55046 -81.5664,38.27539 -0.61719,-0.58008 -2.91797,-11.58593 C 293.8976,179.50285 277.49128,175.61618 235.42098,173.92741 l -21.89843,25.87305 c -23.07679,0.56769 -49.19966,4.88856 -76.64844,16.12109 -46.84037,19.16794 -86.10156,98.13477 -86.10156,98.13477 4.32537,3.68331 9.26555,7.00074 14.58398,10.08399 l 0.0625,0.1582 c 0,0 0.11097,-0.0661 0.11523,-0.0684 33.56003,19.37979 85.96935,26.96395 148.30274,23.11328 l -0.0371,0.006 c 8.17965,-0.56606 24.04432,11.20992 38.42578,16.58984 44.82265,-4.93738 89.71406,-14.09865 114.08594,-22.12695 2.62612,-0.86506 6.24672,-14.00387 11.67969,-17.32227 l 46.42773,-2.36132 C 407.60626,276.66582 399.64055,229.27571 402.50887,170.55046 Z"/>' +
      '<g fill="none" stroke="#5c4d38" stroke-width="12.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="m 303.50267,217.012 99.0062,-46.46154 c -2.86832,58.72525 5.09834,106.11554 21.91111,151.57821 l -81.96161,4.17008 C 214.63603,358.87132 99.729364,355.74402 50.773574,314.05526 c 0,0 39.26097,-78.96537 86.101336,-98.1333 90.52776,-37.04559 166.62776,1.09004 166.62776,1.09004 z"/>' +
      '<path d="m 213.52282,199.80104 21.89923,-25.87418 c 42.0703,1.68877 58.47633,5.57601 81.98604,22.733 l 2.91733,11.58513"/>' +
      '<path d="m 213.79994,347.34995 c 8.17965,-0.56606 24.04412,11.20925 38.42558,16.58917 44.82265,-4.93738 89.71547,-14.09981 114.08735,-22.12811 2.6671,-0.87856 6.35656,-14.41456 11.93206,-17.4681"/>' +
      '<path d="m 170.14272,242.91005 c 12.03113,1.81089 14.01568,17.43901 5.06051,26.79105 11.08849,2.69725 12.1304,18.75378 2.6791,25.60038 8.55823,4.01867 8.33501,19.87007 -0.89301,24.11197"/>' +
      '<path d="m 204.37571,235.46811 c 12.31134,2.17868 17.26876,17.28817 8.81325,26.54905 10.79534,2.83628 13.79127,21.82937 -0.56481,28.9698 9.85283,8.82801 9.21615,20.28718 -1.69944,25.74739"/>' +
      '<path d="m 251.70663,227.72843 c 10.44522,5.69318 14.01443,18.36765 5.65586,28.86702 10.01153,8.47631 11.4733,23.03544 1.48841,30.07335 9.24367,11.67673 4.27928,28.01937 -9.52569,30.39947"/>' +
      '<ellipse cx="112.28503" cy="270.22626" rx="11.366488" ry="10.926684" fill="#c69227"/>' +
      '<path d="m 56.837294,302.82585 c 0,0 22.066646,-4.68427 23.286346,3.19997 1.53686,9.934 -14.703546,18.27229 -14.703546,18.27229"/>' +
      '<path d="m 271.79993,186.3511 -7.51639,10.49322"/>' +
      '<path d="m 251.4089,181.73709 -8.18611,11.83273"/>' +
      '<path d="m 290.70248,191.59771 -7.66522,11.27458"/>' +
      '<path d="M 242.66464,344.83276 265.251,354.98602"/>' +
      '<path d="m 276.37618,340.17728 23.40549,7.96214"/>' +
      '<path d="m 316.00519,336.23231 23.29334,7.92601"/>' +
      '<path d="m 382.13393,209.81552 -60.20028,30.9421"/>' +
      '<path d="m 327.65183,268.96334 60.28874,-12.62943"/>' +
      '<path d="m 329.30082,298.01105 41.25614,2.10492"/>' +
      '</g></svg>')
  }
];

/* ---------------- swimming logic ---------------- */

const tank = document.getElementById("tank");

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

const fishObjs = [];

FISHES.forEach((data, i) => {
  const el = document.createElement(data.url ? "a" : "div");
  el.className = "fish";
  if (data.big) el.classList.add("fish-big");
  if (data.url) {
    el.href = data.url;
    el.target = data.url.startsWith("#") ? "_self" : "_blank";
    el.rel = "noopener noreferrer";
  }
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
