<template>
  <section class="skills">
    <h2 data-aos="fade-up" data-aos-duration="1200">Núcleo de Habilidades</h2>
    <ul>
      <li
        v-for="(skill, index) in sortedSkills"
        :key="skill.name"
        class="skill-item"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <div
          class="progress-bar"
          :style="{
            width: hoveredIndex === index ? skill.progress + '%' : '0%',
            transition: 'width 0.7s ease'
          }"
        ></div>
        <span class="text">
          <!-- Só JavaScript troca o nome para JS no hover -->
          <template v-if="skill.name === 'JavaScript'">
            {{ hoveredIndex === index ? 'JS' : 'JavaScript' }}
          </template>
          <template v-else>
            {{ skill.name }}
          </template>
        </span>
        <transition name="fade">
          <span v-if="hoveredIndex === index" class="progress-text">
            {{ skill.progress }}%
          </span>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})

const skills = [
  { name: 'JavaScript', progress: 80 },
  { name: 'Vue.js', progress: 50 },
  { name: 'Nuxt.js', progress: 20 },
  { name: 'React', progress: 30 },
]

const hoveredIndex = ref(null)

const sortedSkills = computed(() => {
  return skills.slice().sort((a, b) => {
    if (a.name === 'JavaScript') return -1
    if (b.name === 'JavaScript') return 1
    return 0
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.skills {
  max-width: 2000px;
  margin: 5rem auto;
  padding: 0 2rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: #ccffee;
  position: relative;
  z-index: 1;
}

.skills h2 {
  font-size: 2.8rem;
  color: #7fff00;
  margin-bottom: 2rem;
  text-shadow: 0 0 12px #00ffae;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

.skills ul {
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
}

.skill-item {
  position: relative;
  background: rgba(0, 255, 170, 0.1);
  border-radius: 1.5rem;
  padding: 1rem 3rem 1rem 2rem;
  color: #aaffee;
  font-size: 1.6rem;
  box-shadow: 0 0 10px #00ffae, inset 0 0 12px #00ffae;
  backdrop-filter: blur(8px);
  cursor: default;
  user-select: none;
  width: 200px;
  height: 90px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: scale(1.1);
  box-shadow:
    0 0 30px #00ffae,
    inset 0 0 25px #00ffae;
}

.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #00ffa8, #00bfa6, #007f89);
  border-radius: 1.5rem;
  z-index: 0;
  width: 0;
  transition: width 0.7s ease;
}

.text {
  position: relative;
  z-index: 1;
  font-weight: 600;
  user-select: none;
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 0.5rem;
}

.progress-text {
  position: relative;
  z-index: 1;
  font-weight: 700;
  color: #7fff00;
  text-shadow: 0 0 6px #00ffae;
  font-size: 1.6rem;
  user-select: none;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.skill-item:hover .progress-text {
  opacity: 1;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 800px) {
  .skills {
    max-width: 90vw;
  }

  .skills h2 {
    font-size: 2.2rem;
  }

  .skill-item {
    font-size: 1.3rem;
    width: 180px;
    height: 80px;
    padding: 0.8rem 2.5rem 0.8rem 1.5rem;
  }

  .progress-text {
    font-size: 1.3rem;
  }
}
</style>
