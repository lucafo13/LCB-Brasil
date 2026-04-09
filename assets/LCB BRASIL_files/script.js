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
// Faz com que clicar em qualquer lugar do terminal foque no input
document.getElementById("terminal").addEventListener("click", () => {
  document.querySelector(".textanal").focus();
});
const input = document.getElementById("input");
const output = document.getElementById("output");
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.toLowerCase();
    output.innerHTML += `<div>>>${cmd}</div>`;
    input.value = "";

    if (cmd === "sinners") {
      window.location.href = "../abas/sinners/sinners.html";
    }
  }

  output.scrollTop = output.scrollHeight;
});
