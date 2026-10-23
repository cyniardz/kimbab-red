const BOARDS = [
    {
      p: [["img/kimbap.jpg", "레드 실비김치김밥"]],
      n: "김밥",
      e: "한 줄부터 맵게",
      c: "#6E1410",
      t: "#FFF3E4",
      i: [
        ["레드 원조김밥", 1, "3,000", ""],
        ["레드 참치김밥", 1, "3,500", ""],
        ["레드 돈까스김밥", 1, "4,000", ""],
        ["레드 실비김치김밥", 2, "4,000", "협업"],
        ["레드 제육김밥", 2, "4,000", ""],
        ["레드 땡초김밥", 3, "3,500", "추천"],
      ],
    },
    {
      p: [["img/tteok.jpg", "레드 떡볶이"]],
      n: "분식",
      e: "떡볶이 · 라볶이",
      c: "#E8601F",
      t: "#FFF3E4",
      i: [
        ["레드 떡볶이", 3, "5,000", "추천"],
        ["레드 치즈떡볶이", 2, "5,500", ""],
        ["레드 라볶이", 2, "5,500", ""],
        ["레드 쫄볶이", 2, "5,500", ""],
        ["레드 김치만두", 1, "4,500", ""],
        ["레드 순대볶음", 2, "7,000", ""],
      ],
    },
    {
      p: [
        ["img/jjolmyeon.jpg", "레드 쫄면"],
        ["img/udon.jpg", "레드 우동"],
      ],
      n: "면",
      e: "국물 · 비빔",
      c: "#E99A1E",
      t: "#241614",
      i: [
        ["레드 라면", 1, "4,500", ""],
        ["레드 칼국수", 1, "6,500", ""],
        ["레드 우동", 2, "6,000", ""],
        ["레드 비빔냉면", 2, "7,500", ""],
        ["레드 열무국수", 2, "7,000", ""],
        ["레드 쫄면", 3, "6,500", "추천"],
      ],
    },
    {
      p: [["img/jeyuk.jpg", "레드 제육덮밥"]],
      n: "식사",
      e: "덮밥 · 볶음밥",
      c: "#4A0C0A",
      t: "#FFF3E4",
      i: [
        ["레드 김치볶음밥", 1, "7,000", ""],
        ["레드 오므라이스", 1, "7,000", ""],
        ["레드 제육덮밥", 2, "7,000", ""],
        ["레드 낙지덮밥", 3, "8,500", ""],
        ["레드 쭈꾸미덮밥", 3, "8,500", ""],
        ["레드 오징어덮밥", 3, "7,500", "추천"],
      ],
    },
    {
      p: [["img/sundubu.jpg", "레드 순두부찌개"]],
      n: "찌개 · 국밥",
      e: "뚝배기 한 그릇",
      c: "#241614",
      t: "#FFF3E4",
      i: [
        ["레드 김치찌개", 1, "7,000", ""],
        ["레드 만둣국", 1, "7,000", ""],
        ["레드 순두부찌개", 2, "7,500", ""],
        ["레드 부대찌개", 2, "8,000", ""],
        ["레드 육개장", 2, "8,000", ""],
        ["레드 뼈해장국", 3, "8,500", "추천"],
      ],
    },
    {
      p: [["img/donkatsu.jpg", "레드 돈까스"]],
      n: "돈까스",
      e: "매운 소스",
      c: "#D8261D",
      t: "#FFF3E4",
      i: [
        ["레드 돈까스", 1, "8,000", ""],
        ["레드 고구마돈까스", 1, "8,500", ""],
        ["레드 치즈돈까스", 2, "8,500", ""],
        ["레드 치킨까스", 2, "8,000", ""],
        ["레드 카레돈까스", 2, "8,500", ""],
        ["레드 칠리돈까스", 3, "9,000", "추천"],
      ],
    },
  ],
  MENUS = [],
  DISH = {
    kimbap:
      '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><g transform="translate(70,100.0)"><circle r="42" fill="#1E1A17"/><circle r="36.1" fill="#FFFDF8"/><circle cx="-11.8" cy="-9.2" r="7.1" fill="#F2C230"/><circle cx="10.9" cy="-7.6" r="6.3" fill="#E5322D"/><circle cy="11.8" r="6.7" fill="#4E9A3A"/><circle cx="-12.6" cy="10.5" r="4.6" fill="#E08A3C"/><circle cx="13.4" cy="11.3" r="4.6" fill="#C8461E"/></g><g transform="translate(150,120.0)"><circle r="42" fill="#1E1A17"/><circle r="36.1" fill="#FFFDF8"/><circle cx="-11.8" cy="-9.2" r="7.1" fill="#F2C230"/><circle cx="10.9" cy="-7.6" r="6.3" fill="#E5322D"/><circle cy="11.8" r="6.7" fill="#4E9A3A"/><circle cx="-12.6" cy="10.5" r="4.6" fill="#E08A3C"/><circle cx="13.4" cy="11.3" r="4.6" fill="#C8461E"/></g><g transform="translate(230,100.0)"><circle r="42" fill="#1E1A17"/><circle r="36.1" fill="#FFFDF8"/><circle cx="-11.8" cy="-9.2" r="7.1" fill="#F2C230"/><circle cx="10.9" cy="-7.6" r="6.3" fill="#E5322D"/><circle cy="11.8" r="6.7" fill="#4E9A3A"/><circle cx="-12.6" cy="10.5" r="4.6" fill="#E08A3C"/><circle cx="13.4" cy="11.3" r="4.6" fill="#C8461E"/></g></svg>',
    tteok:
      '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#D9361E"/><rect x="100" y="80" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(-30 113 86)"/><rect x="130" y="80" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(7 143 86)"/><rect x="160" y="80" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(-16 173 86)"/><rect x="190" y="80" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(21 203 86)"/><rect x="100" y="108" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(-2 113 114)"/><rect x="130" y="108" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(-25 143 114)"/><rect x="160" y="108" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(12 173 114)"/><rect x="190" y="108" width="26" height="12" rx="6" fill="#FFF1E0" transform="rotate(-11 203 114)"/></svg>',
    ramen:
      '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#E0562A"/><path d="M95,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M109,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M123,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M137,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M151,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M165,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M179,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M193,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><circle cx="190" cy="95" r="18" fill="#FFF"/><circle cx="190" cy="95" r="9" fill="#F7B21C"/></svg>',
    jeyuk:
      '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#B8381C"/><path d="M95,85 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M127,85 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M159,85 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M191,85 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M95,119 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M127,119 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M159,119 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M191,119 l26,6 l-6,18 l-24,-4 z" fill="#8E2412"/><path d="M100,150 q40,-10 90,6" stroke="#4E9A3A" stroke-width="6" fill="none"/></svg>',
    don: '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#C9762E"/><rect x="85" y="80" width="130" height="70" rx="18" fill="#D99A4A"/><path d="M110,80 v70 M140,80 v70 M170,80 v70 M200,80 v70" stroke="#B5752F" stroke-width="3"/><path d="M85,95 q60,30 130,0" stroke="#D9361E" stroke-width="10" fill="none"/></svg>',
    naeng:
      '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#C9301E"/><path d="M95,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M109,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M123,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M137,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M151,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M165,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M179,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><path d="M193,80 q10,20 0,40 q-10,20 0,40" stroke="#FFE2A8" stroke-width="5" fill="none"/><circle cx="190" cy="95" r="18" fill="#FFF"/><circle cx="190" cy="95" r="9" fill="#F7B21C"/></svg>',
    ojing:
      '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#D2401F"/><circle cx="105" cy="88" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="135" cy="88" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="165" cy="88" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="195" cy="88" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="105" cy="124" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="135" cy="124" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="165" cy="124" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/><circle cx="195" cy="124" r="13" fill="none" stroke="#FFE8D8" stroke-width="7"/></svg>',
    soup: '<svg viewBox="0 0 300 220" width="100%" height="100%" aria-hidden="true"><ellipse cx="150" cy="122" rx="118" ry="86" fill="#1E1A17"/><ellipse cx="150" cy="110" rx="112" ry="80" fill="#FFFDF8"/><ellipse cx="150" cy="110" rx="92" ry="62" fill="#D8562C"/><ellipse cx="110" cy="92" rx="17" ry="12" fill="#FFF6EA"/><ellipse cx="150" cy="92" rx="17" ry="12" fill="#FFF6EA"/><ellipse cx="190" cy="92" rx="17" ry="12" fill="#FFF6EA"/><ellipse cx="110" cy="128" rx="17" ry="12" fill="#FFF6EA"/><ellipse cx="150" cy="128" rx="17" ry="12" fill="#FFF6EA"/><ellipse cx="190" cy="128" rx="17" ry="12" fill="#FFF6EA"/><path d="M100,150 q50,-14 100,0" stroke="#4E9A3A" stroke-width="5" fill="none"/></svg>',
  },
  CHILI = [
    '<svg width="26" height="26" viewBox="0 0 40 40" aria-hidden="true"><path d="M8,10 C20,8 34,14 32,30 C30,36 22,36 20,30 C18,22 12,18 6,16 Z" fill="#E99A1E"/><path d="M8,10 C6,6 10,3 14,5" stroke="#3E7D2E" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
    '<svg width="26" height="26" viewBox="0 0 40 40" aria-hidden="true"><path d="M8,10 C20,8 34,14 32,30 C30,36 22,36 20,30 C18,22 12,18 6,16 Z" fill="#E8601F"/><path d="M8,10 C6,6 10,3 14,5" stroke="#3E7D2E" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
    '<svg width="26" height="26" viewBox="0 0 40 40" aria-hidden="true"><path d="M8,10 C20,8 34,14 32,30 C30,36 22,36 20,30 C18,22 12,18 6,16 Z" fill="#D8261D"/><path d="M8,10 C6,6 10,3 14,5" stroke="#3E7D2E" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
  ],
  LV = ["#E99A1E", "#E8601F", "#D8261D"];
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 메인 슬라이드 */
(() => {
  const hero = $("#hero"),
    slides = $$(".slide"),
    tabs = $$(".ptab"),
    DUR = 6000;
  let i = 0,
    t = null,
    paused = false,
    start = 0,
    left = DUR;
  hero.style.setProperty("--dur", DUR / 1000 + "s");
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("on", k === i));
    tabs.forEach((b, k) => {
      b.classList.remove("on");
      b.setAttribute("aria-selected", k === i);
      const bar = b.querySelector("i");
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "";
    });
    tabs[i].classList.add("on");
    $("#hCount").textContent = String(i + 1).padStart(2, "0") + " / 03";
    left = DUR;
    schedule();
  }
  function schedule() {
    clearTimeout(t);
    if (paused || reduce) return;
    start = Date.now();
    t = setTimeout(() => show(i + 1), left);
  }
  function pause(p) {
    paused = p;
    hero.classList.toggle("paused", p);
    if (p) {
      clearTimeout(t);
      left -= Date.now() - start;
    } else schedule();
  }
  tabs.forEach((b) => b.addEventListener("click", () => show(+b.dataset.go)));
  $("#hPrev").onclick = () => show(i - 1);
  $("#hNext").onclick = () => show(i + 1);
  let manual = false;
  $("#hPause").onclick = (e) => {
    manual = !manual;
    pause(manual);
    e.currentTarget.textContent = manual ? "▶" : "❚❚";
    e.currentTarget.setAttribute("aria-label", manual ? "자동 재생 시작" : "자동 재생 멈춤");
  };
  hero.addEventListener("mouseenter", () => {
    if (!manual) pause(true);
  });
  hero.addEventListener("mouseleave", () => {
    if (!manual) pause(false);
  });
  window.heroPause = (p) => {
    if (!manual) pause(p);
  };
  show(0);
})();

