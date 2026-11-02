/* =========================================================
   Aventura de Estudos do Bernardo — lógica do site
   Só HTML, CSS e JavaScript puro. Sem bibliotecas.
   ========================================================= */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const CAPS = window.CAPITULOS;
  const SIMS = window.SIMULADOS;
  const capPorId = (id) => CAPS.find((c) => c.id === id);

  /* ---------------- utilidades ---------------- */
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  function h(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function embaralhar(lista) {
    const a = lista.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // garante que a lista embaralhada não fique igual à original (quando houver ordem a descobrir)
  function embaralharDiferente(lista) {
    if (lista.length < 2) return lista.slice();
    let a;
    do { a = embaralhar(lista); } while (a.every((x, i) => x === lista[i]));
    return a;
  }
  const semTags = (s) => s.replace(/<[^>]+>/g, "");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- progresso (salvo no navegador) ---------------- */
  const CHAVE = "aventura-bernardo-v1";
  let prog = { secoes: {}, jogos: {}, sim: {}, som: true };
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE));
    if (salvo) prog = Object.assign(prog, salvo);
  } catch (e) { /* sem armazenamento: segue sem salvar */ }
  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(prog)); } catch (e) {}
    atualizarEstrelas();
  }
  function marcar(tipo, capId, idx) {
    prog[tipo][capId] = prog[tipo][capId] || [];
    if (!prog[tipo][capId].includes(idx)) {
      prog[tipo][capId].push(idx);
      salvar();
      return true;
    }
    return false;
  }
  function progressoCap(cap) {
    const s = (prog.secoes[cap.id] || []).length;
    const j = (prog.jogos[cap.id] || []).length;
    const sim = prog.sim[cap.id] || 0; // melhor nota (0-20)
    const total = cap.secoes.length + cap.jogos.length + 1;
    const feito = s + j + (sim >= 14 ? 1 : sim / 14);
    return Math.min(100, Math.round((feito / total) * 100));
  }
  function estrelasCap(cap) {
    let e = 0;
    if ((prog.secoes[cap.id] || []).length >= cap.secoes.length) e++;
    if ((prog.jogos[cap.id] || []).length >= cap.jogos.length) e++;
    if ((prog.sim[cap.id] || 0) >= 14) e++;
    return e;
  }
  function atualizarEstrelas() {
    let total = CAPS.reduce((acc, c) => acc + estrelasCap(c), 0);
    if ((prog.sim.geral || 0) >= 14) total++;
    $("#estrelasTotal").textContent = "⭐ " + total;
  }

  /* ---------------- sons, voz, confete, aviso ---------------- */
  let audio;
  function som(tipo) {
    if (!prog.som) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      const notas = tipo === "ok" ? [523, 659, 784] : tipo === "festa" ? [523, 659, 784, 1047] : [220, 180];
      notas.forEach((f, i) => {
        const o = audio.createOscillator();
        const g = audio.createGain();
        o.type = tipo === "erro" ? "sawtooth" : "triangle";
        o.frequency.value = f;
        const t = audio.currentTime + i * 0.1;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        o.connect(g).connect(audio.destination);
        o.start(t);
        o.stop(t + 0.2);
      });
    } catch (e) {}
  }
  $("#btnSom").addEventListener("click", () => {
    prog.som = !prog.som;
    salvar();
    $("#btnSom").textContent = prog.som ? "🔔" : "🔕";
    aviso(prog.som ? "Sons ligados" : "Sons desligados");
  });
  $("#btnSom").textContent = prog.som ? "🔔" : "🔕";

  function falar(texto) {
    if (!("speechSynthesis" in window)) { aviso("Seu navegador não sabe ler em voz alta 😢"); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(semTags(texto));
    u.lang = "pt-BR";
    u.rate = 0.92;
    const voz = speechSynthesis.getVoices().find((v) => v.lang && v.lang.toLowerCase().startsWith("pt-br"))
      || speechSynthesis.getVoices().find((v) => v.lang && v.lang.toLowerCase().startsWith("pt"));
    if (voz) u.voice = voz;
    speechSynthesis.speak(u);
  }
  if ("speechSynthesis" in window) speechSynthesis.getVoices();

  function confete(qtd = 40) {
    const box = $("#confete");
    const itens = ["🎉", "⭐", "🎊", "✨", "🦉", "💛", "🏆"];
    for (let i = 0; i < qtd; i++) {
      const s = document.createElement("span");
      s.textContent = itens[i % itens.length];
      s.style.left = Math.random() * 100 + "vw";
      s.style.animationDuration = 1.8 + Math.random() * 1.8 + "s";
      s.style.animationDelay = Math.random() * 0.6 + "s";
      box.appendChild(s);
      setTimeout(() => s.remove(), 4500);
    }
  }
  let avisoTimer;
  function aviso(txt) {
    const t = $("#toast");
    t.textContent = txt;
    t.classList.add("mostra");
    clearTimeout(avisoTimer);
    avisoTimer = setTimeout(() => t.classList.remove("mostra"), 2200);
  }
  function treme(el) { el.classList.remove("treme"); void el.offsetWidth; el.classList.add("treme"); }

  const ELOGIOS = ["Mandou bem! 🎉", "Isso aí, Bernardo! 💪", "Perfeito! ⭐", "Uau, que craque! 🏆", "Arrasou! 🚀", "Muito bem! 👏"];
  const ANIMO = ["Quase! Tente de novo 💛", "Opa! Pense mais um pouquinho 🤔", "Não foi dessa vez, mas você consegue! 💪"];
  const sorteia = (l) => l[Math.floor(Math.random() * l.length)];

  /* ---------------- rotas ---------------- */
  function rota() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const partes = (location.hash || "#/").replace(/^#\//, "").split("/");
    document.body.className = "";
    app.innerHTML = "";
    window.scrollTo(0, 0);
    if (partes[0] === "cap" && capPorId(partes[1])) telaCapitulo(capPorId(partes[1]), partes[2] || "aprender");
    else if (partes[0] === "simulado" && (partes[1] === "geral" || capPorId(partes[1]))) telaSimulado(partes[1]);
    else if (partes[0] === "simulados") telaEscolhaSimulado();
    else telaInicio();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", rota);

  /* =========================================================
     TELA INICIAL
     ========================================================= */
  function telaInicio() {
    document.body.classList.add("tema-geral");
    const frases = [
      "Oi, Bernardo! Eu sou a Coruja Lia. Vamos estudar juntos para a prova? Escolha um capítulo para começar!",
      "Dica da Lia: leia a lição, assista aos vídeos, jogue os jogos e só depois faça o simulado!",
      "Cada capítulo vale 3 estrelas: ⭐ lição completa, ⭐ jogos completos e ⭐ simulado com 14 acertos ou mais."
    ];
    app.appendChild(h(`
      <section class="hero">
        <div class="hero-coruja" aria-hidden="true">🦉</div>
        <div>
          <h1>Bora estudar, Bernardo!</h1>
          <p>História e Geografia — prova final da 3ª etapa</p>
          <div class="balao" id="balaoLia">${frases[0]}</div>
          <div class="linha-botoes" style="margin-top:10px">
            <button class="btn btn-pequeno" id="ouvirLia">🔊 Ouvir a Lia</button>
            <button class="btn btn-pequeno" id="outraDica">💡 Outra dica</button>
          </div>
        </div>
      </section>`));
    let f = 0;
    $("#ouvirLia").onclick = () => falar($("#balaoLia").textContent);
    $("#outraDica").onclick = () => { f = (f + 1) % frases.length; $("#balaoLia").textContent = frases[f]; };

    const grade = h(`<section class="grade-capitulos" aria-label="Capítulos"></section>`);
    CAPS.forEach((cap) => {
      const p = progressoCap(cap);
      const e = estrelasCap(cap);
      grade.appendChild(h(`
        <a class="card-cap tema-${cap.cor}" href="#/cap/${cap.id}">
          <div class="card-cap-topo">
            <span class="card-cap-emoji">${cap.emoji}</span>
            <div><div class="card-cap-num">Capítulo ${cap.numero}</div><h2>${cap.titulo}</h2></div>
          </div>
          <div class="card-cap-corpo">
            <p>${cap.resumo}</p>
            <div class="barra-legenda"><span>${p}% estudado</span><span>${"⭐".repeat(e)}${"☆".repeat(3 - e)}</span></div>
            <div class="barra"><span style="width:${p}%"></span></div>
          </div>
        </a>`));
    });
    app.appendChild(grade);

    const melhorGeral = prog.sim.geral;
    app.appendChild(h(`
      <section class="bloco tema-geral">
        <h2>📝 Hora do simulado!</h2>
        <p>Cada capítulo tem um simulado com <b>20 questões embaralhadas</b> (de marcar e de escrever). Também tem o <b>Simulado Geral</b>, que mistura os 4 temas.</p>
        <div class="linha-botoes">
          <a class="btn btn-cor btn-grande" href="#/simulados">Escolher simulado</a>
          ${melhorGeral != null ? `<span class="selo feito">Melhor nota no geral: ${fmt(melhorGeral)}/20</span>` : ""}
        </div>
      </section>`));

    app.appendChild(h(`
      <section class="bloco">
        <h2>👨‍👦 Para o papai: como usar</h2>
        <ul class="lista-dicas">
          <li><b>Aprender</b>: a lição vem em pequenos passos. O botão 🔊 lê o texto em voz alta.</li>
          <li><b>Vídeos</b>: vídeos em português do YouTube sobre cada tema (vale assistir antes).</li>
          <li><b>Jogos</b>: arrastar, ligar, ordenar, verdadeiro ou falso e o jogo do mapa.</li>
          <li><b>Simulado</b>: nas questões abertas, o Bernardo escreve, depois vê a resposta esperada e vocês decidem juntos se acertou.</li>
          <li>Também dá para <b>imprimir</b> cada simulado (com gabarito) para treinar no papel.</li>
          <li>O progresso fica salvo neste navegador. <button class="btn btn-pequeno" id="zerar">🔄 Zerar progresso</button></li>
        </ul>
      </section>`));
    $("#zerar").onclick = () => {
      if (confirm("Apagar todo o progresso e as estrelas?")) {
        prog = { secoes: {}, jogos: {}, sim: {}, som: prog.som };
        salvar();
        rota();
      }
    };
  }
  const fmt = (n) => (Math.round(n * 10) / 10).toString().replace(".", ",");

  /* =========================================================
     TELA DO CAPÍTULO
     ========================================================= */
  function telaCapitulo(cap, aba) {
    document.body.classList.add("tema-" + cap.cor);
    app.appendChild(h(`<a class="voltar" href="#/">⬅ Voltar para os capítulos</a>`));
    app.appendChild(h(`
      <section class="cap-cabecalho">
        <div class="emoji-grande" aria-hidden="true">${cap.emoji}</div>
        <div>
          <div class="num">Capítulo ${cap.numero}</div>
          <h1>${cap.titulo}</h1>
          <p>${cap.intro}</p>
        </div>
      </section>`));

    const abas = [
      ["aprender", "📖 Aprender"],
      ["videos", "🎬 Vídeos"],
      ["jogos", "🎮 Jogos"],
      ["simulado", "📝 Simulado"]
    ];
    const barra = h(`<nav class="abas" role="tablist"></nav>`);
    abas.forEach(([id, nome]) => {
      const b = h(`<button class="aba" role="tab" aria-selected="${id === aba}">${nome}</button>`);
      b.onclick = () => { location.hash = `#/cap/${cap.id}/${id}`; };
      barra.appendChild(b);
    });
    app.appendChild(barra);

    const area = h(`<section></section>`);
    app.appendChild(area);
    if (aba === "videos") abaVideos(cap, area);
    else if (aba === "jogos") abaJogos(cap, area);
    else if (aba === "simulado") abaSimulado(cap, area);
    else abaAprender(cap, area);
  }

  /* ---------- Aprender (lição em passos) ---------- */
  function abaAprender(cap, area) {
    let atual = 0;
    const pontos = h(`<div class="passos-pontos"></div>`);
    const palco = h(`<div></div>`);
    area.append(pontos, palco);

    function desenha() {
      marcar("secoes", cap.id, atual);
      const vistos = prog.secoes[cap.id] || [];
      pontos.innerHTML = "";
      cap.secoes.forEach((s, i) => {
        const b = h(`<button class="ponto ${vistos.includes(i) ? "visto" : ""} ${i === atual ? "atual" : ""}" title="${esc(s.titulo)}">${i + 1}</button>`);
        b.onclick = () => { atual = i; desenha(); };
        pontos.appendChild(b);
      });
      const s = cap.secoes[atual];
      const ultimo = atual === cap.secoes.length - 1;
      palco.innerHTML = "";
      const card = h(`
        <article class="licao">
          <div class="licao-topo">
            <span class="licao-emoji">${s.emoji}</span>
            <div>
              <div class="etiqueta">Parte ${atual + 1} de ${cap.secoes.length}</div>
              <h2>${s.titulo}</h2>
            </div>
          </div>
          ${s.texto.map((p) => `<p>${p}</p>`).join("")}
          <div class="linha-botoes"><button class="btn btn-pequeno" data-ouvir>🔊 Ouvir esta parte</button></div>
          <div class="vire" tabindex="0" role="button" aria-label="Virar o cartão Você sabia?">
            <div class="vire-interno">
              <div class="vire-face vire-frente">🤔 Você sabia? (toque para virar)</div>
              <div class="vire-face vire-verso">${s.sabia}</div>
            </div>
          </div>
          <div class="licao-navegacao">
            <button class="btn" data-ant ${atual === 0 ? "disabled" : ""}>⬅ Anterior</button>
            ${ultimo
              ? `<a class="btn btn-cor" href="#/cap/${cap.id}/jogos">Terminei! Ir para os jogos 🎮</a>`
              : `<button class="btn btn-cor" data-prox>Próxima ➡</button>`}
          </div>
        </article>`);
      $("[data-ouvir]", card).onclick = () => falar(s.titulo + ". " + s.texto.join(" ") + " Você sabia? " + s.sabia);
      const vire = $(".vire", card);
      const virar = () => vire.classList.toggle("virado");
      vire.onclick = virar;
      vire.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); virar(); } };
      $("[data-ant]", card).onclick = () => { atual--; desenha(); };
      const prox = $("[data-prox]", card);
      if (prox) prox.onclick = () => { atual++; desenha(); window.scrollTo({ top: pontos.offsetTop - 80, behavior: "smooth" }); };
      palco.appendChild(card);
      if (ultimo && (prog.secoes[cap.id] || []).length === cap.secoes.length) {
        aviso("Lição completa! Ganhou uma ⭐");
      }
    }
    desenha();
  }

  /* ---------- Vídeos ---------- */
  function abaVideos(cap, area) {
    const grade = h(`<div class="grade-videos"></div>`);
    cap.videos.forEach((v) => {
      const card = h(`
        <div class="video-card">
          <div class="video-tela">
            <img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy">
            <button class="video-play" aria-label="Assistir ${esc(v.titulo)}">▶</button>
          </div>
          <div class="video-info">
            <h3>${esc(v.titulo)}</h3>
            <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">Abrir no YouTube ↗</a>
          </div>
        </div>`);
      $(".video-play", card).onclick = () => {
        const tela = $(".video-tela", card);
        tela.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&hl=pt-BR"
          title="${esc(v.titulo)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      };
      grade.appendChild(card);
    });
    area.appendChild(grade);
    area.appendChild(h(`<p class="aviso">👨‍👦 Dica para o papai: os vídeos são de canais do YouTube, não do livro. Vale dar uma olhada antes. Se algum vídeo não abrir aqui, use o link “Abrir no YouTube”. Para trocar um vídeo, edite a lista <code>videos</code> no arquivo <code>js/conteudo.js</code>. Os vídeos não funcionam se você abrir o arquivo direto do computador (file://) em alguns navegadores. Publicado no GitHub Pages, funciona normalmente.</p>`));
  }

  /* ---------- Jogos ---------- */
  function abaJogos(cap, area) {
    cap.jogos.forEach((jogo, idx) => {
      const feito = (prog.jogos[cap.id] || []).includes(idx);
      const box = h(`
        <article class="jogo">
          <div class="jogo-topo">
            <h3>${jogo.titulo}</h3>
            <span class="selo ${feito ? "feito" : ""}">${feito ? "✔ Concluído" : "Jogo " + (idx + 1)}</span>
          </div>
          ${jogo.instrucao ? `<p class="instrucao">${jogo.instrucao}</p>` : ""}
          <div class="jogo-corpo"></div>
          <div class="linha-botoes" style="margin-top:12px"><button class="btn btn-pequeno" data-reiniciar>🔄 Jogar de novo</button></div>
        </article>`);
      const corpo = $(".jogo-corpo", box);
      const concluir = () => {
        const sel = $(".selo", box);
        sel.className = "selo feito";
        sel.textContent = "✔ Concluído";
        som("festa");
        confete(30);
        aviso(sorteia(ELOGIOS));
        marcar("jogos", cap.id, idx);
        if ((prog.jogos[cap.id] || []).length === cap.jogos.length) setTimeout(() => aviso("Todos os jogos feitos! Ganhou uma ⭐"), 2300);
      };
      const iniciar = () => {
        corpo.innerHTML = "";
        const fn = { classificar: jogoClassificar, ordenar: jogoOrdenar, ligar: jogoLigar, vf: jogoVF, mapa: jogoMapa }[jogo.tipo];
        fn(jogo, corpo, concluir);
      };
      $("[data-reiniciar]", box).onclick = iniciar;
      iniciar();
      area.appendChild(box);
    });
    area.appendChild(h(`<div class="linha-botoes" style="justify-content:center"><a class="btn btn-cor btn-grande" href="#/cap/${cap.id}/simulado">Partiu simulado! 📝</a></div>`));
  }

  // Classificar: arrastar ou tocar-e-tocar
  function jogoClassificar(jogo, corpo, concluir) {
    let selecionado = null;
    let restantes = jogo.itens.length;
    const monte = h(`<div class="chips" aria-label="Cartões para classificar"></div>`);
    const caixas = h(`<div class="caixas"></div>`);
    corpo.append(monte, caixas);

    embaralhar(jogo.itens).forEach((it) => {
      const chip = h(`<button class="chip" draggable="true">${it.t}</button>`);
      chip._g = it.g;
      chip.addEventListener("dragstart", (e) => { selecionado = chip; e.dataTransfer.setData("text/plain", "x"); });
      chip.onclick = () => {
        if (chip.classList.contains("certo")) return;
        $$(".chip.selecionado", corpo).forEach((c) => c.classList.remove("selecionado"));
        selecionado = chip;
        chip.classList.add("selecionado");
      };
      monte.appendChild(chip);
    });

    jogo.grupos.forEach((nome, gi) => {
      const cx = h(`<div class="caixa" role="button" tabindex="0"><h4>${nome}</h4><div class="chips"></div></div>`);
      const soltar = () => {
        if (!selecionado) { aviso("Primeiro toque em um cartão 😉"); return; }
        const chip = selecionado;
        selecionado = null;
        chip.classList.remove("selecionado");
        if (chip._g === gi) {
          chip.classList.add("certo");
          chip.draggable = false;
          $(".chips", cx).appendChild(chip);
          som("ok");
          if (--restantes === 0) concluir();
        } else {
          som("erro");
          treme(chip);
          treme(cx);
        }
      };
      cx.onclick = (e) => { if (e.target.closest(".chip.certo")) return; soltar(); };
      cx.onkeydown = (e) => { if (e.key === "Enter") soltar(); };
      cx.addEventListener("dragover", (e) => { e.preventDefault(); cx.classList.add("sobre"); });
      cx.addEventListener("dragleave", () => cx.classList.remove("sobre"));
      cx.addEventListener("drop", (e) => { e.preventDefault(); cx.classList.remove("sobre"); soltar(); });
      caixas.appendChild(cx);
    });
  }

  // Ordenar: tocar na sequência certa
  function jogoOrdenar(jogo, corpo, concluir) {
    let proximo = 0;
    const monte = h(`<div class="chips"></div>`);
    const alvo = h(`<div class="ordem-alvo"></div>`);
    jogo.itens.forEach(() => alvo.appendChild(h(`<div class="ordem-slot"></div>`)));
    corpo.append(monte, alvo);
    embaralharDiferente(jogo.itens).forEach((txt) => {
      const chip = h(`<button class="chip">${txt}</button>`);
      chip.onclick = () => {
        if (txt === jogo.itens[proximo]) {
          const slot = alvo.children[proximo];
          slot.textContent = txt;
          slot.classList.add("preenchido");
          chip.remove();
          som("ok");
          if (++proximo === jogo.itens.length) concluir();
        } else {
          som("erro");
          treme(chip);
          aviso(sorteia(ANIMO));
        }
      };
      monte.appendChild(chip);
    });
  }

  // Ligar colunas
  function jogoLigar(jogo, corpo, concluir) {
    let esq = null;
    let feitos = 0;
    const grid = h(`<div class="ligar"><div class="ligar-col"></div><div class="ligar-col"></div></div>`);
    const [colE, colD] = grid.children;
    corpo.appendChild(grid);
    const ordemE = embaralhar(jogo.pares.map((p, i) => i));
    const ordemD = embaralharDiferente(ordemE);
    ordemE.forEach((i) => {
      const b = h(`<button class="chip">${jogo.pares[i][0]}</button>`);
      b._i = i;
      b.onclick = () => {
        if (b.disabled) return;
        $$(".chip.selecionado", colE).forEach((c) => c.classList.remove("selecionado"));
        esq = b;
        b.classList.add("selecionado");
      };
      colE.appendChild(b);
    });
    ordemD.forEach((i) => {
      const b = h(`<button class="chip">${jogo.pares[i][1]}</button>`);
      b.onclick = () => {
        if (b.disabled) return;
        if (!esq) { aviso("Primeiro toque em um item da esquerda 👈"); treme(colE); return; }
        if (esq._i === i) {
          const cor = "par-" + (feitos % 6);
          esq.classList.remove("selecionado");
          esq.classList.add(cor);
          b.classList.add(cor);
          esq.disabled = b.disabled = true;
          esq = null;
          som("ok");
          if (++feitos === jogo.pares.length) concluir();
        } else {
          som("erro");
          treme(b);
        }
      };
      colD.appendChild(b);
    });
  }

  // Verdadeiro ou falso
  function jogoVF(jogo, corpo, concluir) {
    let respondidas = 0, acertos = 0;
    const itens = embaralhar(jogo.itens);
    itens.forEach((it) => {
      const linha = h(`
        <div class="vf-item">
          <div class="vf-frase">${it.t}</div>
          <div class="vf-botoes">
            <button class="btn btn-pequeno" data-v="1">✅ Verdadeiro</button>
            <button class="btn btn-pequeno" data-v="0">❌ Falso</button>
            <button class="btn btn-pequeno" data-ouvir title="Ouvir">🔊</button>
          </div>
          <div class="vf-resp"></div>
        </div>`);
      $("[data-ouvir]", linha).onclick = () => falar(it.t);
      $$("[data-v]", linha).forEach((b) => {
        b.onclick = () => {
          const escolha = b.dataset.v === "1";
          const certo = escolha === it.v;
          $$("[data-v]", linha).forEach((x) => (x.disabled = true));
          b.classList.add("btn-cor");
          const r = $(".vf-resp", linha);
          r.className = "vf-resp " + (certo ? "ok" : "erro");
          r.textContent = (certo ? "Certo! " : `Ops! É ${it.v ? "VERDADEIRO" : "FALSO"}. `) + it.exp;
          som(certo ? "ok" : "erro");
          respondidas++;
          if (certo) acertos++;
          if (respondidas === itens.length) {
            if (acertos === itens.length) concluir();
            else aviso(`Você acertou ${acertos} de ${itens.length}. Toque em “Jogar de novo” para tentar fazer todas!`);
          }
        };
      });
      corpo.appendChild(linha);
    });
  }

  // Jogo do mapa (caminhos)
  const MAPA = [
    "C...##..P",
    ".##.##.#.",
    ".##...Q#.",
    "....##...",
    ".##.##.#.",
    "E......#M",
    "##H.##..I"
  ];
  const LUGARES = {
    C: { nome: "Casa do Bê", emoji: "🏠" },
    P: { nome: "Padaria", emoji: "🥖" },
    Q: { nome: "Praça", emoji: "🌳" },
    E: { nome: "Escola", emoji: "🏫" },
    M: { nome: "Mercado", emoji: "🛒" },
    H: { nome: "Hospital", emoji: "🏥" },
    I: { nome: "Igreja", emoji: "⛪" }
  };
  const DIRS = { cima: [0, -1], baixo: [0, 1], esquerda: [-1, 0], direita: [1, 0] };
  function celulaLivre(x, y) { return y >= 0 && y < MAPA.length && x >= 0 && x < MAPA[0].length && MAPA[y][x] !== "#"; }
  function posDe(letra) { for (let y = 0; y < MAPA.length; y++) { const x = MAPA[y].indexOf(letra); if (x >= 0) return [x, y]; } }
  function caminhoMaisCurto(de, para) {
    const chave = (p) => p.join(",");
    const fila = [de];
    const veio = { [chave(de)]: null };
    while (fila.length) {
      const p = fila.shift();
      if (p[0] === para[0] && p[1] === para[1]) break;
      for (const [nome, [dx, dy]] of Object.entries(DIRS)) {
        const n = [p[0] + dx, p[1] + dy];
        if (!celulaLivre(n[0], n[1]) || chave(n) in veio) continue;
        // só passa por cima de lugares se for o destino
        const l = MAPA[n[1]][n[0]];
        if (l !== "." && !(n[0] === para[0] && n[1] === para[1])) continue;
        veio[chave(n)] = { de: p, dir: nome };
        fila.push(n);
      }
    }
    const passos = [];
    let k = chave(para);
    while (veio[k]) { passos.unshift(veio[k].dir); k = chave(veio[k].de); }
    return passos;
  }
  function agrupar(passos) {
    const g = [];
    passos.forEach((d) => { if (g.length && g[g.length - 1].d === d) g[g.length - 1].n++; else g.push({ d, n: 1 }); });
    return g;
  }
  window.__mapa = { MAPA, LUGARES, caminhoMaisCurto, posDe }; // usado nos testes

  function jogoMapa(jogo, corpo, concluir) {
    const letras = Object.keys(LUGARES);
    let pos = posDe("C");
    let missao = 0;
    const TOTAL = 6;
    let atual = null;

    const area = h(`
      <div class="mapa-area">
        <div>
          <div class="mapa" style="grid-template-columns: repeat(${MAPA[0].length}, minmax(0, 1fr))"></div>
          <div class="controles">
            <span></span><button data-d="cima" aria-label="Para cima">⬆️</button><span></span>
            <button data-d="esquerda" aria-label="Para a esquerda">⬅️</button>
            <button data-d="baixo" aria-label="Para baixo">⬇️</button>
            <button data-d="direita" aria-label="Para a direita">➡️</button>
          </div>
        </div>
        <div class="missao"></div>
      </div>`);
    corpo.appendChild(area);
    const mapa = $(".mapa", area);
    const painel = $(".missao", area);
    const ctr = $(".controles", area);

    function desenhar() {
      mapa.innerHTML = "";
      MAPA.forEach((linha, y) => [...linha].forEach((ch, x) => {
        let cls = ch === "#" ? "bloco" : ch === "." ? "rua" : "lugar";
        if (atual && atual.tipo === "ir" && atual.alvo === ch) cls += " alvo";
        const c = h(`<button class="cel ${cls}" tabindex="-1" aria-label="${ch === "#" ? "quarteirão" : ch === "." ? "rua" : LUGARES[ch].nome}">${ch === "#" ? (x + y) % 3 === 0 ? "🌲" : "🏘️" : ch === "." ? "" : LUGARES[ch].emoji}</button>`);
        c.dataset.x = x; c.dataset.y = y;
        if (pos[0] === x && pos[1] === y) c.appendChild(h(`<span class="bonequinho">🧒🏽</span>`));
        if (ch !== "#" && ch !== ".") c.onclick = () => escolherLugar(ch, c);
        mapa.appendChild(c);
      }));
    }
    function novaMissao() {
      if (missao >= TOTAL) {
        painel.innerHTML = `<h4>🏆 Você completou todas as missões!</h4><p>Você sabe usar direções e pontos de referência. Parabéns!</p>`;
        ctr.style.visibility = "hidden";
        atual = null;
        desenhar();
        concluir();
        return;
      }
      const aqui = MAPA[pos[1]][pos[0]];
      const opcoes = letras.filter((l) => l !== aqui);
      const alvo = sorteia(opcoes);
      if (missao % 2 === 0) {
        atual = { tipo: "ir", alvo, passos: 0, min: caminhoMaisCurto(pos, posDe(alvo)).length };
        ctr.style.visibility = "visible";
        painel.innerHTML = `
          <h4>Missão ${missao + 1} de ${TOTAL} 🚶🏽</h4>
          <p>Use as setas para levar o Bê até <b>${LUGARES[alvo].emoji} ${LUGARES[alvo].nome}</b>.</p>
          <p>Ande só pelas ruas cinzas! Dá para chegar em <b>${atual.min}</b> passos.</p>
          <p data-passos>Passos: 0</p>
          ${legenda()}`;
      } else {
        const grupos = agrupar(caminhoMaisCurto(pos, posDe(alvo)));
        const nomes = { cima: "para cima ⬆️", baixo: "para baixo ⬇️", esquerda: "para a esquerda ⬅️", direita: "para a direita ➡️" };
        atual = { tipo: "adivinhar", alvo };
        ctr.style.visibility = "hidden";
        painel.innerHTML = `
          <h4>Missão ${missao + 1} de ${TOTAL} 🧭</h4>
          <p>O Bê está em <b>${LUGARES[aqui] ? LUGARES[aqui].emoji + " " + LUGARES[aqui].nome : "um ponto da rua"}</b>. Siga as instruções com o dedo no mapa:</p>
          <ol>${grupos.map((g) => `<li>Ande ${g.n} ${g.n > 1 ? "quadras" : "quadra"} ${nomes[g.d]}</li>`).join("")}</ol>
          <p><b>Onde ele chegou?</b> Toque no lugar certo no mapa!</p>
          ${legenda()}`;
      }
      desenhar();
    }
    function legenda() {
      return `<div class="legenda">${Object.values(LUGARES).map((l) => `<span>${l.emoji} ${l.nome}</span>`).join("")}<span>🏘️ Quarteirão</span><span>⬛ Rua</span></div>`;
    }
    function mover(d) {
      if (!atual || atual.tipo !== "ir") return;
      const [dx, dy] = DIRS[d];
      const n = [pos[0] + dx, pos[1] + dy];
      if (!celulaLivre(n[0], n[1])) { som("erro"); treme(mapa); aviso("Aí não dá! Só pelas ruas 🚧"); return; }
      const l = MAPA[n[1]][n[0]];
      if (l !== "." && l !== atual.alvo) { som("erro"); aviso(`Esse é o lugar ${LUGARES[l].nome}. Continue procurando!`); return; }
      pos = n;
      atual.passos++;
      const p = $("[data-passos]", painel);
      if (p) p.textContent = "Passos: " + atual.passos;
      desenhar();
      if (l === atual.alvo) {
        som("ok");
        aviso(atual.passos <= atual.min ? "Caminho perfeito! 🌟" : "Chegou! 🎉");
        missao++;
        setTimeout(novaMissao, 900);
      }
    }
    function escolherLugar(letra, cel) {
      if (!atual || atual.tipo !== "adivinhar") return;
      if (letra === atual.alvo) {
        pos = posDe(letra);
        som("ok");
        aviso(sorteia(ELOGIOS));
        missao++;
        setTimeout(novaMissao, 700);
        desenhar();
      } else {
        som("erro");
        treme(cel);
        aviso(sorteia(ANIMO));
      }
    }
    $$("[data-d]", ctr).forEach((b) => (b.onclick = () => mover(b.dataset.d)));
    const teclas = { ArrowUp: "cima", ArrowDown: "baixo", ArrowLeft: "esquerda", ArrowRight: "direita" };
    const onKey = (e) => {
      if (!document.body.contains(area)) { document.removeEventListener("keydown", onKey); return; }
      if (teclas[e.key] && atual && atual.tipo === "ir") { e.preventDefault(); mover(teclas[e.key]); }
    };
    document.addEventListener("keydown", onKey);
    novaMissao();
  }

  /* ---------- Aba simulado (dentro do capítulo) ---------- */
  function abaSimulado(cap, area) {
    const lista = SIMS[cap.id];
    const nMc = lista.filter((q) => q.tipo === "mc").length;
    const melhor = prog.sim[cap.id];
    area.appendChild(h(`
      <section class="bloco">
        <h2>📝 Simulado: ${cap.titulo}</h2>
        <p><b>20 questões</b> embaralhadas: <b>${nMc}</b> de marcar (múltipla escolha) e <b>${lista.length - nMc}</b> para escrever (abertas). A ordem muda toda vez!</p>
        <p>Acertando <b>14 ou mais</b>, você ganha uma ⭐.</p>
        ${melhor != null ? `<p class="selo feito" style="display:inline-block">Sua melhor nota: ${fmt(melhor)}/20</p>` : ""}
        <div class="linha-botoes">
          <a class="btn btn-cor btn-grande" href="#/simulado/${cap.id}">Começar simulado ▶</a>
          <button class="btn" data-imprimir>🖨️ Versão para imprimir</button>
        </div>
      </section>`));
    $("[data-imprimir]", area).onclick = () => imprimir(cap.id);
  }

  /* =========================================================
     SIMULADOS
     ========================================================= */
  function telaEscolhaSimulado() {
    document.body.classList.add("tema-geral");
    app.appendChild(h(`<a class="voltar" href="#/">⬅ Voltar</a>`));
    app.appendChild(h(`<h1>📝 Escolha o simulado</h1>`));
    const grade = h(`<div class="escolha-simulado"></div>`);
    CAPS.forEach((cap) => {
      const m = prog.sim[cap.id];
      grade.appendChild(h(`
        <a class="card-cap tema-${cap.cor}" href="#/simulado/${cap.id}">
          <div class="card-cap-topo"><span class="card-cap-emoji">${cap.emoji}</span><div><div class="card-cap-num">Capítulo ${cap.numero}</div><h2>${cap.titulo}</h2></div></div>
          <div class="card-cap-corpo"><p>20 questões${m != null ? ` • melhor nota: ${fmt(m)}/20` : ""}</p></div>
        </a>`));
    });
    const mg = prog.sim.geral;
    grade.appendChild(h(`
      <a class="card-cap tema-geral" href="#/simulado/geral">
        <div class="card-cap-topo"><span class="card-cap-emoji">🌈</span><div><div class="card-cap-num">Todos os temas</div><h2>Simulado Geral</h2></div></div>
        <div class="card-cap-corpo"><p>20 questões sorteadas dos 4 capítulos, tudo misturado${mg != null ? ` • melhor nota: ${fmt(mg)}/20` : ""}</p></div>
      </a>`));
    app.appendChild(grade);
    app.appendChild(h(`<div class="linha-botoes" style="margin-top:20px"><button class="btn" id="impGeral">🖨️ Imprimir simulado geral</button></div>`));
    $("#impGeral").onclick = () => imprimir("geral");
  }

  function montarQuestoes(id) {
    let base;
    if (id === "geral") {
      base = [];
      CAPS.forEach((cap) => {
        const mc = embaralhar(SIMS[cap.id].filter((q) => q.tipo === "mc")).slice(0, 3);
        const ab = embaralhar(SIMS[cap.id].filter((q) => q.tipo === "ab")).slice(0, 2);
        mc.concat(ab).forEach((q) => base.push(Object.assign({ cap: cap.id }, q)));
      });
    } else {
      base = SIMS[id].map((q) => Object.assign({ cap: id }, q));
    }
    return embaralhar(base).map((q) => {
      if (q.tipo !== "mc") return q;
      const opcoes = embaralhar(q.o.map((txt, i) => ({ txt, certa: i === 0 })));
      return Object.assign({}, q, { opcoes });
    });
  }

  function telaSimulado(id) {
    const cap = id === "geral" ? null : capPorId(id);
    document.body.classList.add("tema-" + (cap ? cap.cor : "geral"));
    const qs = montarQuestoes(id);
    const respostas = []; // {pontos, escolha}
    let i = 0;

    app.appendChild(h(`<a class="voltar" href="${cap ? `#/cap/${cap.id}/simulado` : "#/simulados"}">⬅ Sair do simulado</a>`));
    const topo = h(`
      <div class="sim-topo">
        <h1 style="margin:0">${cap ? cap.emoji + " " + cap.titulo : "🌈 Simulado Geral"}</h1>
        <span class="etiqueta" data-placar>Pontos: 0</span>
      </div>`);
    const barra = h(`<div class="barra" style="margin-bottom:14px"><span style="width:0%"></span></div>`);
    const palco = h(`<div></div>`);
    app.append(topo, barra, palco);

    const pontos = () => respostas.reduce((a, r) => a + (r ? r.pontos : 0), 0);
    function atualizaTopo() {
      $("[data-placar]", topo).textContent = "Pontos: " + fmt(pontos());
      $("span", barra).style.width = (i / qs.length) * 100 + "%";
    }

    function mostra() {
      atualizaTopo();
      if (i >= qs.length) return resultado();
      const q = qs[i];
      const capQ = capPorId(q.cap);
      palco.innerHTML = "";
      const card = h(`
        <article class="sim-cartao">
          <div class="sim-meta">
            <span class="etiqueta">Questão ${i + 1} de ${qs.length}</span>
            <span class="etiqueta ${q.tipo === "ab" ? "aberta" : ""}">${q.tipo === "ab" ? "✏️ Escreva" : "🔘 Marque uma"}</span>
            ${id === "geral" ? `<span class="etiqueta">${capQ.emoji} Cap. ${capQ.numero}</span>` : ""}
          </div>
          <div class="sim-pergunta">${q.p}</div>
          <div data-corpo></div>
          <div data-fim></div>
          <div class="linha-botoes" style="margin-top:12px"><button class="btn btn-pequeno" data-ouvir>🔊 Ouvir a pergunta</button></div>
        </article>`);
      const corpo = $("[data-corpo]", card);
      const fim = $("[data-fim]", card);
      $("[data-ouvir]", card).onclick = () =>
        falar(q.p + (q.tipo === "mc" ? " " + q.opcoes.map((o, k) => "Letra " + "ABCD"[k] + ": " + o.txt).join(". ") : ""));

      const botaoProxima = () => {
        const b = h(`<div class="linha-botoes" style="margin-top:12px"><button class="btn btn-cor btn-grande">${i === qs.length - 1 ? "Ver resultado 🏁" : "Próxima ➡"}</button></div>`);
        $("button", b).onclick = () => { i++; mostra(); window.scrollTo({ top: 0, behavior: "smooth" }); };
        fim.appendChild(b);
        $("button", b).focus({ preventScroll: true });
      };

      if (q.tipo === "mc") {
        const ops = h(`<div class="opcoes"></div>`);
        q.opcoes.forEach((o, k) => {
          const b = h(`<button class="opcao"><span class="letra">${"ABCD"[k]}</span><span>${o.txt}</span></button>`);
          b.onclick = () => {
            $$(".opcao", ops).forEach((x) => (x.disabled = true));
            const certaIdx = q.opcoes.findIndex((x) => x.certa);
            ops.children[certaIdx].classList.add("certa");
            if (!o.certa) b.classList.add("errada");
            respostas[i] = { pontos: o.certa ? 1 : 0, escolha: o.txt };
            som(o.certa ? "ok" : "erro");
            fim.appendChild(h(`<div class="feedback ${o.certa ? "ok" : "erro"}">${o.certa ? sorteia(ELOGIOS) : "A resposta certa é: <b>" + q.opcoes[certaIdx].txt + "</b>"}${q.exp ? "<br>💡 " + q.exp : ""}</div>`));
            atualizaTopo();
            botaoProxima();
          };
          ops.appendChild(b);
        });
        corpo.appendChild(ops);
      } else {
        const ta = h(`<textarea class="resposta" placeholder="Escreva sua resposta aqui..." aria-label="Sua resposta"></textarea>`);
        const conferir = h(`<div class="linha-botoes" style="margin-top:10px"><button class="btn btn-cor">Conferir resposta 👀</button></div>`);
        corpo.append(ta, conferir);
        $("button", conferir).onclick = () => {
          if (!ta.value.trim() && !confirm("Você não escreveu nada. Quer ver a resposta mesmo assim?")) return;
          ta.readOnly = true;
          conferir.remove();
          const fb = h(`
            <div class="feedback info">
              📗 <b>Resposta esperada:</b> ${q.r}
              <p style="margin:8px 0 0">Compare com a sua resposta (peça ajuda a um adulto!). Como foi?</p>
              <div class="autoaval">
                <button class="btn btn-pequeno" data-p="1">✅ Acertei</button>
                <button class="btn btn-pequeno" data-p="0.5">🤏 Acertei uma parte</button>
                <button class="btn btn-pequeno" data-p="0">❌ Errei</button>
              </div>
            </div>`);
          $$("[data-p]", fb).forEach((b) => {
            b.onclick = () => {
              const p = parseFloat(b.dataset.p);
              respostas[i] = { pontos: p, escolha: ta.value.trim() || "(em branco)" };
              $$("[data-p]", fb).forEach((x) => (x.disabled = true));
              b.classList.add("btn-cor");
              som(p > 0 ? "ok" : "erro");
              atualizaTopo();
              botaoProxima();
            };
          });
          fim.appendChild(fb);
        };
      }
      palco.appendChild(card);
    }

    function resultado() {
      const nota = pontos();
      const pct = nota / qs.length;
      const estrelas = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;
      const anterior = prog.sim[id];
      if (anterior == null || nota > anterior) { prog.sim[id] = nota; salvar(); }
      const msg = pct >= 0.9 ? "Incrível! Você está prontíssimo para a prova! 🏆"
        : pct >= 0.7 ? "Muito bem! Revise o que errou e você vai arrasar! 💪"
        : pct >= 0.5 ? "Bom começo! Volte na lição e nos jogos e tente de novo. 📖"
        : "Vamos estudar mais um pouquinho? Leia a lição de novo e refaça! 💛";
      if (pct >= 0.7) { confete(70); som("festa"); }
      palco.innerHTML = "";
      const r = h(`
        <article class="sim-cartao resultado">
          <h2>Resultado</h2>
          <div class="nota">${fmt(nota)}<small style="font-size:32px">/${qs.length}</small></div>
          <div class="estrelas">${"⭐".repeat(estrelas)}${"☆".repeat(3 - estrelas)}</div>
          <p style="font-size:20px;font-weight:800">${msg}</p>
          ${anterior != null && nota > anterior ? `<p class="selo feito" style="display:inline-block">Novo recorde! Antes: ${fmt(anterior)}</p>` : ""}
          <div class="linha-botoes" style="justify-content:center;margin-top:10px">
            <button class="btn btn-cor" data-refazer>🔄 Fazer de novo (novas posições)</button>
            <a class="btn" href="${cap ? `#/cap/${cap.id}/aprender` : "#/"}">📖 ${cap ? "Revisar a lição" : "Início"}</a>
          </div>
          <div class="revisao"><h3>Revisão das questões</h3></div>
        </article>`);
      const rev = $(".revisao", r);
      qs.forEach((q, k) => {
        const resp = respostas[k] || { pontos: 0, escolha: "-" };
        const cls = resp.pontos === 1 ? "ok" : resp.pontos > 0 ? "meio" : "erro";
        const certa = q.tipo === "mc" ? q.opcoes.find((o) => o.certa).txt : q.r;
        rev.appendChild(h(`
          <div class="revisao-item ${cls}">
            <p><b>${k + 1}. ${q.p}</b></p>
            <p>Sua resposta: ${esc(resp.escolha)}</p>
            ${resp.pontos === 1 && q.tipo === "mc" ? "" : `<p>✔ ${q.tipo === "mc" ? "Certa" : "Esperada"}: ${certa}</p>`}
          </div>`));
      });
      $("[data-refazer]", r).onclick = () => rota();
      palco.appendChild(r);
    }

    mostra();
  }

  /* ---------- versão para imprimir ---------- */
  function imprimir(id) {
    const cap = id === "geral" ? null : capPorId(id);
    const qs = montarQuestoes(id);
    $$(".folha-impressao").forEach((f) => f.remove());
    const folha = h(`<div class="folha-impressao"></div>`);
    folha.innerHTML = `
      <h1>Simulado — ${cap ? "Capítulo " + cap.numero + ": " + cap.titulo : "Geral (todos os capítulos)"}</h1>
      <p>Nome: ______________________________________ Data: ____/____/______</p>
      ${qs.map((q, k) => `
        <div class="q">
          <p><b>${k + 1}.</b> ${q.p}</p>
          ${q.tipo === "mc"
            ? q.opcoes.map((o, j) => `<p style="margin:2px 0 2px 16px">( ${"ABCD"[j]} ) ${o.txt}</p>`).join("")
            : `<div class="linhas"></div><div class="linhas"></div><div class="linhas"></div>`}
        </div>`).join("")}
      <div class="quebra">
        <h2>Gabarito</h2>
        ${qs.map((q, k) => `<p><b>${k + 1}.</b> ${q.tipo === "mc" ? "Letra " + "ABCD"[q.opcoes.findIndex((o) => o.certa)] + " — " + q.opcoes.find((o) => o.certa).txt : q.r}</p>`).join("")}
      </div>`;
    app.appendChild(folha);
    window.print();
  }

  /* ---------------- início ---------------- */
  atualizarEstrelas();
  rota();
})();
