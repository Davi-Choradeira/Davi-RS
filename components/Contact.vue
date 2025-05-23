<template>
  <section class="contact">
    <h2 data-aos="fade-up" data-aos-duration="1200">📡 Estação de Contato</h2>
    <ul class="contact-list">
      <li 
        v-for="(item, index) in contacts" 
        :key="item.label" 
        class="contact-item"
        data-aos="flip-up"
        :data-aos-delay="index * 250"
        data-aos-duration="1000"
      >
        <span class="icon" :aria-label="item.label" :title="item.label" />
        <div class="content">
          <span class="label">{{ item.label }}</span>
          <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
        </div>
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
  { label: 'Transmissão via Email', text: 'davi@email.com', url: 'mailto:davi@email.com' },
  { label: 'Conexão LinkedIn', text: 'linkedin.com/in/davi', url: 'https://linkedin.com/in/davi' },
  { label: 'Base GitHub', text: 'github.com/davi', url: 'https://github.com/davi' },
  { label: 'Sinal Instagram', text: 'instagram.com/davi', url: 'https://instagram.com/davi' }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.contact {
  margin: 5rem auto;
  max-width: 720px;
  padding: 0 1.5rem;
  color: #d1f0e6;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  z-index: 1;
}

.contact::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00ffe0, transparent);
  animation: pulse-line 3s infinite ease-in-out;
  border-radius: 10px;
  filter: drop-shadow(0 0 6px #00ffe0);
}

@keyframes pulse-line {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.contact h2 {
  font-size: 2.8rem;
  color: #7fff00;
  text-shadow: 0 0 18px #00ffae, 0 0 40px #00ffae;
  margin-bottom: 3rem;
  animation: flicker 2.5s infinite alternate;
  user-select: none;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: rgba(0, 255, 204, 0.07);
  border: 1px solid rgba(0, 255, 204, 0.3);
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.15);
  border-radius: 1.25rem;
  padding: 1.4rem 2rem;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.4s ease;
  user-select: none;
  position: relative;
}

.contact-item:hover {
  transform: scale(1.08);
  box-shadow: 0 0 45px rgba(0, 255, 204, 0.7), inset 0 0 15px #00ffd1;
  background: rgba(0, 255, 204, 0.14);
}

.contact-item:active {
  transform: scale(1.02);
}

.icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  position: relative;
  filter: drop-shadow(0 0 6px #00ffd1);
}

/* Ícones CSS puros, simples e futuristas */
.icon[aria-label="Transmissão via Email"] {
  background: none;
}
.icon[aria-label="Transmissão via Email"]::before {
  content: '';
  position: absolute;
  top: 12px;
  left: 8px;
  width: 32px;
  height: 24px;
  border: 2.5px solid #00ffd1;
  border-radius: 4px;
  box-shadow:
    inset 0 0 6px #00ffae;
}

.icon[aria-label="Transmissão via Email"]::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 8px;
  width: 32px;
  height: 2px;
  background: linear-gradient(90deg, #00ffd1, #00ffa3);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  transform: rotate(0deg);
  filter: drop-shadow(0 0 4px #00ffd1);
}

.icon[aria-label="Conexão LinkedIn"] {
  background: none;
}
.icon[aria-label="Conexão LinkedIn"]::before {
  content: 'in';
  position: absolute;
  top: 6px;
  left: 8px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #00ffd1;
  text-shadow: 0 0 6px #00ffe0;
  user-select: none;
}

.icon[aria-label="Base GitHub"] {
  background: none;
}
.icon[aria-label="Base GitHub"]::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  box-shadow:
    inset 0 0 12px #00ffe0,
    0 0 8px #00ffd1;
}
.icon[aria-label="Base GitHub"]::after {
  content: '';
  position: absolute;
  top: 14px;
  left: 17px;
  width: 10px;
  height: 2px;
  background: linear-gradient(90deg, #00ffd1, #00ffa3);
  box-shadow: 0 0 4px #00ffd1;
  border-radius: 2px;
  transform: rotate(45deg);
}

.icon[aria-label="Sinal Instagram"] {
  background: none;
  border-radius: 50%;
  box-shadow:
    0 0 12px #00ffa0,
    inset 0 0 18px #00ffb3;
  position: relative;
}
.icon[aria-label="Sinal Instagram"]::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 14px;
  width: 20px;
  height: 20px;
  border: 2.5px solid #00ffd1;
  border-radius: 6px;
  box-shadow:
    inset 0 0 6px #00ffd1;
}
.icon[aria-label="Sinal Instagram"]::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 28px;
  width: 6px;
  height: 6px;
  background: #00ffd1;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ffd1;
}

.content {
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 1;
}

.label {
  font-weight: 600;
  color: #00ffd9;
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  user-select: none;
  margin-bottom: 0.2rem;
}

.contact a {
  color: #7fffd4;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s ease;
  word-break: break-word;
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

@media (max-width: 650px) {
  .contact-list {
    grid-template-columns: 1fr;
  }

  .contact-item {
    padding: 1.2rem 1.5rem;
    font-size: 1rem;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  .label {
    font-size: 1rem;
  }

  .contact a {
    font-size: 0.95rem;
  }
}
</style>