/* 메뉴판 */
(() => {
  let lv = 0;
  $("#lvTabs").innerHTML = ["전체", "1단계", "2단계", "3단계"]
    .map(
      (t, k) =>
        `<button aria-pressed="${k === 0}" data-l="${k}">${k ? `<span class="dot" style="background:${LV[k - 1]}"></span>` : ""}${t}</button>`,
    )
    .join("");
  $("#boards").innerHTML = BOARDS.map(
    (bd) => `<article class="board" style="--bc:${bd.c};--bt:${bd.t}">
    <div class="bh"><div><small>${bd.e}</small><h3>${bd.n}</h3></div><span class="bn">${bd.i.length}</span></div>
    <div class="bimg">${bd.p.map((p, k) => `<img src="${p[0]}" alt="${p[1]} 사진" loading="lazy" class="${k ? "" : "on"}">`).join("")}<span class="cap">대표 · ${bd.p[0][1]}</span></div>
    <ul>${bd.i.map(([n, l, p, f]) => `<li data-l="${l}"><span class="mn">${n}${f ? `<em>${f}</em>` : ""}</span><span class="lead"></span><span class="ml" aria-label="${l}단계">${CHILI[l - 1].repeat(l)}</span><b>${p}</b></li>`).join("")}</ul>
  </article>`,
  ).join("");
  $("#lvTabs").onclick = (e) => {
    const b = e.target.closest("[data-l]");
    if (!b) return;
    lv = +b.dataset.l;
    $$("#lvTabs button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    $$(".board li").forEach((li) => li.classList.toggle("off", !!lv && +li.dataset.l !== lv));
  };
  $$(".bimg").forEach((b) => {
    const im = [...b.querySelectorAll("img")];
    if (im.length < 2 || reduce) return;
    let k = 0;
    const cap = b.querySelector(".cap");
    setInterval(() => {
      im[k].classList.remove("on");
      k = (k + 1) % im.length;
      im[k].classList.add("on");
      cap.textContent = "대표 · " + im[k].alt.replace(" 사진", "");
    }, 3500);
  });
})();

/* 공지 모달 */
(() => {
  const dim = $("#dim"),
    ps = $$(".poster"),
    dots = $("#mdots"),
    DUR = 4500,
    KEY = "kr_hide_until";
  let i = 0,
    t = null;
  dots.innerHTML =
    ps.map((_, k) => `<button aria-label="${k + 1}번째 공지"></button>`).join("") +
    '<span id="mcount"></span>';
  const db = [...dots.querySelectorAll("button")];
  function show(n) {
    i = (n + ps.length) % ps.length;
    ps.forEach((p, k) => {
      let d = (k - i + ps.length) % ps.length;
      if (d === ps.length - 1) d = -1;
      p.dataset.pos = d === 0 || d === 1 || d === -1 ? d : "x";
      p.setAttribute("aria-hidden", d !== 0);
    });
    db.forEach((b, k) => b.setAttribute("aria-current", k === i));
    $("#mcount").textContent = i + 1 + " / " + ps.length;
    clearTimeout(t);
    if (!reduce) t = setTimeout(() => show(i + 1), DUR);
  }
  function open(n = 0) {
    dim.hidden = false;
    requestAnimationFrame(() => dim.classList.add("show"));
    show(n);
    window.heroPause && heroPause(true);
  }
  function close() {
    clearTimeout(t);
    dim.classList.remove("show");
    setTimeout(() => {
      dim.hidden = true;
    }, 300);
    window.heroPause && heroPause(false);
  }
  db.forEach((b, k) => (b.onclick = () => show(k)));
  $("#pPrev").onclick = () => show(i - 1);
  $("#pNext").onclick = () => show(i + 1);
  ps.forEach((p, k) =>
    p.addEventListener("click", (e) => {
      if (p.dataset.pos !== "0") {
        e.preventDefault();
        show(k);
      } else if (e.target.closest("a")) close();
    }),
  );
  $("#stage").addEventListener("mouseenter", () => clearTimeout(t));
  $("#stage").addEventListener("mouseleave", () => show(i));
  $("#close").onclick = close;
  dim.addEventListener("click", (e) => {
    if (e.target === dim) close();
  });
  addEventListener("keydown", (e) => {
    if (dim.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(i + 1);
    if (e.key === "ArrowLeft") show(i - 1);
  });
  $("#today").onclick = () => {
    try {
      localStorage.setItem(KEY, String(Date.now() + 864e5));
    } catch (e) {}
    close();
  };
  $$("[data-open]").forEach((b) => (b.onclick = () => open(+b.dataset.open)));
  let hide = false;
  try {
    hide = +localStorage.getItem(KEY) > Date.now();
  } catch (e) {}
  window.noticeClose = () => {
    if (!dim.hidden) close();
  };
  window.noticeStart = () => {
    if (!hide) setTimeout(() => open(0), 400);
  };
})();

/* 게이트: 처음 들어왔을 때만 자동 표시. 같은 탭에서는 새로고침해도 다시 나오지 않음.
   다시 보려면 로고, 푸터의 "첫 화면 다시 보기", 또는 주소 끝 #gate */
(() => {
  const g = $("#gate"),
    K = "kr_gate_passed";
  function show() {
    g.hidden = false;
    g.classList.add("out");
    document.body.style.overflow = "hidden";
    window.heroPause && heroPause(true);
    scrollTo(0, 0);
    requestAnimationFrame(() => requestAnimationFrame(() => g.classList.remove("out")));
  }
  function hide(target) {
    try {
      sessionStorage.setItem(K, "1");
    } catch (e) {}
    location.hash = target === "franchise" ? "fr" : "top";
    g.classList.add("out");
    document.body.style.overflow = "";
    setTimeout(
      () => {
        g.hidden = true;
        window.heroPause && heroPause(false);
        if (target === "main") window.noticeStart();
      },
      reduce ? 0 : 800,
    );
  }
  g.addEventListener("click", (e) => {
    const b = e.target.closest("[data-gate]");
    if (b) hide(b.dataset.gate);
  });
  $$("[data-showgate]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        sessionStorage.removeItem(K);
      } catch (_) {}
      show();
    }),
  );
  let passed = false;
  try {
    passed = sessionStorage.getItem(K) === "1";
  } catch (e) {}
  if (location.hash === "#gate") passed = false;
  if (passed) {
    g.hidden = true;
    const onSub = /^#(brand|menu|event|store|notice|fr|voice|poem|kit|order)/.test(location.hash);
    if (!onSub) window.noticeStart();
  } else {
    document.body.style.overflow = "hidden";
    window.heroPause && heroPause(true);
  }
})();

