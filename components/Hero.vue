<template>
  <section class="hero">
    <!-- Navbar -->
    <header class="navbar">
      <div class="logo">DAVI </div>
      <button class="hamburger" @click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav :class="{ open: isOpen }">
  <ul>
    <li><NuxtLink to="/">HOME</NuxtLink></li>
    <li><NuxtLink to="/projects">PORTFÓLIO</NuxtLink></li>
    <li><NuxtLink to="/formation">FORMAÇÃO</NuxtLink></li>
    <li><NuxtLink to="/about">SOBRE MIM</NuxtLink></li>
  </ul>
</nav>
    </header>

    <!-- Estrelas de fundo -->
    <div class="stars"></div>

    <!-- Conteúdo do Hero -->
    <div class="container">
      <h1>Olá, sou <span class="highlight">Davi Rocha</span></h1>
      <h2>Desenvolvedor Front-End com estilo alienígena futurista</h2>
      <p>Transformo ideias em experiências digitais intuitivas e impactantes. Meu trabalho é focado na criação de 
        interfaces modernas, acessíveis e alinhadas às necessidades dos usuários. Busco sempre a inovação e a eficiência, garantindo 
        que cada projeto seja visualmente atraente e de alto desempenho.
Explore meus projetos e descubra como posso agregar valor ao seu próximo desafio digital.
</p>
      <button @click="scrollToSection('projects')">Ver Projetos</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  color: #e0ffe6;
  font-family: 'Orbitron', sans-serif;
  padding: 2rem;
  text-align: center;
  
}

/* Navbar */
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 1rem 2rem;
  z-index: 10;
  position: relative;
}

.logo {
  font-size: 1.4rem;
  color: #00fff7;
  text-shadow: 0 0 10px #00ffae;
  font-weight: bold;
}

nav {
  transition: max-height 0.3s ease;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li a {
  color: #7fff00;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #00fff7;
}

/* Hambúrguer */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: #7fff00;
  cursor: pointer;
}

.icon {
  width: 2rem;
  height: 2rem;
}

/* Conteúdo */
.container {
  max-width: 700px;
  z-index: 1;
  margin-top: 3rem;
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

/* Responsivo */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 0;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    transition: max-height 0.4s ease;
  }

  nav.open {
    max-height: 300px;
    padding: 1rem 0;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  .navbar {
    flex-direction: row;
    align-items: center;
  }

  .container {
    margin-top: 4rem;
  }

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
