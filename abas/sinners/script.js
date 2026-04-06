window.addEventListener("scroll", function () {
  if (
    document.getElementById("super").getBoundingClientRect().top <
    this.window.innerHeight
  ) {
    document.getElementById("super").classList.add("ativo");
  }
});
window.addEventListener("scroll", function () {
  if (
    document.getElementById("super2").getBoundingClientRect().top <
    this.window.innerHeight
  ) {
    document.getElementById("super2").classList.add("ativo");
  }
});
window.addEventListener("scroll", function () {
  if (
    document.getElementById("super3").getBoundingClientRect().top <
    this.window.innerHeight
  ) {
    document.getElementById("super3").classList.add("ativo");
  }
});
