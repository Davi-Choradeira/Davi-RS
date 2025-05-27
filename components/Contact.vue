<template>
  <section class="contact">
    <h2 data-aos="fade-up" data-aos-duration="1000">Contato</h2>
    <ul class="contact-list">
      <li 
        v-for="(item, index) in contacts" 
        :key="item.label" 
        class="contact-item"
        data-aos="fade-up"
        :data-aos-delay="index * 200"
        data-aos-duration="1000"
      >
        <span class="label">{{ item.label }}</span>
        <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    once: true, // anima apenas uma vez ao entrar na tela
    offset: 80  // espaço antes da animação iniciar
  })
})

const contacts = [
  { label: 'Email', text: 'davi@email.com', url: 'mailto:davi@email.com' },
  { label: 'LinkedIn', text: 'linkedin.com/in/davi', url: 'https://linkedin.com/in/davi' },
  { label: 'GitHub', text: 'github.com/davi', url: 'https://github.com/davi' },
  { label: 'Instagram', text: 'instagram.com/davi', url: 'https://instagram.com/davi' }
]
</script>


<style scoped>
.contact {
  margin: 4rem auto;
  max-width: 800px; /* aumentamos a largura geral */
  padding: 0 1rem;
  color: #d1f0e6;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
}

.contact h2 {
  font-size: 2.5rem;
  color: #00ffd1;
  margin-bottom: 2.5rem;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 255, 204, 0.05);
  border: 1px solid rgba(0, 255, 204, 0.3);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  transition: background 0.3s ease;
  font-size: 1.1rem;
}

.contact-item:hover {
  background: rgba(0, 255, 204, 0.1);
}

.label {
  font-weight: bold;
  color: #00ffd1;
  text-transform: uppercase;
  font-size: 1.1rem;
}

a {
  color: #7fffd4;
  text-decoration: none;
  font-size: 1.1rem;
  word-break: break-word;
  transition: color 0.3s ease;
}

a:hover {
  color: #00ffae;
}

@media (max-width: 600px) {
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
