<template>
  <section class="bio-section" id="sobre">
    <div class="stars-bg"></div>

    <div class="bio-container">
      <div class="bio-photo-frame">
        <div class="photo-overlay">
          <span class="label">Futuro Eu</span>
        </div>
      </div>

      <div class="bio-text">
        <h2 data-aos="fade-up"> Diário de bordo: quem sou eu</h2>

        <p data-aos="fade-up" data-aos-delay="200">
          Olá! Me chamo <span class="strong">Davi Rocha Santos</span>, nascido em <span class="strong">1993</span>, em <span class="strong">Campinas-SP</span>.
          Iniciei minha jornada como professor, cultivando escuta, paciência e propósito.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          A curiosidade virou paixão — <span class="highlight">a tecnologia</span> passou a ser meu universo. Descobri nela uma ponte entre saber e sonho.
        </p>

        <p data-aos="fade-up" data-aos-delay="600">
          No <span class="highlight">desenvolvimento web</span> encontrei minha voz. Dominei ferramentas como <span class="code">JavaScript</span>, <span class="code">Vue</span>,
          <span class="code">Nuxt</span> e <span class="code">React</span>, sempre com a missão de conectar ideias com experiências reais.
        </p>

        <p data-aos="fade-up" data-aos-delay="800">
          Hoje sou educador e explorador digital, criando soluções que tocam, ensinam e transformam. 
          Cada projeto é um reflexo da minha jornada: funcional por fora, humano por dentro.
        </p>
      </div>
    </div>

    <NuxtLink to="/#inicio" class="back-button">Voltar ao Início</NuxtLink>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1000 })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.bio-section {
  position: relative;
  padding: 6rem 2rem;
  background: radial-gradient(ellipse at center, #0a0a0a, #000);
  font-family: 'Orbitron', sans-serif;
  color: #eafefb;
  z-index: 1;
  overflow: hidden;
}

.stars-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: url('/assets/images/stars.gif');
  background-size: cover;
  background-position: center;
  opacity: 0.06;
  animation: driftStars 160s linear infinite;
  z-index: 0;
}

@keyframes driftStars {
  0% { transform: scale(1) translateY(0); }
  100% { transform: scale(1.3) translateY(-15%); }
}

.bio-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.bio-photo-frame {
  flex: 1 1 400px;
  max-width: 420px;
  height: 280px;
  border-radius: 20px;
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-overlay {
  width: 95%;
  height: 90%;
  background: rgba(0,255,204,0.05);
  border: 1px solid rgba(0,255,204,0.2);
  border-radius: 16px;
  box-shadow: inset 0 0 40px rgba(0,255,204,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  color: #7fffd4;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 10px #00ffe1;
}

.bio-text {
  flex: 2;
  min-width: 320px;
  padding: 2rem;
  background: rgba(0, 255, 204, 0.015);
  border: 1px solid rgba(0, 255, 204, 0.07);
  border-radius: 20px;
  box-shadow: 0 0 24px rgba(0, 255, 204, 0.1), inset 0 0 60px rgba(0, 255, 204, 0.05);
  backdrop-filter: blur(7px);
}

h2 {
  font-size: 2.4rem;
  color: #7fffd4;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 12px rgba(0, 255, 204, 0.5);
}

p {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 1.4rem;
  animation: fadeLine 1s ease forwards;
}

@keyframes fadeLine {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.strong {
  font-weight: 700;
  color: #00ffe1;
}

.highlight {
  color: #7fff00;
  font-weight: 600;
  text-shadow: 0 0 6px #7fff00;
}

.code {
  font-family: monospace;
  background-color: rgba(255, 0, 255, 0.1);
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  color: #ff00ff;
  font-weight: 600;
}

.back-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #00ffe1, #7fff00);
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  box-shadow: 0 0 12px rgba(0, 255, 204, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 10;
}

.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(127, 255, 0, 1);
}

@media (max-width: 768px) {
  .bio-container {
    flex-direction: column;
    gap: 2rem;
  }

  .bio-photo-frame {
    width: 100%;
    height: 240px;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>