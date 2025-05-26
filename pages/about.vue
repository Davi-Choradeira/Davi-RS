<template>
  <section class="about-me">
    <div class="container">
      <div class="card">
        <h2>🛸 Quem é Davi Rocha?</h2>
        <p>
          Sou um desenvolvedor frontend apaixonado por criar **experiências digitais imersivas** e **interfaces interativas**.
          Minha jornada une **design**, **tecnologia** e **usabilidade**, transformando ideias em realidade digital. 🚀
        </p>
      </div>
    </div>
  </section>

  <section class="contact">
    <div class="container">
      <div class="card">
        <h2>📩 Fale Comigo</h2>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Seu nome" required />
          </div>

          <div class="input-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="formData.email" placeholder="Seu e-mail" required />
          </div>

          <div class="input-group">
            <label for="message">Mensagem:</label>
            <textarea id="message" v-model="formData.message" placeholder="Digite sua mensagem..." required></textarea>
          </div>

          <button type="submit">🚀 Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>

  <button class="back-button" @click="goToHome">🏠 Voltar ao início</button>
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
});

const submitForm = () => {
  console.log('Formulário enviado:', formData);
  alert('Mensagem enviada com sucesso! 🚀');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

body {
  background: linear-gradient(180deg, #0d0d0d, #1a1a1a);
  font-family: 'Orbitron', sans-serif;
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.card {
  background: rgba(0, 255, 204, 0.15);
  padding: 2rem;
  border-radius: 16px;
  border: 3px solid #00fff7;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.4);
  max-width: 600px;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.6);
}

h2 {
  font-size: 2.2rem;
  color: #7fff00;
  text-shadow: 0 0 15px #00ffae;
  margin-bottom: 1.5rem;
}

.contact form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 14px;
}

label {
  font-size: 1.3rem;
  color: #d2fff2;
  text-align: left;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #00fff7;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #7fff00;
  box-shadow: 0 0 15px rgba(127, 255, 0, 0.9);
}

button {
  padding: 14px;
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 12px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(127, 255, 0, 0.9);
}

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
  transition: 0.3s ease;
}

.back-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(127, 255, 0, 0.9);
}
</style>