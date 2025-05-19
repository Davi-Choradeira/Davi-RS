<template>
  <section class="skills">
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.name" :title="skill.name">
        <span class="icon">{{ skill.icon }}</span>
        {{ skill.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Vue.js', icon: '' },
  { name: 'Nuxt.js', icon: '' },
  { name: 'JavaScript', icon: '' },
  { name: 'CSS3', icon: '' },
  { name: 'Tailwind CSS', icon: '' }
];
</script>

<style scoped>
.skills {
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 1rem;
  text-align: center;
}

.skills h2 {
  font-size: 2rem;
  color: #00bfa6;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.skills ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  list-style: none;
}

.skills li {
  background-color: #16213e;
  color: #d1f0e6;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: default;
  transition: background-color 0.3s ease;
  user-select: none;
}

.skills li:hover {
  background-color: #00bfa6;
  color: #16213e;
}

.icon {
  font-size: 1.3rem;
}
</style>
