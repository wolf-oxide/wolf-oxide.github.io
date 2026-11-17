/* =========================================================
   ADD A NEW FISH HERE!
   ---------------------------------------------------------
   Add an entry to the FISHES array:

   {
     img:   "fish/myfish.png",   // path to the image
     label: "my blog",           // text shown under the fish
     url:   "https://..."        // link it swims to
   }

   Add `big: true` for a larger fish.
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

/* ---------------- decorative sea life ---------------- */

const svgURI = (viewBox, inner) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + viewBox + '">' + inner + '</svg>');

const SEA_LIFE = {
  sardines: {
    width: 150, maxVW: 0.34, maxVH: 0.18, aspect: 0.615,
    speed: 0.55, bob: 5, bobSpeed: 1.2, opacity: 0.92,
    img: svgURI("0 0 130 80", `
      <defs>
        <g id="sardine">
          <path d="M0 6 Q10 -1 24 2 L38 0 L35 6 L38 13 L24 11 Q10 13 0 6 Z"
                fill="#7fb6cf" stroke="#2f5b70" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M4 8 Q13 9 24 8 L31 7" fill="none" stroke="#d7eef6" stroke-width="1.8" opacity=".65"/>
          <circle cx="8" cy="5.5" r="1.3" fill="#12303e"/>
        </g>
      </defs>
      <use href="#sardine" transform="translate(6 8) rotate(-8)"/>
      <use href="#sardine" transform="translate(48 30) rotate(5) scale(.92)"/>
      <use href="#sardine" transform="translate(18 54) rotate(-4) scale(.82)"/>
      <use href="#sardine" transform="translate(76 56) rotate(8) scale(.74)"/>
      <use href="#sardine" transform="translate(74 10) rotate(-2) scale(.66)"/>
    `)
  },
  anchovies: {
    width: 220, maxVW: 0.48, maxVH: 0.26, aspect: 0.65,
    speed: 0.9, bob: 4, bobSpeed: 1.7, opacity: 0.82,
    img: svgURI("0 0 200 130", `
      <defs>
        <g id="anchovy">
          <path d="M0 4 Q5 0 11 1.5 L17 0 L15 4 L17 8 L11 6.5 Q5 8 0 4 Z"/>
          <circle cx="3" cy="3.6" r=".8" fill="#2b5568"/>
        </g>
      </defs>
      <use href="#anchovy" transform="translate(14 60) rotate(-8) scale(1.15)" fill="#a9dcef"/>
      <use href="#anchovy" transform="translate(34 48) rotate(-5) scale(1)" fill="#8ed0e8"/>
      <use href="#anchovy" transform="translate(40 72) rotate(-10) scale(.9)" fill="#c6edf9" opacity=".8"/>
      <use href="#anchovy" transform="translate(56 58) rotate(-3) scale(1.1)" fill="#9ed8ee"/>
      <use href="#anchovy" transform="translate(66 38) rotate(-7) scale(.85)" fill="#7cc6e2" opacity=".75"/>
      <use href="#anchovy" transform="translate(76 78) rotate(-12) scale(.95)" fill="#a9dcef"/>
      <use href="#anchovy" transform="translate(86 52) rotate(-4) scale(1.05)" fill="#c6edf9"/>
      <use href="#anchovy" transform="translate(100 66) rotate(-9) scale(.9)" fill="#8ed0e8" opacity=".85"/>
      <use href="#anchovy" transform="translate(110 40) rotate(-2) scale(.8)" fill="#9ed8ee" opacity=".8"/>
      <use href="#anchovy" transform="translate(118 82) rotate(-8) scale(.85)" fill="#c6edf9" opacity=".78"/>
      <use href="#anchovy" transform="translate(128 56) rotate(-5) scale(1)" fill="#7cc6e2"/>
      <use href="#anchovy" transform="translate(144 70) rotate(-10) scale(.9)" fill="#a9dcef" opacity=".9"/>
      <use href="#anchovy" transform="translate(152 44) rotate(-3) scale(.8)" fill="#c6edf9" opacity=".75"/>
      <use href="#anchovy" transform="translate(164 60) rotate(-7) scale(.95)" fill="#8ed0e8"/>
      <use href="#anchovy" transform="translate(178 50) rotate(-4) scale(.75)" fill="#9ed8ee" opacity=".7"/>
      <use href="#anchovy" transform="translate(60 92) rotate(-11) scale(.8)" fill="#a9dcef" opacity=".72"/>
      <use href="#anchovy" transform="translate(94 92) rotate(-6) scale(.8)" fill="#c6edf9" opacity=".7"/>
      <use href="#anchovy" transform="translate(136 90) rotate(-8) scale(.75)" fill="#8ed0e8" opacity=".72"/>
      <use href="#anchovy" transform="translate(24 84) rotate(-7) scale(.85)" fill="#c6edf9" opacity=".75"/>
      <use href="#anchovy" transform="translate(70 24) rotate(-2) scale(.7)" fill="#9ed8ee" opacity=".65"/>
      <use href="#anchovy" transform="translate(118 24) rotate(-5) scale(.65)" fill="#a9dcef" opacity=".6"/>
      <use href="#anchovy" transform="translate(156 86) rotate(-9) scale(.7)" fill="#7cc6e2" opacity=".7"/>
    `)
  }
};

