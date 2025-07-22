<template>
  <section class="formation" id="formation">
    <div class="container">
      <h2 data-aos="fade-down">Minha Formação</h2>

      <div class="formation-details">
        <div class="formation-item" data-aos="fade-right" data-aos-delay="200">
          <h3>Desenvolvedor Full Stack — B7Web</h3>
          <p>
            Aprendi a desenvolver aplicações completas, trabalhando tanto no <strong>front-end</strong> (HTML, CSS, JavaScript, React)
            quanto no <strong>back-end</strong> (Node.js, Express, bancos de dados). Construção de APIs, autenticação e deploy também fizeram parte do aprendizado.
          </p>
        </div>

        <div class="formation-item" data-aos="zoom-in-up" data-aos-delay="400">
          <h3>React — Udemy</h3>
          <p>
            Aprofundei meu conhecimento na criação de interfaces modernas e dinâmicas usando <strong>React</strong>, explorando componentes,
            estado, hooks e integração com APIs externas. Também aprendi sobre otimização e desenvolvimento escalável.
          </p>
        </div>

        <div class="formation-item" data-aos="fade-left" data-aos-delay="600">
          <h3>Desenvolvimento Web — Udemy</h3>
          <p>
            Entendi os fundamentos essenciais do desenvolvimento web, abrangendo <strong>HTML, CSS e JavaScript</strong>,
            além de frameworks como Bootstrap. Aprendi sobre responsividade, acessibilidade e boas práticas para sites performáticos.
          </p>
        </div>
      </div>

      <!-- Botão padronizado -->
      <button class="standard-button" @click="goToHome">Voltar ao início</button>
    </div>

    <!-- Canvas das tecnologias flutuando -->
    <canvas id="techCanvas"></canvas>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = useRouter()
const goToHome = () => {
  router.push('/#inicio')
}

onMounted(() => {
  AOS.init({ duration: 1000 })

  const canvas = document.getElementById("techCanvas")
  const ctx = canvas.getContext("2d")

  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)

  const techs = ["HTML", "CSS", "JavaScript", "Vue", "Nuxt", "Node.js", "Python", "Git", "React", "SQL"]
  const items = Array.from({ length: 30 }, () => ({
    text: techs[Math.floor(Math.random() * techs.length)],
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: (Math.random() - 0.5) * 1,
    speedY: (Math.random() - 0.5) * 1,
    size: 20 + Math.random() * 14
  }))

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    items.forEach(item => {
      ctx.font = `${item.size}px Orbitron`
      ctx.fillStyle = "rgba(0, 255, 204, 0.7)"
      ctx.fillText(item.text, item.x, item.y)

      item.x += item.speedX
      item.y += item.speedY

      if (item.x < -100) item.x = canvas.width
      if (item.x > canvas.width + 100) item.x = 0
      if (item.y < -100) item.y = canvas.height
      if (item.y > canvas.height + 100) item.y = 0
    })
    requestAnimationFrame(animate)
  }

  animate()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

.formation {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  font-family: 'Orbitron', sans-serif;
  color: #ebeeed;
  text-align: center;
  background: transparent;
  backdrop-filter: blur(6px);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 800px;
  text-align: center;
  z-index: 2;
  padding: 2rem;
  background-color: #000000;
  border-radius: 12px;
  border: 1px solid #00fff7;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
  position: relative;
}

h2 {
  font-size: 2.5rem;
  color: #7fff00;
  text-shadow: 0 0 12px #000000;
  margin-bottom: 2rem;
}

.formation-details {
  display: grid;
  gap: 2rem;
}

.formation-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #00ffc8;
}

.formation-item p {
  font-size: 1rem;
  line-height: 1.6;
  background: rgba(0, 255, 200, 0.03);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 200, 0.08);
  box-shadow: inset 0 0 12px rgba(0, 255, 200, 0.04);
  color: #d1fff4;
}

/* Botão padronizado igual ao About */
.standard-button {
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
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  font-family: 'Orbitron', sans-serif;
}

.standard-button:hover {
  background: linear-gradient(135deg, #00ffaa, #afff00);
  transform: scale(1.03);
  box-shadow: 0 0 25px rgba(127, 255, 0, 0.7);
}

/* Canvas */
#techCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>