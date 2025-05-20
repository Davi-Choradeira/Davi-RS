<template>
  <section class="skills">
    <h2> Núcleo de Habilidades</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.name" :title="skill.name">
        <span class="icon">{{ skill.icon }}</span>
        <span class="text">{{ skill.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Vue.js', icon: '' },
  { name: 'Nuxt.js', icon: '' },
  { name: 'JavaScript', icon: '' },
  { name: 'React', icon: '' }
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

.skills li {
  background: rgba(0, 255, 204, 0.08);
  border: 1px solid rgba(0, 255, 204, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.15), inset 0 0 10px rgba(0, 255, 204, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #aaffee;
  font-size: 1.05rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(6px);
  cursor: default;
  animation: pulse 3s infinite ease-in-out;
}

.skills li:hover {
  transform: scale(1.08);
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.5), inset 0 0 15px rgba(127, 255, 212, 0.3);
}

@keyframes pulse {
  0% { box-shadow: 0 0 10px rgba(0,255,204,0.1); }
  50% { box-shadow: 0 0 20px rgba(0,255,204,0.3); }
  100% { box-shadow: 0 0 10px rgba(0,255,204,0.1); }
}

.icon {
  font-size: 1.3rem;
}

.text {
  font-weight: 600;
}

@media (max-width: 600px) {
  .skills h2 {
    font-size: 1.6rem;
  }

  .skills li {
    font-size: 0.95rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
