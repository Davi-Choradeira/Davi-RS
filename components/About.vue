<template>
  <section class="about" id="about" data-aos="fade-left" data-aos-duration="1500">
    <h2 data-aos="fade-up" data-aos-delay="300">🛸 Quem é Davi Rocha?</h2>
    <p data-aos="fade-up" data-aos-delay="600">
      Explorador digital de uma galáxia onde o design encontra a tecnologia. Minha missão? Codificar universos visuais 
      acessíveis, responsivos e com performance interestelar. Com habilidades forjadas entre nebulosas de criatividade 
      e sistemas solares de lógica, estou sempre pronto para o próximo salto hiperespacial.
    </p>
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.about {
  max-width: 800px;
  margin: 6rem auto;
  padding: 2rem 1rem;
  text-align: center;
  color: #caffee;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  border: 1px solid rgba(0, 255, 204, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 40px rgba(0, 255, 170, 0.1);
}

h2 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #7fff00;
  text-shadow: 0 0 6px #7fff00;
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 6px #7fff00;
  }
  50% {
    text-shadow: 0 0 20px #7fff00;
  }
}

p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #d2fff2;
  padding: 0 1rem;
}

@media (max-width: 600px) {
  h2 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