/* ---------------- setup ---------------- */

const tank = document.getElementById("tank");
const bubbles = document.getElementById("bubbles");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const rand = (min, max) => Math.random() * (max - min) + min;

const fishObjs = [];
const lifeObjs = [];
const TOP_PAD = 40;
const BOTTOM_PAD = 92; // seabed + breathing room

let W = 0;
let H = 0;

/* ---------------- build the fish ---------------- */

FISHES.forEach((data) => {
  const el = document.createElement(data.url ? "a" : "div");
  el.className = "fish" + (data.big ? " fish-big" : "");

  if (data.url) {
    el.href = data.url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  } else {
    // decorative mascot: not a link, not announced
    el.setAttribute("aria-hidden", "true");
  }

  const sprite = document.createElement("span");
  sprite.className = "fish-sprite";

  const img = document.createElement("img");
  img.src = data.img;
  img.alt = "";
  img.draggable = false;

  sprite.appendChild(img);
  el.appendChild(sprite);

  if (data.label) {
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = data.label;
    el.appendChild(label);
  }

  tank.appendChild(el);

  fishObjs.push({
    el,
    x: 0,
    y: 0,
    maxX: 0,
    vx: rand(0.35, 0.95) * (Math.random() < 0.5 ? -1 : 1),
    pause: 0,
    hold: false,
    placed: false
  });
});

let lifeKey = "";

function lifePlan() {
  // more schools on larger screens, with a couple kept even on phones
  const area = tank.clientWidth * tank.clientHeight;
  const sardines = Math.min(5, Math.max(2, Math.round(area / 280000)));
  const anchovies = Math.min(5, Math.max(2, Math.round(area / 360000)));
  const total = Math.max(sardines, anchovies);
  const plan = [];

  // alternate the two kinds so they spread across the tank instead of clumping
  for (let i = 0; i < total; i++) {
    if (i < sardines) plan.push("sardines");
    if (i < anchovies) plan.push("anchovies");
  }

  return plan;
}

function syncSeaLife() {
  const plan = lifePlan();
  const key = plan.join(",");

  if (key === lifeKey) return;
  lifeKey = key;

  lifeObjs.forEach((o) => o.el.remove());
  lifeObjs.length = 0;

  const total = plan.length;

  plan.forEach((kind, i) => {
    const template = SEA_LIFE[kind];

    // vary size, speed and opacity to give the schools some depth
    const depth = rand(0.45, 1);
    const scale = 0.72 + depth * 0.32;
    const data = {
      img: template.img,
      aspect: template.aspect,
      width: template.width * scale,
      maxVW: template.maxVW * scale,
      maxVH: template.maxVH * scale,
      speed: template.speed * (0.75 + depth * 0.35),
      bob: template.bob * (0.7 + depth * 0.5),
      bobSpeed: template.bobSpeed,
      opacity: template.opacity * (0.65 + depth * 0.35),
      y: Math.min(0.86, Math.max(0.06,
        0.10 + (i / Math.max(1, total - 1)) * 0.76 + rand(-0.025, 0.025)))
    };

    const el = document.createElement("div");
    el.className = "sea-life";
    el.setAttribute("aria-hidden", "true");
    el.style.opacity = data.opacity;

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = "";
    img.draggable = false;

    el.appendChild(img);
    tank.appendChild(el);

    lifeObjs.push({
      el,
      data,
      x: 0,
      baseY: 0,
      w: 0,
      h: 0,
      vx: data.speed * (i % 2 === 0 ? 1 : -1),
      phase: rand(0, Math.PI * 2),
      slot: i,
      total,
      placed: false
    });
  });
}

syncSeaLife();

/* ---------------- swimming ---------------- */

