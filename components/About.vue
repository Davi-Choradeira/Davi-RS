<template>
  <section class="about" id="about" data-aos="fade-left" data-aos-duration="1500">
    <h2 data-aos="fade-up" data-aos-delay="300">Davi Rocha</h2>

    <p data-aos="fade-up" data-aos-delay="600">
      Ao longo da minha trajetória, transitei entre dois mundos complementares: a educação e a tecnologia. Inicialmente, minha atuação esteve voltada para a docência,
      onde desenvolvi habilidades de comunicação, ensino e adaptação. Com o avanço das ferramentas digitais, percebi que o <strong>desenvolvimento web</strong>
      poderia potencializar o aprendizado e oferecer soluções inovadoras para o ensino e a comunicação digital.
    </p>

    <p class="highlight" data-aos="fade-up" data-aos-delay="900">
      Atualmente, minha expertise concentra-se na <strong>engenharia frontend</strong>, criando interfaces que unem acessibilidade, performance e inovação.
      Domínio tecnologias como <strong>HTML, CSS, JavaScript, Vue e Nuxt</strong>, sempre buscando entregar soluções que equilibram estética e funcionalidade.
      Meu objetivo é transformar conceitos abstratos em experiências digitais intuitivas e eficazes.
    </p>

    <p data-aos="fade-up" data-aos-delay="1200">
      Minha transição profissional não foi um mero ajuste de carreira, mas uma <strong>redefinição estratégica</strong>, onde aplico a lógica do ensino à engenharia digital.
      Carrego comigo a visão analítica de um educador e a mentalidade exploratória de um desenvolvedor, buscando sempre aprendizado contínuo e excelência técnica.
      Se você busca inovação digital, colaboração estratégica ou soluções altamente eficazes, estou pronto para novas conexões.
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit" data-aos="fade-up" data-aos-delay="1500">
      <h3>Envie sua mensagem</h3>
      <input type="text" placeholder="Nome" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Mensagem" rows="4" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})

const handleSubmit = () => {
  alert('🛰️ Sinal enviado com sucesso! A resposta será decodificada em breve.')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.about {
  max-width: 850px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: #d1fff4;
  background: linear-gradient(145deg, #001415, #020f12);
  border: 2px solid rgba(0, 255, 170, 0.2);
  border-radius: 20px;
  box-shadow: 0 0 60px rgba(0, 255, 200, 0.1);
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle at center, rgba(0, 255, 200, 0.08), transparent 70%);
  animation: pulseAmbient 10s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulseAmbient {
  0%, 100% {
    transform: scale(1);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.35;
  }
}

h2 {
  font-size: 2.7rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #7fffd4;
  text-shadow: 0 0 16px #00ffe1;
  position: relative;
  z-index: 1;
  animation: glowTitle 3s ease-in-out infinite;
}

@keyframes glowTitle {
  0%, 100% {
    text-shadow: 0 0 12px #00ffe1, 0 0 24px #00ffe1;
  }
  50% {
    text-shadow: 0 0 22px #00ffae, 0 0 32px #00ffae;
  }
}

h3 {
  font-size: 1.5rem;
  color: #00ffc8;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #00ffc8;
  z-index: 1;
  position: relative;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  padding: 0 1rem;
  color: #e2fcf6;
  background: rgba(0, 255, 200, 0.02);
  border: 1px solid rgba(0, 255, 200, 0.07);
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 255, 200, 0.05);
  position: relative;
  z-index: 1;
}

.highlight {
  background: rgba(0, 255, 200, 0.1);
  border: 1px dashed rgba(0, 255, 200, 0.3);
  border-radius: 12px;
  padding: 1.2rem;
  margin: 2rem 0;
  font-weight: 600;
  color: #00ffcc;
  box-shadow: 0 0 16px rgba(0, 255, 200, 0.15);
}

.contact-form {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
}

.contact-form input,
.contact-form textarea {
  background: rgba(0, 10, 20, 0.6);
  border: 1px solid #00ffe1;
  color: #c0ffef;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  padding: 0.9rem 1.3rem;
  border-radius: 14px;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 6px rgba(0, 255, 200, 0.2);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #00ffae;
  box-shadow: 0 0 12px rgba(0, 255, 170, 0.6);
}

.contact-form button {
  background: linear-gradient(135deg, #00ffcc, #7fff00);
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 170, 0.4);
}

.contact-form button:hover {
  background: linear-gradient(135deg, #00ffaa, #afff00);
  transform: scale(1.03);
  box-shadow: 0 0 25px rgba(127, 255, 0, 0.7);
}

@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>