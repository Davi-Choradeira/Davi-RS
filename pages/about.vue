<template>
  <section class="bio-section" id="sobre">
    <div class="stars-bg"></div>

    <div class="bio-container">
      <!-- FOTO COM EFEITO -->
      <div class="bio-photo-wrapper" data-aos="fade-right">
        <div class="bio-photo-frame">
          <img
            src="/assets/images/DRS.jpg"
            alt="Foto de Davi Rocha Santos"
            class="bio-image"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>
      </div>

      <div class="bio-text" data-aos="fade-left" data-aos-delay="400">
        <h2 data-aos="fade-up">Diário de bordo: quem sou eu</h2>

        <p data-aos="fade-up" data-aos-delay="200">
          Meu nome é <span class="strong">Davi Rocha Santos</span>, nascido em <span class="strong">1993</span> na cidade de <span class="strong">Campinas-SP</span>.
          Iniciei minha trajetória profissional na área da educação, onde desenvolvi habilidades essenciais como escuta ativa, paciência e propósito.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          Com o tempo, a curiosidade se transformou em vocação: encontrei na <span class="highlight">tecnologia</span> um universo de possibilidades para inovar, construir e conectar.
        </p>

        <p data-aos="fade-up" data-aos-delay="600">
          No <span class="highlight">desenvolvimento web</span>, descobri um novo caminho. Dominei ferramentas como <span class="code">JavaScript</span>, <span class="code">Vue</span>, <span class="code">Nuxt</span> e <span class="code">React</span>,
          sempre com o objetivo de transformar ideias em experiências digitais impactantes.
        </p>

        <p data-aos="fade-up" data-aos-delay="800">
          Hoje, atuo como educador e desenvolvedor frontend em constante evolução, buscando criar soluções funcionais, intuitivas e com significado humano. Cada projeto reflete minha jornada de transformação, aprendizado e propósito.
        </p>
      </div>
    </div>

    <NuxtLink
      to="/#inicio"
      class="back-button"
      data-aos="fade-in"
      data-aos-delay="1000"
    >
      Voltar ao Início
    </NuxtLink>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

if (process.client) {
  onMounted(() => {
    AOS.init({ duration: 1000, once: true })
  })

  onUpdated(() => {
    AOS.refresh()
  })
}
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

.bio-photo-wrapper {
  flex: 1 1 400px;
  max-width: 420px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bio-photo-frame {
  width: 110%;
  height: 320px;
  border-radius: 24px;
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
  box-shadow: 0 0 40px rgba(0, 255, 204, 0.35);
  overflow: hidden;
  transform: translateY(-20px);
  z-index: 5;
}

.bio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 204, 0.3);
  box-shadow: 0 0 60px rgba(0, 255, 204, 0.15);
  background: #0f0f0f;
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
    transform: translateY(0);
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
