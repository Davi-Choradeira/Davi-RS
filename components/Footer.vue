<template>
  <footer class="footer">
    <p data-aos="fade-up" data-aos-duration="1200"> Criado por Davi Rocha Santos</p>
    <p class="sistema" data-aos="fade-up" data-aos-delay="300">&copy; 2025 • Todos os direitos interplanetários reservados.</p>
    <div class="energy-bar"></div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.footer {
  text-align: center;
  padding: 2rem 1rem;
  color: #7fffd4;
  font-size: 0.95rem;
  font-family: 'Orbitron', sans-serif;
  border-top: 2px solid #00ffc3;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
}

.footer::before {
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
  0% { left: -100%; }
  100% { left: 100%; }
}

.footer p {
  margin: 0.3rem 0;
  text-shadow: 0 0 8px #00ffd5;
  position: relative;
  animation: glow-text 2.5s infinite alternate;
}

@keyframes glow-text {
  0% { text-shadow: 0 0 8px #00ffd5; }
  100% { text-shadow: 0 0 15px #00ffea; }
}

.sistema {
  font-size: 0.8rem;
  color: #66ffe0;
  opacity: 0.7;
}

.energy-bar {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 3px;
  background: linear-gradient(to right, #00ffea, #00ffb3, #00ffea);
  border-radius: 50px;
  animation: pulse-energy 3s infinite ease-in-out;
}

@keyframes pulse-energy {
  0% { transform: translateX(-50%) scaleX(1); opacity: 1; }
  50% { transform: translateX(-50%) scaleX(1.2); opacity: 0.6; }
  100% { transform: translateX(-50%) scaleX(1); opacity: 1; }
}

@media (max-width: 600px) {
  .footer p { font-size: 0.85rem; }
  .sistema { font-size: 0.75rem; }
}
</style>