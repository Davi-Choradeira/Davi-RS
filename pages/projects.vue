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
    title: 'Pokédex Vue',
    description: 'Aplicação interativa que simula uma Pokédex, desenvolvida com Vue.js, Vite e a PokéAPI. Ideal para praticar requisições HTTP e componentes reativos.',
    link: 'https://github.com/Davi-Choradeira/Pokedex-Vue'
  },
  {
    title: 'Clock',
    description: 'Relógio digital responsivo feito em JavaScript puro, com foco em manipulação de datas e horas em tempo real.',
    link: 'https://github.com/Davi-Choradeira/Clock.git'
  },
  {
     title: 'Pequeno Universo',
    description: 'Experiência visual e interativa que explora conceitos espaciais com animações e design imersivo. Perfeito para mostrar criatividade e domínio de UI.',
    link: 'https://github.com/Davi-Choradeira/Pequeno-Universo.git'
  },
  {
    title: 'Masterchef',
    description: 'Aplicação inspirada no universo gastronômico para cadastro e visualização de receitas. Desenvolvida com foco em componentes reutilizáveis e interatividade.',
    link: 'https://github.com/Davi-Choradeira/Masterchef.git',
  },
  {
   title: 'Spotify',
    description: 'Um clone do Spotify com interface inspirada no visual marcante do aplicativo original.',

    link: 'https://github.com/Davi-Choradeira/S-p-o-t-i-f-y.git',
  },
  {
    title: 'Calculadora Espacial',
    description: 'Calculadora com estilo galáctico e efeitos de digitação neon.',
    link: '#'
  },
  {
    title: 'Epic-Forger',
  description: 'Crie heróis místicos, forje poderes épicos e embarque em missões .',
  link: 'https://github.com/Davi-Choradeira/-Epic-Forger.git',
  },
  {
    title: 'projeto',
    description: '0',
    link: '#'
  },
  {
    title: 'projeto',
    description: '0.',
    link: '#'
  },
  {
    title: 'proejto',
    description: '0',
    link: '#'
  },
  {
    title: 'proejto',
    description: '0',
    link: '#'
  },
  {
    title: 'proejto',
    description: '0',
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