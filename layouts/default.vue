<template>
  <div class="global-background">
    <canvas id="starsCanvas"></canvas>
  </div>
  <div class="page-content">
    <NuxtPage />
  </div>
</template>

<script>
export default {
  mounted() {
    this.initParticles();
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

      function animate() {
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
      }

      animate();
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
</style>