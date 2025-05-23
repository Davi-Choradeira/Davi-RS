<template>
  <section class="about" id="about" data-aos="fade-left" data-aos-duration="1500">
    <h2 data-aos="fade-up" data-aos-delay="300">🛸 Quem é Davi Rocha?</h2>
    <p data-aos="fade-up" data-aos-delay="600">
      Olá, terráqueo! Me chamo Davi Rocha — um ex-professor que decidiu explorar uma nova galáxia: o desenvolvimento web.
      Minha jornada começou em salas de aula, mas foi entre linhas de código e constelações de criatividade que encontrei
      minha verdadeira paixão: o <strong>frontend</strong>.
    </p>
    <p class="highlight" data-aos="fade-up" data-aos-delay="900">
      Hoje, sou um desenvolvedor em constante evolução, criando interfaces futuristas, acessíveis e responsivas — tudo com
      performance de dobra espacial.
    </p>
    <p data-aos="fade-up" data-aos-delay="1200">
      Estou em transição de carreira, mas minha missão é clara: combinar design, lógica e tecnologia para entregar experiências
      digitais envolventes. A cada projeto, um novo planeta a ser descoberto. A cada componente, um pequeno universo a ser criado.
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

p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #d2fff2;
  padding: 0 1rem;
  margin-bottom: 1.2rem;
}

.highlight {
  color: #00ffc8;
  font-weight: 600;
  background: rgba(0, 255, 204, 0.07);
  border: 1px dashed rgba(0, 255, 204, 0.2);
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem 0;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.1);
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 6px #7fff00;
  }
  50% {
    text-shadow: 0 0 20px #7fff00;
  }
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
