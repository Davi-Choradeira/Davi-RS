<template>
  <section class="hero">
    <!-- Navbar -->
    <header class="navbar" :class="{ 'hidden-navbar': isNavbarHidden }">
      <div class="logo" @click="toggleGelo">DAVI</div>
      <button class="hamburger" @click="isOpen = !isOpen" aria-label="Menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav :class="{ open: isOpen }">
        <ul>
          <li><NuxtLink to="/projects">PORTFÓLIO</NuxtLink></li>
          <li><NuxtLink to="/formation">FORMAÇÃO</NuxtLink></li>
          <li><NuxtLink to="/about">SOBRE MIM</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- Fundo com estrelas/neve -->
    <div class="background-layer" :class="{ invertido: isGelo }">
      <div class="stars"></div>
    </div>

    <!-- Conteúdo principal -->
    <div class="container animate-hero">
      <h1>Olá, sou <span class="highlight">Davi Rocha</span></h1>

      <div class="photo-glow">
        <div class="glow-circle">
          <img src="/assets/images/pixel-davi.png" alt="Foto em pixel do Davi" class="pixel-photo" />
        </div>
      </div>

      <h3>Desenvolvedor Web</h3>
      <h2>JavaScript / React / Vue</h2>
      <button @click="scrollToSection('projects')">Projetos</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isOpen = ref(false)
const isNavbarHidden = ref(false)
let lastScroll = 0

const isGelo = inject('isGelo')
const toggleGelo = inject('toggleGelo')

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => {
  const current = window.scrollY
  isNavbarHidden.value = current > lastScroll && current > 80
  lastScroll = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background: transparent;
  overflow: hidden;
  font-family: 'Orbitron', sans-serif;
  color: #e0ffe6;
  padding: 2rem 1.5rem;
  text-align: center;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  z-index: 200;
  transition: transform 0.3s ease-in-out;
}

.hidden-navbar {
  transform: translateY(-100%);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #00fff7;
  text-shadow: 0 0 10px #00ffae;
  cursor: pointer;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

nav ul li a {
  color: #7fff00;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #00fff7;
}

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

.container {
  max-width: 800px;
  z-index: 1;
  margin-top: 6rem;
}

.animate-hero {
  animation: fadeInUp 1.2s ease-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.photo-glow {
  margin: 1rem auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glow-circle {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  padding: 5px;
  background: radial-gradient(circle, #00fff799, #00000000);
  box-shadow:
    0 0 25px #00fff7,
    0 0 45px #00fff799,
    0 0 65px #00fff733;
  animation: pulse-glow 2s infinite ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 25px #00fff7, 0 0 45px #00fff799, 0 0 65px #00fff733;
  }
  50% {
    box-shadow: 0 0 35px #00fff7, 0 0 55px #00fff7aa, 0 0 75px #00fff744;
  }
  100% {
    box-shadow: 0 0 25px #00fff7, 0 0 45px #00fff799, 0 0 65px #00fff733;
  }
}

.pixel-photo {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00fff7;
}

h1 {
  font-size: 3rem;
  color: #00fff7;
  margin-bottom: 1rem;
}

h3 {
  font-size: 2.4rem;
  color: #fbfbfb;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  color: #9efff3;
  margin-bottom: 2rem;
}

.highlight {
  color: #7fff00;
  text-shadow: 0 0 8px #7fff00;
}

button {
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 50px;
  padding: 1rem 3rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #000;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 255, 200, 0.7);
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(127, 255, 0, 0.9);
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 0;
  transition: all 0.5s ease-in-out;
}

.stars {
  background: url('/stars.png') repeat;
  opacity: 0.1;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.background-layer.invertido .stars {
  filter: invert(1) brightness(0.9);
  opacity: 0.2;
}

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
    background: rgb(0, 0, 0);
    border-radius: 10px;
    transition: max-height 0.4s ease;
  }

  nav.open {
    max-height: 400px;
    padding: 1rem 0;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  .container {
    margin-top: 7rem;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.3rem;
  }
}
</style>
