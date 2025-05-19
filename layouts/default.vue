<template>
  <div class="global-background">
    <div class="stars-layer small"></div>
    <div class="stars-layer medium"></div>
    <div class="stars-layer large"></div>
  </div>
  <div class="page-content">
    <NuxtPage />
  </div>
</template>
<style scoped>
.global-background {
  position: fixed;
  inset: 0;
  background: black;
  overflow: hidden;
  z-index: -1;
}

/* Camadas de estrelas aqui, igual você já fez */
.stars-layer {
  position: absolute;
  width: 1px;
  height: 1px;
  background: transparent;
  animation: blink 3s infinite ease-in-out alternate;
}

/* Pequenas */
.stars-layer.small {
  box-shadow:
    20px 30px white, 50px 80px white, 100px 120px white,
    200px 150px white, 300px 220px white, 400px 180px white,
    150px 60px white, 80px 300px white, 60px 400px white,
    90px 500px white, 30px 600px white, 120px 700px white,
    220px 800px white, 40px 900px white, 10px 1000px white,
    140px 1100px white, 160px 1200px white, 180px 1300px white,
    200px 1400px white, 250px 1450px white, 300px 1500px white;
}

/* Médias */
.stars-layer.medium {
  box-shadow:
    500px 300px white, 600px 250px white, 700px 320px white,
    800px 100px white, 900px 400px white, 1000px 50px white,
    1100px 280px white, 1200px 150px white, 1300px 60px white,
    100px 500px white, 200px 600px white, 300px 700px white,
    400px 800px white, 500px 900px white, 600px 1000px white,
    700px 1100px white, 800px 1200px white, 900px 1300px white,
    1000px 1400px white, 1100px 1500px white, 1200px 1600px white;
}

/* Grandes */
.stars-layer.large {
  box-shadow:
    1500px 100px white, 1400px 200px white, 1350px 300px white,
    1300px 400px white, 1250px 500px white, 1200px 600px white,
    1150px 700px white, 1100px 800px white, 1050px 900px white,
    1000px 1000px white, 950px 1100px white, 900px 1200px white,
    850px 1300px white, 800px 1400px white, 750px 1500px white,
    700px 1600px white, 650px 1700px white, 600px 1800px white,
    550px 1900px white, 500px 2000px white, 450px 2100px white;
}

@keyframes blink {
  0% { opacity: 0.2; }
  100% { opacity: 1; }
}

.page-content {
  position: relative;
  z-index: 1;
  color: white; /* Pra garantir que o texto apareça */
  padding: 20px;
}
</style>
