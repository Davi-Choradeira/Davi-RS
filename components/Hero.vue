<template>
  <section class="hero">
    <div class="stars"></div>
    <div class="container">
      <h1>
        Saudações, terráqueos.<br />
        Eu sou <span class="highlight">Davi Rocha</span>
      </h1>
      <h2>Desbravador de Interfaces | Front-end Developer</h2>
      <p>
        Nascido sob constelações criativas, transformo ideias em experiências intergalácticas. 
        Se você precisa de um site fora deste mundo, acabou de encontrar seu desenvolvedor.
      </p>
      <button @click="verProjetos" aria-label="Ver meus projetos">Explorar Galáxia</button>
    </div>
  </section>
</template>

<script setup>
const verProjetos = () => {
  window.location.href = "#projects";
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at center, #0d0d0d 0%, #000 100%);
  overflow: hidden;
  color: #e0ffe6;
  font-family: 'Orbitron', sans-serif;
  padding: 2rem;
  text-align: center;
}

.stars {
  position: absolute;
  width: 200%;
  height: 200%;
  background: transparent url('https://www.transparenttextures.com/patterns/stardust.png') repeat;
  animation: moveStars 120s linear infinite;
  opacity: 0.2;
  z-index: 0;
}

@keyframes moveStars {
  from { transform: translate(0, 0); }
  to { transform: translate(-50%, -50%); }
}

.container {
  max-width: 700px;
  z-index: 1;
}

h1 {
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #00fff7;
}

.highlight {
  color: #7fff00;
  text-shadow: 0 0 8px #7fff00;
}

h2 {
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: #9efff3;
}

p {
  font-weight: 300;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #d8ffe8;
}

button {
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 50px;
  padding: 0.9rem 2.8rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #000;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 255, 200, 0.7);
  transition: all 0.3s ease;
}

button:hover {
  box-shadow: 0 0 25px rgba(127, 255, 0, 0.9);
  transform: scale(1.05);
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
