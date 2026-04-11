window.addEventListener("scroll", function () {
  let supimpa = document.getElementById("super");
  if (supimpa) {
    let pos = supimpa.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      supimpa.classList.add("show");
    }
  }
});
window.addEventListener("scroll", function () {
  let supimpa = document.getElementById("ideologias");
  if (supimpa) {
    let pos = supimpa.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      supimpa.classList.add("show");
    }
  }
});
window.addEventListener("scroll", function () {
  let supimpa = document.getElementById("sub");
  if (supimpa) {
    let pos = supimpa.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      supimpa.classList.add("show");
    }
  }
});
window.addEventListener("scroll", function () {
  let supimpa = document.getElementById("banners");
  if (supimpa) {
    let pos = supimpa.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      supimpa.classList.add("show");
    }
  }
});

function atualizarContadores() {
  const agora = new Date();

  // RESET DIARIO (18h)
  let resetDiario = new Date();
  resetDiario.setHours(18, 0, 0, 0);
  if (agora >= resetDiario) {
    resetDiario.setDate(resetDiario.getDate() + 1);
  }

  // RESET SEMANAL (Quinta 18h)
  let resetSemanal = new Date();
  let diasAteQuinta = (4 - agora.getDay() + 7) % 7;
  if (diasAteQuinta === 0 && agora >= resetDiario) {
    diasAteQuinta = 7;
  }
  resetSemanal.setDate(agora.getDate() + diasAteQuinta);
  resetSemanal.setHours(18, 0, 0, 0);

  function exibir(alvo, id, mostrarDia = false) {
    const diff = alvo - agora;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    let tempo = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

    if (mostrarDia) {
      tempo = `${d}d ` + tempo;
    }

    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerText = tempo;
    }
  }

  exibir(resetDiario, "diario-timer");
  exibir(resetSemanal, "semanal-timer", true);
}

setInterval(atualizarContadores, 1000);
atualizarContadores();

function relogio() {
  const agorapoco = new Date();
  const tmp = agorapoco.toLocaleTimeString("pt-br", { hour12: false });
  document.getElementById("hor").innerText = tmp;
}
setInterval(relogio, 1000);

const input = document.getElementById("input");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");

// foco ao clicar
terminal.addEventListener("click", (e) => {
  if (e.target !== input) {
    input.focus();
  }
});

// função pra escrever no terminal
function addLine(text) {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);

  output.scrollTop = output.scrollHeight;
}
const posi = [
  "que azar",
  "foi quase",
  "Meh",
  "opa",
  "boa conseguiu",
  "Caralhoooo",
  "Assista os videos do LCB Horii",
];
const vai = [
  "Vai tirar 000",
  "vai tirar 00",
  "Vai tirar nada kkkkkk",
  "Um usuário ja usou esse comando",
];
const prescript = [
  "Bata na 3º pessoa que encontrar",
  "escreva um livro de 543 páginas as 3horas",
  "seja um certo fixer da livraria...",
  "pinte seu calcanhar de azul",
  "leve pães de queijo ao dono do site",
  "um usuario ja recebeu um prescript antes",
];
// comandos
const commands = {
  help: () => {
    addLine("comandos disponíveis:");
    addLine("help - mostra comandos");
    addLine("sinners - abre página");
    addLine("clear - limpa terminal");
    addLine("about - sobre o site");
    addLine("dquixote - descobre");
    addLine("pais - hexa de 2026");
    addLine("eita - inicio");
    addLine("resets - para resets");
  },

  sinners: () => {
    addLine("abrindo sinners...");
    setTimeout(() => {
      window.location.href = "../abas/sinners/sinners.html";
    }, 500);
  },

  clear: () => {
    output.innerHTML = "";
  },

  dquixote: () => {
    output.innerHTML += `<img src="../assets/chibidon-removebg-preview.png" width="200">`;
  },
  opcoes: () => {
    window.location.href = "#super";
    output.classList.remove("azule");
  },
  resets: () => {
    output.classList.remove("azule");
    window.location.href = "#sub";
  },
  pais: () => {
    output.classList.remove("azule");
    output.innerHTML += `<img src="../assets/brasil.png" width="200px">`;
  },
  eita: () => {
    output.classList.remove("azule");
    window.location.href = "#lcb";
  },
  myluck: () => {
    output.classList.remove("azule");
    alert(posi[Math.floor(Math.random() * posi.length)]);
  },
  naogostei: () => {
    output.classList.remove("azule");
    alert("vaza");
    addLine("modo auto-destruição...");
    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 5000);
  },
  gacha: () => {
    output.classList.remove("azule");
    addLine("analisando sua sorte...");
    setTimeout(() => {
      addLine(vai[Math.floor(Math.random() * vai.length)]);
    }, 5000);
  },
  index: () => {
    output.classList.add("azule");
    output.innerHTML += `<img src="../assets/The_Index_Logo.webp" width="120">`;
    addLine("a cidade te agraceia com o prescrito: ...");
    setTimeout(() => {
      addLine(prescript[Math.floor(Math.random() * prescript.length)]);
    }, 3000);
  },
  about: () => {
    output.classList.remove("azule");
    addLine("Valencina nursefather mais forte e ninguém muda minha opinião");
  },
};

// executa comando
function runCommand(cmd) {
  if (commands[cmd]) {
    commands[cmd]();
  } else {
    output.classList.remove("azule");
    addLine("comando não encontrado 💀 (digite help)");
  }
}

// evento principal
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.toLowerCase().trim();

    if (cmd === "") return;

    addLine(">> " + cmd);
    runCommand(cmd);

    input.value = "";
  }
});

function termina() {
  const terminale = document.getElementById("terminal");
  if (terminale.classList.contains("hidden")) {
    terminale.classList.remove("hidden");
  } else {
    terminale.classList.add("hidden");
  }
}