/* 인증 올리기: 고른 사진을 피드 맨 앞에 미리보기로 추가 (이 화면에서만 보임) */
(() => {
  const inp = $("#upFile");
  if (!inp) return;
  inp.addEventListener("change", () => {
    const f = inp.files && inp.files[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      $("#upmsg").textContent = "사진 파일만 올릴 수 있습니다.";
      return;
    }
    const r = new FileReader();
    r.onload = () => {
      const d = document.createElement("div");
      d.className = "g mine";
      d.innerHTML = '<img alt="내가 올린 인증 사진"><span>#김천레드3단계 · 방금</span>';
      d.querySelector("img").src = r.result;
      const gal = $("#gal");
      gal.prepend(d);
      if (gal.children.length > 6) gal.lastElementChild.remove();
      $("#upmsg").textContent =
        "예시 화면입니다. 올린 사진은 지금 이 화면에서만 보이고 저장되지 않습니다.";
      inp.value = "";
    };
    r.readAsDataURL(f);
  });
})();

/* 메인 대표 메뉴 타일 */
(() => {
  const el = $("#mtiles");
  if (!el) return;
  el.innerHTML = BOARDS.map(
    (bd) =>
      `<a class="mt" href="#menu"><div class="ph"><img src="${bd.p[0][0]}" alt="${bd.p[0][1]}" loading="lazy"><span class="cat" style="background:${bd.c}">${bd.n}</span></div><b>${bd.p[0][1]}</b><small>${bd.e}</small></a>`,
  ).join("");
})();

