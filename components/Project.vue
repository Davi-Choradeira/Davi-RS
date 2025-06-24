<template>
  <section class="projects" id="projects">
    <h2 data-aos="flip-up" data-aos-duration="1500"> Projetos </h2>
    <div class="project-grid">
      <a 
        class="project-holo" 
        v-for="(project, index) in projects" 
        :key="index"
        :href="project.link" 
        target="_blank" 
        rel="noopener noreferrer"
        data-aos="fade-right" 
        :data-aos-delay="(index + 1) * 200"
        data-aos-duration="1200"
        style="text-decoration: none;"
      >
        <div class="holo-glow">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});

const projects = ref([
  {
    title: 'Pokédex Vue',
    description: 'Aplicação interativa que simula uma Pokédex, desenvolvida com Vue.js, Vite e a PokéAPI. Ideal para praticar requisições HTTP e componentes reativos.',
    link: 'https://github.com/Davi-Choradeira/Pokedex-Vue',
  },
  {
    title: 'Clock',
    description: 'Relógio digital responsivo feito em JavaScript puro, com foco em manipulação de datas e horas em tempo real.',
    link: 'https://github.com/Davi-Choradeira/Clock.git',
  },
  {
    title: 'Pequeno Universo',
    description: 'Experiência visual e interativa que explora conceitos espaciais com animações e design imersivo. Perfeito para mostrar criatividade e domínio de UI.',
    link: 'https://github.com/Davi-Choradeira/Pequeno-Universo.git',
  },
  {
    title: 'Masterchef',
    description: 'Aplicação inspirada no universo gastronômico para cadastro e visualização de receitas. Desenvolvida com foco em componentes reutilizáveis e interatividade.',
    link: 'https://github.com/Davi-Choradeira/Masterchef.git',
  },

    {
    title: 'Projeto 5',
    description: 'falar do projeto ',
    link: 'link ',
  },
    {
    title: 'Projeto 6',
    description: 'falar do projeto ',
    link: 'link ',
  },

  // Adicione mais projetos aqui, se quiser
]);

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
