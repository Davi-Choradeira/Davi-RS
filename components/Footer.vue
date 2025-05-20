<template>
  <footer>
    <p>🛸 Criado por Davi Rocha - Laboratório Galáctico Z9</p>
    <p class="sistema">&copy; 2025 • Todos os direitos interplanetários reservados.</p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

footer {
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(to right, #0f0f0f, #111927, #0f0f0f);
  color: #7fffd4;
  font-size: 0.95rem;
  font-family: 'Orbitron', sans-serif;
  border-top: 2px solid #00ffc3;
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 2px;
  background: linear-gradient(to right, transparent, #00ffd5, transparent);
  animation: scanline 5s linear infinite;
  opacity: 0.6;
}

@keyframes scanline {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

footer p {
  margin: 0.3rem 0;
  text-shadow: 0 0 6px #00ffd5;
}

.sistema {
  font-size: 0.8rem;
  color: #66ffe0;
  opacity: 0.7;
}
</style>
