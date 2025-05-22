<template>
  <section class="about" id="about">
    <div class="container">
      <div class="profile-holo">
        <div class="photo-placeholder"></div>
      </div>
      <div class="content">
        <h2>🛸 Quem é Davi Rocha?</h2>
        <p>
          Sou um explorador digital em busca de transformar ideias em experiências inovadoras.  
          Minha missão é codificar **universos visuais** acessíveis, responsivos e com performance de outro planeta. 🚀  
          Com habilidades forjadas entre nebulosas de criatividade e sistemas solares de lógica, estou sempre pronto para o próximo salto hiperespacial.
        </p>
        <div class="timeline">
          <div class="timeline-item" data-aos="fade-right">
            <h3>🚀 Primeiros Códigos</h3>
            <p>Minha jornada começou desvendando os mistérios do HTML e CSS.</p>
          </div>
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="200">
            <h3>🌌 Conhecendo o JavaScript</h3>
            <p>Aprendi a dar vida às interfaces e criar interatividade real.</p>
          </div>
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="400">
            <h3>💡 Vue & Nuxt</h3>
            <p>Construindo aplicações poderosas e escaláveis com frameworks modernos.</p>
          </div>
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="600">
            <h3>✨ Próximo desafio?</h3>
            <p>Sempre explorando novas tecnologias e buscando inovação!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão flutuante -->
    <button class="back-button" @click="goToHome">🏠 Voltar ao início</button>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

onMounted(() => {
  AOS.init({ duration: 800, easing: 'ease-in-out' })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 3rem;
  font-family: 'Orbitron', sans-serif;
  color: #caffee;
  text-align: center;
  background: transparent;
}

.container {
  display: flex;
  gap: 3rem;
  max-width: 1000px;
  align-items: center;
}

.profile-holo {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #00fff7;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

h2 {
  font-size: 2.4rem;
  color: #7fff00;
  text-shadow: 0 0 15px #00ffae;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #d2fff2;
  margin-bottom: 1.5rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.timeline-item {
  background: rgba(0, 255, 204, 0.08);
  border: 1px solid #00fff7;
  padding: 1rem;
  border-radius: 10px;
}

/* Botão flutuante no canto superior direito */
.back-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(127, 255, 0, 0.7);
  transition: transform 0.3s ease;
}

.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(127, 255, 0, 0.9);
}
</style>