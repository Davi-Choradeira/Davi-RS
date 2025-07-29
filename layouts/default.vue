<template>
  <div :class="{ gelo: isGelo }">
    <div class="global-background">
      <canvas id="starsCanvas"></canvas>
    </div>

    <div class="page-content">
      <NuxtPage />
    </div>

    <!-- ✅ Botão com imagem circular no lugar do emoji -->
    <button v-if="showScrollTop" class="scroll-top" @click="scrollToTop">
      <img :src="scrollAlien" alt="Scroll to top" class="scroll-icon" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import scrollAlien from '../assets/images/alien.png' // ✅ Substituindo o emoji

const showScrollTop = ref(false)
const isGelo = ref(false)

provide('isGelo', isGelo)
provide('toggleGelo', () => {
  isGelo.value = !isGelo.value
})

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200
}

onMounted(() => {
  initParticles()
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const initParticles = () => {
  const canvas = document.getElementById("starsCanvas")
  const ctx = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.1
  }))

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    stars.forEach(star => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
      ctx.fillStyle = "white"
      ctx.fill()
      star.y += star.speed

      if (star.y > canvas.height) {
        star.y = 0
        star.x = Math.random() * canvas.width
      }
    })

    requestAnimationFrame(animate)
  }

  animate()
}
</script>

<style scoped>
.global-background {
  position: fixed;
  inset: 0;
  background: black;
  overflow: hidden;
  z-index: -1;
}

#starsCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
}

.page-content {
  position: relative;
  z-index: 1;
  padding: 20px;
  min-height: 100vh;
}

/* ✅ Botão com imagem circular estilizada */
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 0 12px #7fff00;
  transition: all 0.3s ease;
  padding: 0.3rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ✅ Estilo da imagem circular */
.scroll-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #00fff7;
}

.scroll-top:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #00fff7;
}
</style>

<style>
.gelo {
  background-color: #738286 !important;
  color: #1a1a1a !important;
}

.gelo .page-content {
  background-color: #69787d;
  color: #1a1a1a;
}

.gelo .scroll-top {
  background: #000000;
  box-shadow: 0 0 10px #000000;
}
</style>