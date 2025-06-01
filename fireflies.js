document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fireflies");
  const total = 40;

  for (let i = 0; i < total; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");

    // Posição inicial aleatória
    firefly.style.top = Math.random() * 100 + "vh";
    firefly.style.left = Math.random() * 100 + "vw";

    // Animação mais lenta (aumentando o tempo)
    firefly.style.animationDuration = 30 + Math.random() * 30 + "s";  // Aumentei a duração para 10-40s
    firefly.style.animationDelay = Math.random() * 20 + "s";

    container.appendChild(firefly);
  }
});
