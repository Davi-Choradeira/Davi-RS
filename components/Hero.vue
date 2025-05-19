<template>
  <section class="hero">
    <div class="container">
      <h1>Olá, eu sou <span class="highlight">Davi</span></h1>
      <h2>Desenvolvedor Front-end</h2>
      <p>Transformo ideias em interfaces modernas e funcionais.</p>
      <button @click="verProjetos" aria-label="Ver meus projetos">Ver Projetos</button>
    </div>
  </section>
</template>

<script setup>
const verProjetos = () => {
  window.location.href = "#projects";
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  padding: 2rem 1rem;
  text-align: center;
}

.container {
  max-width: 600px;
}

h1 {
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.highlight {
  color: #00bfa6;
}

h2 {
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #a0e9d3;
}

p {
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: #d1f0e6;
}

button {
  background-color: #00bfa6;
  border: none;
  border-radius: 30px;
  padding: 0.85rem 2.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  color: #0f2027;
  box-shadow: 0 6px 10px rgba(0, 191, 166, 0.6);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #019374;
  box-shadow: 0 8px 15px rgba(1, 147, 116, 0.8);
}

@media (max-width: 600px) {
  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
