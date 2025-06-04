<template>
  <section class="contact" id="contato">
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
import smoothscroll from 'smoothscroll-polyfill'

onMounted(() => {
  smoothscroll.polyfill()

  AOS.init({
    once: true,
    offset: 80,
    duration: 800,
    easing: 'ease-in-out',
    mirror: true // anima ao subir também
  })

  // Smooth scroll para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})

const contacts = [
  { label: 'Email', text: 'Davi@gmail.com', url: 'mailto:davirocha.dev@gmail.com' },
  { label: 'LinkedIn', text: 'Davi RS', url: 'https://www.linkedin.com/in/davirs-developer' },
  { label: 'GitHub', text: 'Developer', url: 'https://github.com/Davi-Choradeira' },
  { label: 'Instagram', text: 'Choradeira', url: 'https://instagram.com/davi.choradeira' }
]
</script>

<style scoped>
.contact {
  margin: 4rem auto;
  max-width: 900px;
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
  transition: background 0.3s ease, transform 0.3s ease;
  font-size: 1.1rem;
}

.contact-item:hover {
  background: rgba(0, 255, 204, 0.1);
  transform: translateY(-4px);
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

@media (max-width: 700px) {
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