/* 매장 찾기: 대전 둔산동 일대 가상 매장. 목록을 누르면 구글 지도(iframe)가 그 위치로 이동 */
(() => {
  const S = [
    {
      n: "레드 둔산타임월드점",
      t: "dine",
      a: "대전 서구 둔산동",
      h: "11:00 – 22:00",
      lat: 36.3521,
      lng: 127.3785,
    },
    {
      n: "레드 시청역점",
      t: "dine",
      a: "대전 서구 둔산동",
      h: "11:00 – 23:00",
      lat: 36.3507,
      lng: 127.3862,
    },
    {
      n: "레드 탄방역점",
      t: "dine",
      a: "대전 서구 탄방동",
      h: "11:00 – 22:00",
      lat: 36.3445,
      lng: 127.3806,
    },
    {
      n: "레드 대전둔산점",
      t: "deliv",
      a: "대전 서구 둔산동 · 배달 1호점",
      h: "10:30 – 24:00",
      lat: 36.3558,
      lng: 127.3742,
    },
  ];
  const src = (s) => `https://www.google.com/maps?q=${s.lat},${s.lng}&z=16&hl=ko&output=embed`;
  const open = (s) => `https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`;

  function mount(listEl, frame, label) {
    let type = "all",
      sel = 0;
    function draw() {
      const list = S.map((s, i) => [s, i]).filter(([s]) => type === "all" || s.t === type);
      if (!list.some(([, i]) => i === sel) && list.length) sel = list[0][1];
      listEl.innerHTML = list
        .map(
          ([s, i]) =>
            `<button class="si${i === sel ? " on" : ""}" data-i="${i}" aria-pressed="${i === sel}"><div class="r"><b>${s.n}</b><em class="${s.t === "deliv" ? "dv" : ""}">${s.t === "deliv" ? "배달 전문" : "매장 식사"}</em></div><p>${s.a} · ${s.h}</p></button>`,
        )
        .join("");
      const cur = S[sel];
      const next = src(cur);
      if (frame.dataset.src !== next) {
        frame.dataset.src = next;
        frame.src = next;
      }
      label.textContent = cur.n;
      const go = frame.parentElement.querySelector(".mapgo");
      if (go) go.href = open(cur);
    }
    listEl.addEventListener("click", (e) => {
      const b = e.target.closest("[data-i]");
      if (!b) return;
      sel = +b.dataset.i;
      draw();
    });
    draw();
    return (t) => {
      type = t;
      draw();
    };
  }

  const ms = $("#mslist");
  if (ms) mount(ms, $("#mmap"), $("#mmaplbl"));
  const setType = mount($("#slist"), $("#smap"), $("#smaplbl"));
  window.setStoreType = (t) => {
    $$(".stbtn").forEach((b) => b.setAttribute("aria-selected", b.dataset.type === t));
    setType(t);
  };
  $$(".stbtn").forEach((b) => (b.onclick = () => setStoreType(b.dataset.type)));
})();

