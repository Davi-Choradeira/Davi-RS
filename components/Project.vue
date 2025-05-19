<template>
  <section class="projects" id="projects">
    <h2>Projetos</h2>
    <div class="project-list">
      <div class="project-card" v-for="n in 7" :key="n">
        <h3>Projeto {{ n }}</h3>
        <p>Breve descrição do projeto.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 1rem;
  color: #d1f0e6;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

h2 {
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #00bfa6;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.project-card {
  background: #111;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 191, 166, 0.3);
  flex: 1 1 280px;
  max-width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 191, 166, 0.6);
}

.project-card h3 {
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #00bfa6;
}

.project-card p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  color: #c0dcd7;
}

@media (max-width: 600px) {
  .project-list {
    flex-direction: column;
    gap: 1.25rem;
  }

  .project-card {
    max-width: 100%;
  }
}
</style>
