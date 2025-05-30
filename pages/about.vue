<template>
  <div class="main-container">
    <section class="about-me full-screen-section" id="about">
      <div class="content-container">
        <div class="photo-frame photo-large">
          <div class="photo-placeholder">Sua Foto</div>
        </div>

        <p class="fade-in highlight-text">
    Sou <span class="keyword">Davi Rocha Santos</span>, nascido em <span class="keyword">1993</span> na cidade de <span class="keyword">Campinas-SP</span>.  
    Iniciei minha jornada profissional como <span class="keyword">professor</span>, e foram anos dedicados a ensinar, aprender e evoluir com meus alunos.  
    Mas em algum momento, uma <span class="highlight">nova paixão</span> começou a brilhar: <span class="highlight">a tecnologia</span>.  
    A possibilidade de transformar a educação por meio do <span class="keyword">desenvolvimento web</span> despertou em mim o desejo de ir além.  
    Com coragem, mergulhei em linguagens como <span class="code">JavaScript</span>, e frameworks como <span class="code">Vue</span>, <span class="code">Nuxt</span> e <span class="code">React</span>.  
    Hoje, trago a paciência do educador e a curiosidade de um <span class="keyword">explorador digital</span>, buscando criar experiências que conectem <span class="keyword">tecnologia</span>, <span class="keyword">educação</span> e <span class="highlight">inspiração</span>.  
    Em minha trajetória acadêmica e profissional, busco aliar <span class="highlight">código</span> e inovação para desenvolver soluções tecnológicas. A programação se tornou uma ferramenta essencial para promover aprendizado acessível e eficiente, ampliando horizontes e transformando realidades.  
</p>
      </div>
    </section>

    <button class="back-button" @click="goToHome">Voltar ao início</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  router.push('/');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');

body, html {
  margin: 100;
  padding: 100;
  font-family: 'Orbitron', sans-serif;
  color: white;
  background: linear-gradient(180deg, #0d0d0d, #1a1a1a);
  overflow-x: hidden;
}

.main-container {
  width: 100%;
  overflow-x: hidden;
}

.full-screen-section {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background-image: radial-gradient(circle, rgba(0,255,204,0.05), transparent 70%);
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  gap: 2.5rem;
  text-align: justify;
  position: relative;
  background: rgba(0, 255, 204, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  border: 2px solid #00fff7;
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.3);
}

.photo-frame {
  border: 4px solid #00fff7;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 25px #00fff7;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-large {
  width: 300px;
  height: 300px;
}

.photo-placeholder {
  color: #7fff00;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
}

.highlight-text {
  font-size: 1.4rem;
  line-height: 2.4rem;
  animation: fadeUp 1.2s ease forwards;
  opacity: 0;
  transform: translateY(40px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Destaques */
.keyword {
  color: #00fff7;
  font-weight: 600;
}

.highlight {
  color: #7fff00;
  font-weight: 700;
  text-shadow: 0 0 6px #7fff00;
}

.code {
  color: #ff00ff;
  font-weight: 600;
  background-color: rgba(255, 0, 255, 0.1);
  padding: 0.1rem 0.3rem;
  border-radius: 6px;
  font-family: monospace;
}

/* Botão */
.back-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(127, 255, 0, 0.7);
  transition: transform 0.3s ease;
}


.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(127, 255, 0, 0.9);
}
</style>
