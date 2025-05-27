<template>
  <section class="projects" id="projects">
    <h2> Projetos </h2>
    <div class="project-grid">
      <div 
        class="project-card" 
        v-for="n in 10" 
        :key="n" 
        ref="cards"
      >
        <div class="card-content">
          <h3>Projeto #{{ n }}</h3>
          <p>
            Protótipo avançado desenvolvido no laboratório de Davi Rocha.  
            Tecnologia de ponta aplicada ao mundo digital.
          </p>
          <div class="buttons">
            <button @click="viewProject(n)"> Ver Detalhes</button>
            <button class="external-link"> Acessar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão flutuante no canto superior direito -->
    <button class="back-button" @click="goToHome"> Voltar ao início</button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

const cards = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, { threshold: 0.2 })

  cards.value.forEach(card => observer.observe(card))
})

const viewProject = (n) => {
  alert(`Abrindo detalhes do Projeto #${n}`)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.projects {
  padding: 6rem 3rem;
  font-family: 'Orbitron', sans-serif;
  color: #ccffee;
  text-align: center;
  background: transparent;
}

h2 {
  font-size: 2.6rem;
  margin-bottom: 3rem;
  color: #00ffae;
  text-shadow: 0 0 20px #00fff7;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.project-card {
  background: rgba(0, 255, 204, 0.12);
  border: 2px solid #00ffae;
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
  padding: 1.5rem;
  border-radius: 20px;
  width: 300px;
  transition: transform 0.3s ease, opacity 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  background: linear-gradient(135deg, #00fff7, #7fff00);
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: linear-gradient(135deg, #7fff00, #00fff7);
  box-shadow: 0 0 10px rgba(127, 255, 0, 0.7);
}

.external-link {
  background: #222;
  color: white;
}

.external-link:hover {
  background: #444;
}

/* Botão de retorno no canto superior direito */
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
</style>