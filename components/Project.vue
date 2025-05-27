<template>
  <section class="projects" id="projects">
    <h2 data-aos="flip-up" data-aos-duration="1500"> Projetos </h2>
    <div class="project-grid">
      <div 
        class="project-holo" 
        v-for="n in 6" 
        :key="n" 
        data-aos="fade-right" 
        :data-aos-delay="n * 200"
        data-aos-duration="1200"
      >
        <div class="holo-glow">
          <h3>Projeto #{{ n }}</h3>
          <p>
            Sinal captado de um protótipo avançado criado no laboratório orbital de Davi Rocha. 
            Tecnologia: desconhecida. Estilo: fora deste mundo.
          </p>
        </div>
      </div>
    </div>
  </section>
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

.projects {
  padding: 5rem 2rem;
  font-family: 'Orbitron', sans-serif;
  color: #ccffee;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.projects::before {
  content: '';
  position: absolute;
  width: 120%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/nebula.png');
  opacity: 0.02;
  top: 0;
  left: -10%;
  z-index: 0;
  animation: drift 60s linear infinite;
}

@keyframes drift {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

h2 {
  font-size: 2.4rem;
  margin-bottom: 3rem;
  color: #7fff00;
  text-shadow: 0 0 15px #00ffae;
  position: relative;
  z-index: 1;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.project-holo {
  perspective: 1000px;
}

.holo-glow {
  background: linear-gradient(135deg, rgba(0,255,204,0.08), rgba(127,255,0,0.05));
  border: 1px solid rgba(0, 255, 204, 0.2);
  box-shadow:
    0 0 20px rgba(0, 255, 204, 0.1),
    inset 0 0 10px rgba(0, 255, 204, 0.1);
  padding: 2rem;
  border-radius: 20px;
  width: 280px;
  transform-style: preserve-3d;
  transform: rotateX(4deg) rotateY(12deg);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}

.project-holo:hover .holo-glow {
  transform: rotateX(0deg) rotateY(0deg) scale(1.05);
  box-shadow:
    0 0 30px rgba(0, 255, 204, 0.5),
    inset 0 0 20px rgba(127, 255, 212, 0.3);
}

.holo-glow h3 {
  font-size: 1.3rem;
  color: #00fff7;
  margin-bottom: 0.75rem;
  text-shadow: 0 0 8px #00fff7;
}

.holo-glow p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #aaffee;
}

@media (max-width: 600px) {
  h2 {
    font-size: 1.8rem;
  }

  .holo-glow {
    width: 100%;
  }
}
</style>