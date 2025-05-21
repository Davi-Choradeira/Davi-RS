<template>
  <section class="contact">
    <h2 data-aos="fade-up" data-aos-duration="1200">📡 Estação de Contato</h2>
    <ul>
      <li 
        v-for="(item, index) in contacts" 
        :key="item.label" 
        class="contact-item"
        data-aos="flip-up"
        :data-aos-delay="index * 250"
        data-aos-duration="1000"
      >
        <span class="label">{{ item.label }}</span>
        <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
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

const contacts = [
  { label: 'Transmissão via Email:', text: 'davi@email.com', url: 'mailto:davi@email.com' },
  { label: 'Conexão LinkedIn:', text: 'linkedin.com/in/davi', url: 'https://linkedin.com/in/davi' },
  { label: 'Base GitHub:', text: 'github.com/davi', url: 'https://github.com/davi' },
  { label: 'Sinal Instagram:', text: 'instagram.com/davi', url: 'https://instagram.com/davi' }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.contact {
  margin: 5rem auto;
  max-width: 700px;
  padding: 0 1.5rem;
  color: #d1f0e6;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 2px;
  background: linear-gradient(to right, transparent, #00ffe0, transparent);
  animation: pulse-line 3s infinite;
}

@keyframes pulse-line {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.contact h2 {
  font-size: 2.2rem;
  color: #7fff00;
  text-shadow: 0 0 12px #00ffae;
  margin-bottom: 2rem;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact-item {
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #ccffee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(0, 255, 204, 0.08);
  border: 1px solid rgba(0, 255, 204, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: scale(1.08);
  box-shadow: 0 0 30px rgba(0, 255, 204, 0.5);
}

.contact .label {
  font-weight: 600;
  color: #00ffd9;
  font-size: 1.05rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.contact a {
  color: #7fffd4;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.contact a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #00bfa6, #00ffe0);
  bottom: -4px;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.contact a:hover {
  color: #00ffae;
}

.contact a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 600px) {
  .contact h2 {
    font-size: 1.6rem;
  }

  .contact-item {
    font-size: 1rem;
    padding: 0.8rem;
  }

  .contact .label {
    font-size: 0.95rem;
  }
}
</style>