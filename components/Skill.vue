<template>
  <section class="skills">
    <h2 data-aos="fade-up" data-aos-duration="1200">Núcleo de Habilidades</h2>
    <ul>
      <li 
        v-for="(skill, index) in skills" 
        :key="skill.name" 
        :title="skill.name" 
        class="skill-item"
        data-aos="zoom-in"
        :data-aos-delay="index * 250"
        data-aos-duration="800"
        :style="{
          boxShadow: `0 0 15px ${skill.color}, inset 0 0 10px ${skill.color}`
        }"
      >
        <span class="text">{{ skill.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});

const skills = [
  { name: 'Vue.js', color: '#42b883' },    // Verde
  { name: 'Nuxt.js', color: '#0f766e' },   // Verde escuro
  { name: 'JavaScript', color: '#f7df1e' },// Amarelo
  { name: 'React', color: '#61dafb' }      // Azul
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.skills {
  max-width: 900px;
  margin: 5rem auto;
  padding: 0 2rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: #ccffee;
  position: relative;
  z-index: 1;
}

.skills h2 {
  font-size: 2.2rem;
  color: #7fff00;
  margin-bottom: 2rem;
  text-shadow: 0 0 12px #00ffae;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}

.skills ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  padding: 0;
  list-style: none;
}

.skill-item {
  border: 1px solid rgba(0, 255, 204, 0.3);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: #aaffee;
  font-size: 1.05rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(6px);
  cursor: default;
}

.skill-item:hover {
  transform: scale(1.15);
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.5), inset 0 0 15px rgba(127, 255, 212, 0.3);
}

@media (max-width: 600px) {
  .skills h2 {
    font-size: 1.6rem;
  }

  .skill-item {
    font-size: 0.95rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>