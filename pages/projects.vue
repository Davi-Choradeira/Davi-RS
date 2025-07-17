<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2>Meus Projetos</h2>

      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">Ver Projeto</a>
        </div>
      </div>
    </div>

    <!-- Botão fixo para voltar à seção .hero na página principal -->
    <NuxtLink to="/#inicio" class="back-button">Voltar ao Início</NuxtLink>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Galáxia Interativa',
    description: 'Mapa interativo com estrelas, planetas e animações usando Vue e Canvas.',
    link: '#'
  },
  {
    title: 'Portfólio Alienígena',
    description: 'Site pessoal com estética futurista e design animado.',
    link: '#'
  },
  {
    title: 'Buscador Espacial',
    description: 'App com Leaflet que localiza lugares com marcadores neon e guia virtual.',
    link: '#'
  },
  {
    title: 'Formulário Antibot',
    description: 'Formulário futurista com validação visual, icons e checagem de humano.',
    link: '#'
  },
  {
    title: 'Jogo da Nave',
    description: 'Mini jogo interativo com HTML5 canvas e colisões animadas.',
    link: '#'
  },
  {
    title: 'Calculadora Espacial',
    description: 'Calculadora com estilo galáctico e efeitos de digitação neon.',
    link: '#'
  },
  {
    title: 'Clima Cósmico',
    description: 'App de clima com integração de API e visuais estelares.',
    link: '#'
  },
  {
    title: 'To-Do Planetário',
    description: 'Lista de tarefas com design orbital e organização em planetas.',
    link: '#'
  },
  {
    title: 'NFT Viewer',
    description: 'Visualizador de NFTs com galeria animada futurista.',
    link: '#'
  },
  {
    title: 'Explorador de APIs',
    description: 'Projeto de estudo com múltiplas integrações de APIs públicas.',
    link: '#'
  },
  {
    title: 'Blog Estelar',
    description: 'Blog com layout futurista, animações e markdown.',
    link: '#'
  },
  {
    title: 'Landing Page Quantum',
    description: 'Página de marketing com UI alienígena e tipografia orbitron.',
    link: '#'
  },


]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, #000000, #020d0f);
  padding: 4rem 2rem;
  color: #00fff7;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  text-align: center;
  z-index: 2;
  position: relative;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #7fff00;
  text-shadow: 0 0 10px #00fff7;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: rgba(0, 255, 204, 0.07);
  border: 2px solid #00fff7;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  color: #ebeeed;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px #00fff7;
}

.project-card h3 {
  font-size: 1.3rem;
  color: #7fff00;
  margin-bottom: 0.5rem;
}

.project-card p {
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.project-card a {
  color: #00fff7;
  font-weight: bold;
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}

/* Botão fixo para voltar à seção .hero */
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
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
  transition: transform 0.3s ease;
  z-index: 999;
  text-decoration: none;
  display: inline-block;
}

.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.9);
}
</style>