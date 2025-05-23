<template>
  <div>
    <div class="global-background">
      <canvas id="starsCanvas"></canvas>
    </div>

    <div class="page-content">
      <NuxtPage />
    </div>

    <!-- Scroll to Top Button -->
    <button v-if="showScrollTop" class="scroll-top" @click="scrollToTop">
      👽
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollTop: false,
    };
  },
  mounted() {
    this.initParticles();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    initParticles() {
      const canvas = document.getElementById("starsCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
      }));

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
          star.y += star.speed;

          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });

        requestAnimationFrame(animate);
      };

      animate();
    },
    handleScroll() {
      this.showScrollTop = window.scrollY > 200;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
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
  color: white;
  padding: 20px;
}

/* Scroll Top Button */
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #00fff7, #7fff00);
  color: black;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 0 12px #7fff00;
  transition: all 0.3s ease;
}

.scroll-top:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #00fff7;
}
</style>