/* 공지사항 분류 */
(() => {
  const tabs = $("#ntabs");
  if (!tabs) return;
  tabs.onclick = (e) => {
    const b = e.target.closest("[data-nc]");
    if (!b) return;
    $$("#ntabs .tab").forEach((x) => x.setAttribute("aria-pressed", x === b));
    $$("#nfull details").forEach(
      (d) => (d.hidden = b.dataset.nc !== "all" && d.dataset.nc !== b.dataset.nc),
    );
  };
})();

/* 화면 전환: 주소 끝 표시(#brand, #menu, #event, #store, #notice, #fr)로 서브페이지를 바꿈 */
(() => {
  const V = {
    brand: "viewBrand",
    menu: "viewMenu",
    event: "viewEvent",
    store: "viewStore",
    notice: "viewNotice",
    fr: "viewFr",
    voice: "viewVoice",
    poem: "viewPoem",
    kit: "viewKit",
    order: "viewOrder",
  };
  const NAV = { voice: "event", poem: "event", kit: "menu", order: "menu" };
  const SUB = { "fr-cost": "frCost", "fr-form": "frForm" };
  function route() {
    const h = location.hash.slice(1),
      key = h.split("-")[0],
      page = V[key] ? key : "main";
    $$(".view").forEach((v) => (v.hidden = v.id !== (V[page] || "viewMain")));
    $$("#gnb .top").forEach((a) => {
      if (a.dataset.nav === (NAV[page] || page)) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    window.heroPause && heroPause(page !== "main");
    if (page !== "main") window.noticeClose && noticeClose();
    window.dispatchEvent(new CustomEvent("viewchange", { detail: page }));
    if (page === "store")
      window.setStoreType && setStoreType(h === "store-delivery" ? "deliv" : "all");
    const el = document.getElementById(SUB[h] || h);
    if (page !== "main") {
      if (el && h !== key) requestAnimationFrame(() => el.scrollIntoView());
      else scrollTo(0, 0);
      return;
    }
    if (el && h !== "gate") requestAnimationFrame(() => el.scrollIntoView());
  }
  addEventListener("hashchange", route);
  setTimeout(route, 0);
  $$("[data-scroll]").forEach((b) =>
    b.addEventListener("click", () =>
      document
        .getElementById(b.dataset.scroll)
        .scrollIntoView({ behavior: reduce ? "auto" : "smooth" }),
    ),
  );
  const PY = [
    ["10평", 18, 2, "4,500"],
    ["15평", 27, 3, "5,500"],
    ["20평", 36, 4, "6,500"],
    ["21평 이상", 37, 4, "6,600"],
  ];
  const won = (n) => n.toLocaleString("ko-KR");
  function setPy(k) {
    const [p, inter, tab, tot] = PY[k];
    const rows = [
      ["가맹비", 3000000, "브랜드·로고·상표 사용"],
      ["교육비", 2000000, "본사 조리 교육 4일"],
      ["간판 · 내부 사인", 5000000, "전면 간판, 메뉴보드, 음식 이미지"],
      [
        "매장 인테리어",
        inter * 1000000,
        k === 3 ? "평당 180만 원, 21평부터 1평 추가당 100만 원" : "평당 180만 원",
        1,
      ],
      ["주방기기", 10000000, "냉장고, 렌지, 식기세척기 등"],
      ["주방집기", 5000000, "로고 그릇, 수저, 소모품"],
      ["의자 · 탁자", tab * 1000000, "평수 기준 수량", 1],
    ];
    $("#costBody").innerHTML = rows
      .map(
        (r) =>
          `<tr class="${r[3] ? "chg" : ""}"><td>${r[0]}</td><td>${won(r[1])}원</td><td>${r[2]}</td></tr>`,
      )
      .join("");
    $("#sumLbl").textContent = "매장형 " + p + " 총 창업비용";
    $("#sumVal").textContent = tot + "만 원";
    $$("#pyTabs .tab").forEach((b, n) => b.setAttribute("aria-pressed", n === k));
  }
  $("#pyTabs").innerHTML = PY.map(
    (p, k) => `<button class="tab" aria-pressed="${k === 0}" data-py="${k}">${p[0]}</button>`,
  ).join("");
  $("#pyTabs").onclick = (e) => {
    const b = e.target.closest("[data-py]");
    if (b) setPy(+b.dataset.py);
  };
  setPy(0);
  $("#f2More").onclick = () => {
    $("#f2Terms").hidden = !$("#f2Terms").hidden;
  };
  $("#frLead").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#f2Ok").textContent = "예시 화면입니다. 실제로 전송되지는 않습니다.";
  });
})();

