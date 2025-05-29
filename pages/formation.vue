<template>
  <section class="formation" id="formation">
    <div class="container">
      <h2> Minha Formação</h2>
      
      <div class="formation-details">
        <div class="formation-item">
          <h3> Primeiros Passos</h3>
          <p>Aprendi <strong>HTML & CSS</strong>, criando meus primeiros layouts e interfaces responsivas.</p>
        </div>
        <div class="formation-item">
          <h3> JavaScript</h3>
          <p>Dominei a linguagem, criando interatividade e soluções dinâmicas com lógica robusta.</p>
        </div>
        <div class="formation-item">
          <h3> Vue & Nuxt</h3>
          <p>Explorei <strong>componentes reativos</strong>, estrutura modular e SSR com Nuxt.</p>
        </div>
        <div class="formation-item">
          <h3> Back-End & APIs</h3>
          <p>Integrei <strong>APIs modernas</strong> com segurança e performance usando Node.js.</p>
        </div>
      </div>

      <!-- Botão flutuante no canto superior direito -->
      <button class="back-button" @click="goToHome"> Voltar ao início</button>
    </div>

    <!-- Canvas das tecnologias flutuando -->
    <canvas id="techCanvas"></canvas>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

onMounted(() => {
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
  min-height: 100vh;
  font-family: 'Orbitron', sans-serif;
  color: #ccffee;
  text-align: center;
  background: transparent;
  backdrop-filter: blur(6px);
  position: relative;
  overflow: hidden;
}

/* Conteúdo centralizado */
.container {
  max-width: 800px;
  text-align: center;
  z-index: 2;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  border: 1px solid #00fff7;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
  position: relative;
}

/* Texto principal */
h2 {
  font-size: 2.5rem;
  color: #7fff00;
  text-shadow: 0 0 12px #00ffae;
  margin-bottom: 2rem;
}

/* Blocos de formação */
.formation-details {
  display: grid;
  gap: 1.5rem;
}

/* Botão no canto superior direito */
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

/* Canvas das tecnologias flutuantes */
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