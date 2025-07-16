<template>
  <section class="about" id="about" data-aos="fade-left" data-aos-duration="1500">
    <h2 data-aos="fade-up" data-aos-delay="300">Davi Rocha</h2>

    <p data-aos="fade-up" data-aos-delay="600">
      Ao longo da minha trajetória, transitei entre dois mundos complementares: a educação e a tecnologia...
    </p>

    <p class="highlight" data-aos="fade-up" data-aos-delay="900">
      Atualmente, minha expertise concentra-se na <strong>engenharia frontend</strong>...
    </p>

    <p data-aos="fade-up" data-aos-delay="1200">
      Minha transição profissional não foi um mero ajuste de carreira, mas uma <strong>redefinição estratégica</strong>...
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit" data-aos="fade-up" data-aos-delay="1500">
      <h3>Envie sua mensagem</h3>
      <input type="text" placeholder="Nome" v-model="name" />
      <input type="email" placeholder="Email" v-model="email" />
      <textarea placeholder="Mensagem" rows="4" v-model="message" />
      <button type="submit">Enviar</button>

      <div v-if="feedback" :class="['form-feedback', feedbackType]">
        {{ feedback }}
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})

const name = ref('')
const email = ref('')
const message = ref('')
const feedback = ref('')
const feedbackType = ref('') // 'success' ou 'error'

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    feedback.value = 'Preencha todos os campos.'
    feedbackType.value = 'error'
    return
  }

  if (!validateEmail(email.value)) {
    feedback.value = 'Digite um email válido.'
    feedbackType.value = 'error'
    return
  }

  feedback.value = 'Mensagem enviada com sucesso!'
  feedbackType.value = 'success'

  name.value = ''
  email.value = ''
  message.value = ''

  setTimeout(() => {
    feedback.value = ''
    feedbackType.value = ''
  }, 4000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.about {
  max-width: 850px;
  margin: 6rem auto;
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: #caffee;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  border: 1px solid rgba(0, 255, 204, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 50px rgba(0, 255, 170, 0.15);
  background: rgba(0, 20, 20, 0.3);
}

h2 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #7fff00;
  text-shadow: 0 0 10px #7fff00;
  animation: pulseGlow 2s ease-in-out infinite;
}

h3 {
  font-size: 1.4rem;
  color: #00ffc8;
  margin-bottom: 1rem;
  text-shadow: 0 0 6px #00ffc8;
}

p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #d2fff2;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #00ffc8;
  font-weight: 600;
  background: rgba(0, 255, 204, 0.07);
  border: 1px dashed rgba(0, 255, 204, 0.2);
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem 0;
  box-shadow: 0 0 18px rgba(0, 255, 204, 0.15);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-form input,
.contact-form textarea {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #00ffc8;
  color: #d2fff2;
  padding: 0.85rem 1.2rem;
  border-radius: 12px;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  resize: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #99ffe0;
}

.contact-form button {
  background-color: #00ffc8;
  color: #000;
  border: none;
  padding: 0.85rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.contact-form button:hover {
  background-color: #00d4a4;
  transform: scale(1.03);
}

.form-feedback {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  animation: slideDown 0.4s ease-out;
  text-align: center;
}

.form-feedback.success {
  background-color: rgba(0, 255, 170, 0.2);
  color: #00ffc8;
  border: 1px solid #00ffc8;
  box-shadow: 0 0 12px rgba(0, 255, 170, 0.3);
}

.form-feedback.error {
  background-color: rgba(255, 0, 0, 0.1);
  color: #ff4d4d;
  border: 1px solid #ff4d4d;
  box-shadow: 0 0 12px rgba(255, 0, 0, 0.2);
}

@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 10px #7fff00;
  }
  50% {
    text-shadow: 0 0 25px #7fff00;
  }
}

@media (max-width: 600px) {
  h2 {
    font-size: 1.7rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>