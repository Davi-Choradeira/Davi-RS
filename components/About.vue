<template>
  <section class="about" id="about">
    <h2>Sobre mim</h2>
    <p>
      Sou um desenvolvedor frontend apaixonado por criar experiências digitais
      intuitivas com foco em design, performance e acessibilidade.
    </p>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.about {
  max-width: 700px;
  margin: 4rem auto;
  padding: 0 1rem;
  color: #d1f0e6;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

h2 {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1.25rem;
  color: #00bfa6;
}

p {
  font-weight: 400;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #c0dcd7;
}

@media (max-width: 600px) {
  .about {
    margin: 3rem 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