/* 공지 띠: 3.5초마다 한 줄씩 위로 */
(() => {
  const ul = $("#nroll");
  if (!ul || reduce) return;
  const n = ul.children.length;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % n;
    ul.style.transform = `translateY(${-40 * i}px)`;
  }, 3500);
})();

/* 메가 메뉴: 상단 메뉴에 마우스를 올리면 전체 하위 메뉴가 한 번에 펼쳐짐 */
(() => {
  const h = $("#hdr"),
    g = $("#gnb");
  let tm;
  const open = () => {
      clearTimeout(tm);
      h.classList.add("open");
    },
    close = () => {
      tm = setTimeout(() => h.classList.remove("open"), 120);
    };
  g.addEventListener("mouseenter", open);
  h.addEventListener("mouseleave", close);
  g.addEventListener("focusin", open);
  h.addEventListener("focusout", (e) => {
    if (!h.contains(e.relatedTarget)) close();
  });
  g.addEventListener("click", (e) => {
    if (e.target.closest("a,button")) h.classList.remove("open");
  });
})();
(() => {
  const d = $("#drawer"),
    b = $("#mbtn");
  const set = (o) => {
    d.classList.toggle("show", o);
    b.setAttribute("aria-expanded", o);
    document.body.style.overflow = o ? "hidden" : "";
    if (o) $("#dx").focus();
  };
  b.onclick = () => set(true);
  $("#dx").onclick = () => set(false);
  d.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && d.classList.contains("show")) set(false);
  });
})();

