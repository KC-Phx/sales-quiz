(function () {
  var UI = {
    en: {
      kicker: "All Organized Sales Team",
      title: "Sales Training Quizzes",
      intro: "Watch the full training video first. Then take these four quizzes in order. Each one builds on the last: remember it, understand it, use it, and adapt it in the field. Every answer comes with an explanation, so you learn as you go. Missing a question is part of practicing.",
      nameLabel: "Your name",
      namePh: "First and last name",
      emailLabel: "Your email",
      emailPh: "you@example.com",
      needInfo: "Enter your name and email above to start. Your manager uses them to see your results.",
      questions: "questions",
      best: "Your best",
      start: "Start quiz",
      retake: "Take it again",
      quizOf: "Quiz",
      qOf: "Question {n} of {t}",
      right: ["Nice work!", "That's it!", "You got it!", "Exactly right!", "Great job!"],
      wrongHead: "Not quite. Here's the idea:",
      answerWas: "Best answer:",
      next: "Next question",
      finish: "See my results",
      back: "All quizzes",
      done: "Quiz complete",
      tiers: [
        [90, "Outstanding. You're ready to teach this to someone else."],
        [75, "Strong work. Review the few you missed and you'll own it."],
        [50, "Good start. Re-watch the parts below and try again. Every rep makes you better."],
        [0, "This is how everyone starts. Volume beats luck. Review the answers and take it again."]
      ],
      review: "Review what you missed",
      allRight: "You got every question right!",
      practice: "Practice out loud (with a teammate or your manager)",
      copy: "Copy my results",
      copied: "Copied! Paste it in a text or email to your manager.",
      copyFail: "Couldn't copy automatically. Select the text below and copy it.",
      saving: "Sending your results to your manager...",
      saved: "Your results were sent to your manager.",
      saveFail: "Your results couldn't be sent. Use “Copy my results” and send it to your manager.",
      source: "Based on Alex Hormozi's video “The Ultimate Sales Training for 2026 [Full Course]” on YouTube, adapted for All Organized roll-out shelves.",
      resultLine: "{name} ({email}): {quiz} ({focus}) score {s}/{t} ({p}%)"
    },
    es: {
      kicker: "Equipo de Ventas de All Organized",
      title: "Quizzes de Entrenamiento de Ventas",
      intro: "Primero mira el video completo del entrenamiento. Luego haz estos cuatro quizzes en orden. Cada uno se basa en el anterior: recordarlo, entenderlo, usarlo y adaptarlo en el campo. Cada respuesta trae una explicación, así aprendes mientras avanzas. Equivocarte es parte de practicar.",
      nameLabel: "Tu nombre",
      namePh: "Nombre y apellido",
      emailLabel: "Tu correo",
      emailPh: "tu@ejemplo.com",
      needInfo: "Escribe tu nombre y correo arriba para empezar. Tu gerente los usa para ver tus resultados.",
      questions: "preguntas",
      best: "Tu mejor puntaje",
      start: "Empezar quiz",
      retake: "Hacerlo otra vez",
      quizOf: "Quiz",
      qOf: "Pregunta {n} de {t}",
      right: ["¡Muy bien!", "¡Eso es!", "¡Lo lograste!", "¡Exacto!", "¡Excelente!"],
      wrongHead: "Casi. Esta es la idea:",
      answerWas: "Mejor respuesta:",
      next: "Siguiente pregunta",
      finish: "Ver mis resultados",
      back: "Todos los quizzes",
      done: "Quiz terminado",
      tiers: [
        [90, "Excelente. Ya estás listo para enseñarle esto a alguien más."],
        [75, "Muy buen trabajo. Repasa las pocas que fallaste y lo vas a dominar."],
        [50, "Buen comienzo. Vuelve a ver las partes de abajo e inténtalo otra vez. Cada práctica te hace mejor."],
        [0, "Así empieza todo el mundo. El volumen le gana a la suerte. Repasa las respuestas y hazlo otra vez."]
      ],
      review: "Repasa lo que fallaste",
      allRight: "¡Contestaste todas bien!",
      practice: "Practica en voz alta (con un compañero o tu gerente)",
      copy: "Copiar mis resultados",
      copied: "¡Copiado! Pégalo en un texto o correo para tu gerente.",
      copyFail: "No se pudo copiar automáticamente. Selecciona el texto de abajo y cópialo.",
      saving: "Enviando tus resultados a tu gerente...",
      saved: "Tus resultados se enviaron a tu gerente.",
      saveFail: "No se pudieron enviar tus resultados. Usa “Copiar mis resultados” y mándalo a tu gerente.",
      source: "Basado en el video de Alex Hormozi “The Ultimate Sales Training for 2026 [Full Course]” en YouTube, adaptado para las repisas corredizas de All Organized.",
      resultLine: "{name} ({email}): {quiz} ({focus}) puntaje {s}/{t} ({p}%)"
    }
  };
  var LETTERS = ["A", "B", "C", "D"];
  var CFG = window.QUIZ_CONFIG || {};

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var state = { lang: store("ao-lang") === "es" ? "es" : "en", view: "home", quiz: null, i: 0, picked: null, results: [], name: store("ao-name") || "", email: store("ao-email") || "", copyMsg: "", sync: "", syncCls: "" };

  function order(qi, n, salt) {
    var idx = [], s = (qi + 1) * 7919 + salt * 104729;
    for (var k = 0; k < n; k++) idx.push(k);
    for (var j = n - 1; j > 0; j--) { s = (s * 9301 + 49297) % 233280; var r = Math.floor(s / 233280 * (j + 1)); var t = idx[j]; idx[j] = idx[r]; idx[r] = t; }
    return idx;
  }
  function fmt(str, o) { return str.replace(/\{(\w+)\}/g, function (_, k) { return o[k]; }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function t() { return UI[state.lang]; }
  function L(o) { return o[state.lang]; }
  function bestKey(q) { return "ao-best-" + q.id; }
  function infoOk() { return state.name.trim().length > 1 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.email.trim()); }

  var view = document.getElementById("view");

  function renderChrome() {
    document.documentElement.lang = state.lang;
    document.getElementById("t-kicker").textContent = t().kicker;
    document.getElementById("t-title").textContent = t().title;
    document.getElementById("t-source").textContent = t().source;
    document.getElementById("lang-en").setAttribute("aria-pressed", state.lang === "en");
    document.getElementById("lang-es").setAttribute("aria-pressed", state.lang === "es");
  }

  function home() {
    var h = '<div class="intro"><p>' + esc(t().intro) + '</p><div class="fields">' +
      '<div class="field"><label for="rep-name"><strong>' + esc(t().nameLabel) + '</strong></label><input type="text" id="rep-name" autocomplete="name" placeholder="' + esc(t().namePh) + '" value="' + esc(state.name) + '"></div>' +
      '<div class="field"><label for="rep-email"><strong>' + esc(t().emailLabel) + '</strong></label><input type="email" id="rep-email" autocomplete="email" placeholder="' + esc(t().emailPh) + '" value="' + esc(state.email) + '"></div>' +
      '</div><p class="muted" id="needinfo"' + (infoOk() ? ' hidden' : '') + '>' + esc(t().needInfo) + '</p></div>';
    h += '<div class="grid">';
    QUIZZES.forEach(function (q, n) {
      var b = store(bestKey(q));
      h += '<section class="card"><span class="step">' + esc(t().quizOf) + ' ' + q.num + ' · ' + esc(L(q.focus)) + '</span><h3>' + esc(L(q.title)) + '</h3><p>' + esc(L(q.blurb)) + '</p><span class="meta">' + q.questions.length + ' ' + esc(t().questions) + '</span>' + (b ? '<span class="best">' + esc(t().best) + ': ' + esc(b) + '%</span>' : '') + '<button type="button" class="btn" data-start="' + n + '"' + (infoOk() ? '' : ' disabled') + '>' + esc(b ? t().retake : t().start) + '</button></section>';
    });
    h += '</div>';
    view.innerHTML = h;
    function onInfo() {
      state.name = document.getElementById("rep-name").value; state.email = document.getElementById("rep-email").value;
      store("ao-name", state.name); store("ao-email", state.email);
      var ok = infoOk();
      document.getElementById("needinfo").hidden = ok;
      view.querySelectorAll("[data-start]").forEach(function (b) { b.disabled = !ok; });
    }
    document.getElementById("rep-name").addEventListener("input", onInfo);
    document.getElementById("rep-email").addEventListener("input", onInfo);
    view.querySelectorAll("[data-start]").forEach(function (b) { b.addEventListener("click", function () { if (infoOk()) start(+b.getAttribute("data-start")); }); });
  }

  function start(n) { state.quiz = n; state.i = 0; state.picked = null; state.results = []; state.copyMsg = ""; state.sync = ""; state.view = "quiz"; render(); window.scrollTo(0, 0); }

  function quizView() {
    var qz = QUIZZES[state.quiz], it = qz.questions[state.i], total = qz.questions.length;
    var ord = order(state.i, it.opts.en.length, state.quiz);
    var answered = state.picked !== null;
    var pct = ((state.i + (answered ? 1 : 0)) / total) * 100;
    var h = '<div class="row"><button type="button" class="btn ghost" id="backbtn">← ' + esc(t().back) + '</button></div>';
    h += '<div class="qhead"><span>' + esc(t().quizOf) + ' ' + qz.num + ' · ' + esc(L(qz.title)) + '</span><span>' + esc(fmt(t().qOf, { n: state.i + 1, t: total })) + '</span></div>';
    h += '<div class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></div>';
    h += '<section class="question"><p class="qtext" id="qtext">' + esc(L(it.q)) + '</p><div class="opts" role="group" aria-labelledby="qtext">';
    ord.forEach(function (oi, pos) {
      var cls = "opt";
      if (answered) { if (oi === it.a) cls += " correct"; else if (oi === state.picked) cls += " wrong"; }
      h += '<button type="button" class="' + cls + '" data-o="' + oi + '"' + (answered ? ' disabled' : '') + '><span class="letter">' + LETTERS[pos] + '</span><span>' + esc(L(it.opts)[oi]) + '</span></button>';
    });
    h += '</div>';
    if (answered) {
      var ok = state.picked === it.a;
      var head = ok ? t().right[state.i % t().right.length] : t().wrongHead;
      h += '<div class="feedback' + (ok ? '' : ' miss') + '" role="status"><strong>' + esc(head) + '</strong>' + (ok ? '' : '<p><b>' + esc(t().answerWas) + '</b> ' + esc(L(it.opts)[it.a]) + '</p>') + '<p>' + esc(L(it.why)) + '</p></div>';
      h += '<div class="row"><button type="button" class="btn" id="nextbtn">' + esc(state.i + 1 < total ? t().next : t().finish) + '</button></div>';
    }
    h += '</section>';
    view.innerHTML = h;
    document.getElementById("backbtn").addEventListener("click", goHome);
    view.querySelectorAll(".opt").forEach(function (b) {
      b.addEventListener("click", function () {
        if (state.picked !== null) return;
        state.picked = +b.getAttribute("data-o");
        state.results[state.i] = state.picked === it.a;
        render();
        var nb = document.getElementById("nextbtn"); if (nb) nb.focus();
      });
    });
    var nb = document.getElementById("nextbtn");
    if (nb) nb.addEventListener("click", function () {
      if (state.i + 1 < total) { state.i++; state.picked = null; } else { finish(); }
      render(); window.scrollTo(0, 0);
    });
  }

  function finish() {
    var qz = QUIZZES[state.quiz];
    var s = state.results.filter(Boolean).length, p = Math.round(s / qz.questions.length * 100);
    var prev = +(store(bestKey(qz)) || 0);
    if (p > prev) store(bestKey(qz), String(p));
    state.view = "results";
    send(qz, s);
  }

  function send(qz, s) {
    var url = CFG.scriptUrl || "";
    if (!/^https:\/\/script\.google\.com\//.test(url)) { setSync("saveFail", "warn"); return; }
    state.sync = "saving"; state.syncCls = "";
    var missed = []; state.results.forEach(function (r, i) { if (!r) missed.push(i + 1); });
    var body = { action: "submit", name: state.name.trim(), email: state.email.trim(), quizNum: qz.num, quizTitle: qz.title.en, focus: qz.focus.en, lang: state.lang, score: s, total: qz.questions.length, missed: missed };
    fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); })
      .then(function (j) { setSync(j && j.ok ? "saved" : "saveFail", j && j.ok ? "ok" : "warn"); })
      .catch(function () { setSync("saveFail", "warn"); });
  }
  function setSync(k, cls) {
    state.sync = k; state.syncCls = cls;
    var el = document.getElementById("syncstatus");
    if (el) { el.textContent = t()[k]; el.className = "sync " + cls; }
  }

  function resultText() {
    var qz = QUIZZES[state.quiz], s = state.results.filter(Boolean).length, tot = qz.questions.length;
    return fmt(t().resultLine, { name: state.name.trim(), email: state.email.trim(), quiz: t().quizOf + " " + qz.num + ": " + L(qz.title), focus: L(qz.focus), s: s, t: tot, p: Math.round(s / tot * 100) });
  }

  function resultsView() {
    var qz = QUIZZES[state.quiz], s = state.results.filter(Boolean).length, tot = qz.questions.length, p = Math.round(s / tot * 100);
    var msg = t().tiers.filter(function (x) { return p >= x[0]; })[0][1];
    var h = '<div class="row"><button type="button" class="btn ghost" id="backbtn">← ' + esc(t().back) + '</button></div>';
    h += '<h2>' + esc(t().done) + ': ' + esc(L(qz.title)) + '</h2>';
    h += '<section class="score"><span class="big">' + s + '/' + tot + '</span><div><p><strong>' + p + '%</strong></p><p>' + esc(msg) + '</p></div></section>';
    h += '<p class="sync ' + state.syncCls + '" id="syncstatus" role="status">' + esc(state.sync ? t()[state.sync] : "") + '</p>';
    var missed = qz.questions.map(function (it, i) { return { it: it, i: i }; }).filter(function (x) { return !state.results[x.i]; });
    h += '<h3>' + esc(t().review) + '</h3><div class="list">';
    if (!missed.length) h += '<div class="item"><p>' + esc(t().allRight) + '</p></div>';
    missed.forEach(function (x) {
      h += '<div class="item"><p><strong>' + (x.i + 1) + '. ' + esc(L(x.it.q)) + '</strong></p><span class="tag">' + esc(t().answerWas) + '</span><p>' + esc(L(x.it.opts)[x.it.a]) + '</p><p class="muted">' + esc(L(x.it.why)) + '</p></div>';
    });
    h += '</div>';
    h += '<section class="practice"><h3>' + esc(t().practice) + '</h3><ol>' + qz.practice.map(function (pr) { return '<li>' + esc(L(pr)) + '</li>'; }).join('') + '</ol></section>';
    h += '<div class="row"><button type="button" class="btn" id="copybtn">' + esc(t().copy) + '</button><button type="button" class="btn ghost" id="againbtn">' + esc(t().retake) + '</button></div>';
    h += '<p class="status" id="copystatus" role="status">' + esc(state.copyMsg) + '</p>';
    h += '<p class="muted">' + esc(resultText()) + '</p>';
    view.innerHTML = h;
    document.getElementById("backbtn").addEventListener("click", goHome);
    document.getElementById("againbtn").addEventListener("click", function () { start(state.quiz); });
    document.getElementById("copybtn").addEventListener("click", function () {
      var el = document.getElementById("copystatus");
      try { navigator.clipboard.writeText(resultText()).then(function () { state.copyMsg = t().copied; el.textContent = state.copyMsg; }, function () { el.textContent = t().copyFail; }); } catch (e) { el.textContent = t().copyFail; }
    });
  }

  function goHome() { state.view = "home"; render(); window.scrollTo(0, 0); }
  function render() {
    renderChrome();
    if (state.view === "quiz") quizView();
    else if (state.view === "results") resultsView();
    else home();
  }
  function setLang(l) { state.lang = l; store("ao-lang", l); render(); }
  document.getElementById("lang-en").addEventListener("click", function () { setLang("en"); });
  document.getElementById("lang-es").addEventListener("click", function () { setLang("es"); });
  render();
})();