function measure() {
  W = tank.clientWidth;
  H = tank.clientHeight;

  // skip while hidden or laying out, so fish never pile up at the edge
  if (W < 10 || H < 10) return;

  tank.style.setProperty("--rise", (H + 80) + "px");

  const short = window.innerHeight < 620;
  const topPad = short ? 14 : TOP_PAD;
  const bottomPad = short ? 64 : BOTTOM_PAD;
  const lanes = Math.max(1, fishObjs.length - 1);

  fishObjs.forEach((f, i) => {
    const fw = f.el.offsetWidth;
    const fh = f.el.offsetHeight;
    const minY = topPad;
    const maxY = Math.max(topPad, H - bottomPad - fh);

    f.maxX = Math.max(4, W - fw - 6);
    f.y = Math.round(minY + ((maxY - minY) / lanes) * i);

    if (!f.placed) {
      // spread the first impression across the tank
      const span = f.maxX - 4;
      const base = 4 + (span * i) / Math.max(1, fishObjs.length - 1);
      f.x = Math.round(Math.min(f.maxX, Math.max(4, base + rand(-span * 0.03, span * 0.03))));
      f.placed = true;
    } else {
      f.x = Math.min(Math.max(4, f.x), f.maxX);
    }
  });

  lifeObjs.forEach((o) => {
    const w = Math.min(o.data.width, W * o.data.maxVW, (H * o.data.maxVH) / o.data.aspect);

    o.w = Math.round(w);
    o.h = Math.round(w * o.data.aspect);
    o.el.style.width = o.w + "px";

    const usable = Math.max(0, H - bottomPad - o.h);
    o.baseY = Math.round(12 + usable * o.data.y);

    if (!o.placed) {
      const slotW = (W - o.w) / Math.max(1, o.total);
      o.x = Math.min(W - o.w, Math.max(0, slotW * o.slot + rand(0, Math.max(0, slotW))));
      // start by swimming inward from whichever side they spawned on
      o.vx = Math.abs(o.vx) * (o.x < W / 2 ? 1 : -1);
      o.placed = true;
    } else if (o.x > W + 20 || o.x < -o.w - 20) {
      o.x = rand(0, Math.max(0, W - o.w));
    }

    o.el.classList.toggle("flip", o.vx > 0);
    o.el.style.transform = "translate3d(" + o.x + "px, " + o.baseY + "px, 0)";
  });
}

function draw() {
  fishObjs.forEach((f) => {
    f.el.classList.toggle("flip", f.vx > 0);
    f.el.style.left = f.x + "px";
    f.el.style.top = f.y + "px";
  });
}

// pause a link while hovered or keyboard-focused so it is easier to click
fishObjs.forEach((f) => {
  if (f.el.tagName !== "A") return;
  f.el.addEventListener("mouseenter", () => { f.hold = true; });
  f.el.addEventListener("mouseleave", () => { f.hold = false; });
  f.el.addEventListener("focus", () => { f.hold = true; });
  f.el.addEventListener("blur", () => { f.hold = false; });
});

function step(dt) {
  fishObjs.forEach((f) => {
    if (!f.hold) {
      if (f.pause > 0) {
        f.pause -= dt;
      } else {
        if (Math.random() < 0.002 * dt) f.pause = rand(40, 90); // stop & float a moment
        f.x += f.vx * dt;
      }
    }

    if (f.x < 4) { f.x = 4; f.vx = Math.abs(f.vx); }
    if (f.x > f.maxX) { f.x = f.maxX; f.vx = -Math.abs(f.vx); }
  });

  draw();
}

function stepLife(dt, t) {
  lifeObjs.forEach((o) => {
    o.x += o.vx * dt;

    if (o.vx > 0 && o.x > W + 20) o.x = -o.w - 20;
    if (o.vx < 0 && o.x < -o.w - 20) o.x = W + 20;

    const bob = Math.sin(t * o.data.bobSpeed + o.phase) * o.data.bob;

    o.el.classList.toggle("flip", o.vx > 0);
    o.el.style.transform = "translate3d(" + o.x + "px, " + (o.baseY + bob) + "px, 0)";
  });
}

let rafId = 0;
let lastTime = 0;

function frame(now) {
  if (reduceMotion.matches) {
    rafId = 0;
    draw();
    return;
  }

  if (!lastTime) lastTime = now;
  const dt = Math.min((now - lastTime) / (1000 / 60), 3);
  lastTime = now;

  step(dt);
  stepLife(dt, now / 1000);
  rafId = requestAnimationFrame(frame);
}

function start() {
  if (rafId) return;
  if (reduceMotion.matches) {
    draw();
    return;
  }
  lastTime = 0;
  rafId = requestAnimationFrame(frame);
}

function stop() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  lastTime = 0;
  draw();
}

// keep everyone inside the glass when the window changes size
let resizeFrame = 0;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    syncSeaLife();
    measure();
    draw();
  });
});

// label heights can change once webfonts arrive
document.fonts.ready.then(() => { measure(); draw(); });

measure();
draw();
start();

reduceMotion.addEventListener("change", () => {
  if (reduceMotion.matches) stop();
  else start();
});

/* ---------------- bubbles ---------------- */

function buildBubbles() {
  const count = window.innerWidth < 640 ? 12 : 20;
  bubbles.replaceChildren();

  for (let i = 0; i < count; i++) {
    const b = document.createElement("span");
    const size = rand(4, 13);

    b.className = "bubble";
    b.style.width = size.toFixed(1) + "px";
    b.style.height = size.toFixed(1) + "px";
    b.style.left = rand(0, 100).toFixed(2) + "%";
    b.style.animationDuration = rand(6, 15).toFixed(2) + "s";
    b.style.animationDelay = "-" + rand(0, 15).toFixed(2) + "s";

    bubbles.appendChild(b);
  }
}

buildBubbles();

/* ---------------- retro hit counter ---------------- */

document.getElementById("hitcount").textContent = "-32768";