/* 이벤트 신청 양식 (오디션, 4행시): 이메일 인증 시연, 필수 항목 확인, 중복 참여 막기 */
(() => {
  const STORE = "kr_entries";
  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(STORE)) || {};
    } catch (e) {
      return {};
    }
  };
  const save = (d) => {
    try {
      localStorage.setItem(STORE, JSON.stringify(d));
    } catch (e) {}
  };
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const mask = (v) => v.replace(/^(.{2})[^@]*(@.*)$/, (_, a, b) => a + "***" + b);

  $$(".apform").forEach((form) => {
    const ev = form.dataset.ev,
      view = form.closest(".view"),
      done = view.querySelector(".apdone"),
      steps = form.querySelectorAll(".apsteps li"),
      box = form.querySelector(".emailbox"),
      email = box.querySelector('input[type="email"]'),
      sendBtn = box.querySelector('[data-act="send"]'),
      codeRow = box.querySelector(".codebox"),
      codeIn = codeRow.querySelector("input"),
      timerEl = codeRow.querySelector(".timer"),
      verifyBtn = codeRow.querySelector('[data-act="verify"]'),
      demo = box.querySelector(".demo"),
      emsg = box.querySelector('[data-msg="email"]'),
      emsgBase = emsg.textContent,
      submit = form.querySelector(".apsubmit"),
      all = form.querySelector("[data-all]"),
      agrees = [...form.querySelectorAll(".agrees .ag input")];
    let code = "",
      verified = false,
      left = 0,
      tick = null;

    function say(text, type) {
      emsg.textContent = text || emsgBase;
      emsg.className = "msg" + (type ? " " + type : "");
    }
    function setStep(n) {
      steps.forEach((li, k) => {
        li.classList.toggle("done", k < n);
        li.classList.toggle("on", k === n);
      });
    }
    function stopTimer() {
      clearInterval(tick);
    }
    function startTimer() {
      left = 180;
      stopTimer();
      const draw = () =>
        (timerEl.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"));
      draw();
      tick = setInterval(() => {
        left--;
        draw();
        if (left <= 0) {
          stopTimer();
          code = "";
          say("인증 시간이 지났습니다. 인증번호를 다시 받아 주세요.", "err");
        }
      }, 1000);
    }

    sendBtn.addEventListener("click", () => {
      const v = email.value.trim().toLowerCase();
      if (!isEmail(v)) return say("이메일 형식을 확인해 주세요. 예: red@kimbab.com", "err");
      if ((load()[ev] || []).includes(v))
        return say("이미 참여한 이메일입니다. 이벤트마다 한 번만 참여할 수 있습니다.", "err");
      code = String(Math.floor(100000 + Math.random() * 900000));
      codeRow.hidden = false;
      demo.hidden = false;
      demo.innerHTML = `시연용 인증번호 <b>${code}</b><br>실제 서비스에서는 이 번호가 이메일로 발송됩니다.`;
      sendBtn.textContent = "다시 받기";
      say("인증번호를 보냈습니다. 3분 안에 입력해 주세요.");
      codeIn.value = "";
      codeIn.focus();
      startTimer();
    });

    verifyBtn.addEventListener("click", () => {
      if (!code) return say("인증번호를 먼저 받아 주세요.", "err");
      if (codeIn.value.trim() !== code) return say("인증번호가 맞지 않습니다.", "err");
      verified = true;
      stopTimer();
      email.disabled = true;
      sendBtn.disabled = true;
      codeRow.hidden = true;
      demo.hidden = true;
      box.classList.add("verified");
      say("인증이 완료되었습니다.", "ok");
      setStep(1);
      check();
    });
    codeIn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        verifyBtn.click();
      }
    });

    form.querySelectorAll(".tview").forEach((b) =>
      b.addEventListener("click", () => {
        const t = b.nextElementSibling;
        t.hidden = !t.hidden;
        b.textContent = t.hidden ? "보기" : "닫기";
      }),
    );
    all.addEventListener("change", () => {
      agrees.forEach((c) => (c.checked = all.checked));
      check();
    });

    const extra = { voice: voiceReady, poem: () => true }[ev];
    function check(e) {
      if (!e || e.target !== all) all.checked = agrees.every((c) => c.checked);
      const req = [...form.querySelectorAll("[data-req]")].every((el) =>
        el.type === "checkbox" ? el.checked : el.value.trim() !== "",
      );
      submit.disabled = !(req && verified && extra());
    }
    form.addEventListener("input", check);
    form.addEventListener("change", check);

    /* 오디션: 파일 또는 링크 */
    let file = null;
    function voiceReady() {
      const mode = form.querySelector('[name="vmode"]:checked').value;
      if (mode === "file") return !!file;
      return /^https?:\/\/\S+\.\S+/.test(form.querySelector('[name="vlink"]').value.trim());
    }
    if (ev === "voice") {
      const fin = form.querySelector('[name="vfile"]'),
        drop = form.querySelector(".drop"),
        ok = form.querySelector(".fileok"),
        audio = ok.querySelector("audio"),
        verr = form.querySelector('[data-msg="voice"]');
      const panes = form.querySelectorAll("[data-pane]");
      form
        .querySelectorAll('[name="vmode"]')
        .forEach((r) =>
          r.addEventListener("change", () =>
            panes.forEach((p) => (p.hidden = p.dataset.pane !== r.value)),
          ),
        );
      function take(f) {
        verr.hidden = true;
        if (!f) return;
        const okType = /\.(mp3|m4a|wav)$/i.test(f.name) || /^audio\//.test(f.type);
        if (!okType) return showErr("mp3, m4a, wav 파일만 올릴 수 있습니다.");
        if (f.size > 10 * 1024 * 1024) return showErr("10MB 이하 파일만 올릴 수 있습니다.");
        file = f;
        ok.querySelector(".fname").textContent =
          `${f.name} · ${f.size < 1048576 ? Math.ceil(f.size / 1024) + "KB" : (f.size / 1048576).toFixed(1) + "MB"}`;
        audio.src = URL.createObjectURL(f);
        ok.hidden = false;
        drop.hidden = true;
        check();
      }
      function showErr(t) {
        verr.textContent = t;
        verr.hidden = false;
        fin.value = "";
      }
      fin.addEventListener("change", () => take(fin.files[0]));
      ["dragenter", "dragover"].forEach((t) =>
        drop.addEventListener(t, (e) => {
          e.preventDefault();
          drop.classList.add("over");
        }),
      );
      ["dragleave", "drop"].forEach((t) =>
        drop.addEventListener(t, () => drop.classList.remove("over")),
      );
      drop.addEventListener("drop", (e) => {
        e.preventDefault();
        take(e.dataTransfer.files[0]);
      });
      ok.querySelector(".fdel").addEventListener("click", () => {
        file = null;
        fin.value = "";
        audio.removeAttribute("src");
        ok.hidden = true;
        drop.hidden = false;
        check();
      });
      const intro = form.querySelector('[name="intro"]'),
        cnt = form.querySelector(".count span");
      intro.addEventListener("input", () => (cnt.textContent = intro.value.length));
    }

    /* 4행시: 입력하면 카드 미리보기가 바로 바뀜 */
    if (ev === "poem") {
      const card = form.querySelector(".poemcard");
      const draw = () => {
        for (let k = 1; k <= 4; k++) {
          const inp = form.querySelector(`[name="l${k}"]`),
            out = card.querySelector(`[data-line="${k}"]`);
          out.textContent = inp.value.trim() || inp.placeholder;
          out.classList.toggle("ph", !inp.value.trim());
        }
        const n = form.querySelector('[name="name"]').value.trim();
        card.querySelector('[data-line="name"]').textContent = "by " + (n || "이름");
      };
      form.addEventListener("input", draw);
      draw();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (submit.disabled) return;
      const v = email.value.trim().toLowerCase(),
        d = load();
      if ((d[ev] || []).includes(v)) return say("이미 참여한 이메일입니다.", "err");
      d[ev] = [...(d[ev] || []), v];
      save(d);
      const no =
        (ev === "voice" ? "VOICE-" : "POEM-") +
        String(Date.now()).slice(-6) +
        Math.floor(Math.random() * 10);
      done.querySelector('[data-out="no"]').textContent = no;
      done.querySelector('[data-out="email"]').textContent = mask(v);
      const copy = done.querySelector("[data-copy]");
      if (copy) {
        copy.innerHTML = form.querySelector(".poemcard").innerHTML;
        copy.querySelector("img")?.remove();
      }
      setStep(2);
      form.hidden = true;
      done.hidden = false;
      view.querySelector(".apmain").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });
})();

