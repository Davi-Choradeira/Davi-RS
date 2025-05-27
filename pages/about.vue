<template>
  <div class="main-container">
    <!-- SEÇÃO SOBRE MIM -->
    <section class="about-me full-screen-section" id="about">
      <div class="card animated">
        <h2>Quem é Davi Rocha?</h2>
        <p>
          Me chamo <strong>Davi Rocha</strong>. Sou professor por formação e hoje estou em transição para o mundo do <strong>desenvolvimento web</strong>.
          Minha paixão por tecnologia me impulsiona a estudar com profundidade, buscando unir design, interatividade e propósito em cada linha de código.
        </p>
        <p>
          Com ferramentas como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Vue</strong> e <strong>Nuxt</strong>,
          transformo ideias em experiências digitais criativas e funcionais. Estou só começando minha jornada como <strong>frontend developer</strong>,
          e já sinto que estou no caminho certo rumo às estrelas.
        </p>
      </div>
    </section>

    <!-- SEÇÃO CONTATO -->
    <section class="contact full-screen-section">
      <div class="card animated">
        <h2>Fale Comigo</h2>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <input type="text" id="name" v-model="formData.name" placeholder="Nome completo" required />
          </div>

          <div class="input-group">
            <input type="email" id="email" v-model="formData.email" placeholder="Seu e-mail" required />
          </div>

          <div class="input-group">
            <textarea id="message" v-model="formData.message" rows="6" placeholder="Escreva sua mensagem aqui..." required></textarea>
          </div>

          <!-- Validador anti robô -->
          <div class="input-group">
            <input
              type="text"
              v-model="formData.humanCheck"
              placeholder="Quanto é 3 + 2?"
              required
            />
          </div>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>

    <button class="back-button" @click="goToHome">Voltar ao início</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
  router.push('/');
};

const formData = reactive({
  name: '',
  email: '',
  message: '',
  humanCheck: ''
});

const submitForm = () => {
  if (formData.humanCheck.trim() !== '5') {
    alert('Por favor, confirme que você não é um robô.');
    return;
  }

  console.log('Formulário enviado:', formData);
  alert('Mensagem enviada com sucesso!');

  // Limpar o formulário após envio
  formData.name = '';
  formData.email = '';
  formData.message = '';
  formData.humanCheck = '';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

body, html {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #0d0d0d, #1a1a1a);
  font-family: 'Orbitron', sans-serif;
  color: white;
  overflow-x: hidden;
}

.main-container {
  width: 100%;
  overflow-x: hidden;
}

.full-screen-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.about-me {
  background-image: radial-gradient(circle, rgba(0,255,204,0.05), transparent 70%);
}

.contact {
  background-image: radial-gradient(circle, rgba(127,255,0,0.05), transparent 70%);
}

.card {
  background: rgba(0, 255, 204, 0.1);
  padding: 2.5rem;
  border-radius: 18px;
  border: 2px solid #00fff7;
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.4);
  max-width: 800px;
  width: 100%;
  text-align: center;
  animation: fadeIn 1s ease forwards;
}

.card h2 {
  font-size: 2.4rem;
  color: #7fff00;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 12px #00ffae;
}

.card p {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  text-align: justify;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.input-group {
  text-align: left;
}

input, textarea {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 2px solid #00fff7;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.1rem;
}

input::placeholder, textarea::placeholder {
  color: #d2fff2cc;
  font-style: italic;
}

input:focus, textarea:focus {
  border-color: #7fff00;
  box-shadow: 0 0 15px rgba(127, 255, 0, 0.9);
  outline: none;
}

textarea {
  resize: none;
}

button {
  padding: 14px;
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 12px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.3s ease;
  color: black;
  font-weight: bold;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(127, 255, 0, 0.9);
}

.back-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