/* 키트 상세: 사진 바꾸기, 구성과 수량, 주문서, 주문 완료 */
(() => {
  const view = $("#viewKit");
  if (!view) return;
  const won = (n) => n.toLocaleString("ko-KR") + "원",
    FREE = 20000,
    SHIP = 3000;
  const main = $("#kdMain");
  $$(".kdthumbs button").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".kdthumbs button").forEach((x) => x.classList.toggle("on", x === b));
      main.src = b.dataset.src;
      main.alt = b.dataset.alt;
    }),
  );

  let qty = 1;
  const opt = () => view.querySelector('[name="kopt"]:checked');
  function calc() {
    const o = opt(),
      sum = +o.dataset.price * qty,
      ship = sum >= FREE ? 0 : SHIP;
    $("#kQty").textContent = qty;
    $("#kSum").textContent = won(sum);
    $("#kShip").textContent = ship ? won(ship) : "무료";
    $("#kTotal").textContent = won(sum + ship);
    view.querySelector('[data-q="-1"]').disabled = qty <= 1;
    view.querySelector('[data-q="1"]').disabled = qty >= 9;
    return { line: o.value, qty, sum, ship, total: sum + ship };
  }
  $$("[data-q]").forEach((b) =>
    b.addEventListener("click", () => {
      qty = Math.min(9, Math.max(1, qty + +b.dataset.q));
      calc();
    }),
  );
  view.querySelectorAll('[name="kopt"]').forEach((r) => r.addEventListener("change", calc));
  calc();

  const sheet = $("#oSheet"),
    form = $("#oForm"),
    pay = $("#oPay");
  let last = null;
  function openSheet() {
    const c = calc();
    $("#oItem").innerHTML =
      `<span>레드 김밥 키트 ${c.line}줄 × ${c.qty}</span><b>${won(c.total)}</b>`;
    pay.textContent = won(c.total) + " 결제하기";
    last = document.activeElement;
    sheet.hidden = false;
    document.body.style.overflow = "hidden";
    $("#oName").focus();
  }
  function closeSheet() {
    sheet.hidden = true;
    document.body.style.overflow = "";
    last && last.focus();
  }
  $("#kBuy").addEventListener("click", openSheet);
  sheet.querySelector(".ox").addEventListener("click", closeSheet);
  sheet.addEventListener("click", (e) => {
    if (e.target === sheet) closeSheet();
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) closeSheet();
  });
  addEventListener("viewchange", () => !sheet.hidden && closeSheet());

  const tel = $("#oTel");
  tel.addEventListener("input", () => {
    const d = tel.value.replace(/\D/g, "").slice(0, 11);
    tel.value =
      d.length < 4
        ? d
        : d.length < 8
          ? d.slice(0, 3) + "-" + d.slice(3)
          : d.slice(0, 3) + "-" + d.slice(3, 7) + "-" + d.slice(7);
  });
  function valid() {
    const req = [...form.querySelectorAll("[data-req]")].every((el) =>
      el.type === "checkbox" ? el.checked : el.value.trim() !== "",
    );
    return (
      req &&
      /^\d{3}-\d{3,4}-\d{4}$/.test(tel.value) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($("#oEmail").value.trim())
    );
  }
  form.addEventListener("input", () => (pay.disabled = !valid()));
  form.addEventListener("change", () => (pay.disabled = !valid()));

  function shipDate() {
    const d = new Date();
    let add = d.getHours() < 14 ? 0 : 1;
    const t = new Date(d);
    t.setDate(d.getDate() + add);
    while (t.getDay() === 0 || t.getDay() === 6) t.setDate(t.getDate() + 1);
    const w = "일월화수목금토"[t.getDay()];
    return `${t.getMonth() + 1}월 ${t.getDate()}일(${w}) 출고, 다음 날 도착 예정`;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!valid()) return;
    const c = calc(),
      f = new FormData(form),
      now = new Date(),
      ymd =
        String(now.getFullYear()).slice(2) +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0");
    const order = {
      no: `KR-${ymd}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      item: `레드 김밥 키트 ${c.line}줄 × ${c.qty}`,
      total: won(c.total) + (c.ship ? ` (배송비 ${won(c.ship)} 포함)` : " (무료 배송)"),
      pay: f.get("pay"),
      name: f.get("name").trim(),
      addr: (f.get("addr").trim() + " " + f.get("addr2").trim()).trim(),
      email: f.get("email").trim(),
      ship: shipDate(),
    };
    try {
      sessionStorage.setItem("kr_order", JSON.stringify(order));
    } catch (err) {}
    window.krOrder = order;
    form.reset();
    pay.disabled = true;
    closeSheet();
    location.hash = "order";
  });

  /* 주문 완료 화면 */
  function showOrder() {
    let o = window.krOrder;
    if (!o) {
      try {
        o = JSON.parse(sessionStorage.getItem("kr_order"));
      } catch (e) {}
    }
    $("#oDone").hidden = !o;
    $("#oEmpty").hidden = !!o;
    if (!o) return;
    $$("#oDone [data-o]").forEach((el) => (el.textContent = o[el.dataset.o]));
  }
  addEventListener("viewchange", (e) => e.detail === "order" && showOrder());
  if (location.hash === "#order") showOrder();
})();

/* 챌린지 영상: 누르면 한 번 재생, 다시 누르면 멈춤, 끝나면 처음 화면으로 */
(() => {
  const box = $("#chVid");
  if (!box) return;
  const v = box.querySelector("video"),
    btn = box.querySelector(".play");
  const stop = () => {
    v.pause();
    box.classList.remove("playing");
    btn.setAttribute("aria-label", "영상 재생");
  };
  btn.addEventListener("click", () => {
    v.play().then(() => {
      box.classList.add("playing");
      btn.setAttribute("aria-label", "영상 멈춤");
    });
  });
  v.addEventListener("click", () => box.classList.contains("playing") && stop());
  v.addEventListener("ended", () => {
    stop();
    v.currentTime = 0;
    v.load();
  });
})();

/* 맨 위로 버튼: 스크롤을 내리면 캐릭터가 나타남 */
(() => {
  const b = $("#totop");
  const on = () => b.classList.toggle("show", scrollY > 600);
  addEventListener("scroll", on, { passive: true });
  addEventListener("hashchange", on);
  on();
  b.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
})();
