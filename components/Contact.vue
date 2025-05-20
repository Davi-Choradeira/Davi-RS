<template>
  <section class="contact">
    <h2>📡 Estação de Contato</h2>
    <ul>
      <li>
        <span class="label"> Transmissão via Email:</span>
        <a href="mailto:davi@email.com">davi@email.com</a>
      </li>
      <li>
        <span class="label"> Conexão LinkedIn:</span>
        <a href="https://linkedin.com/in/davi" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/davi
        </a>
      </li>
      <li>
        <span class="label"> Base GitHub:</span>
        <a href="https://github.com/davi" target="_blank" rel="noopener noreferrer">
          github.com/davi
        </a>
      </li>
      <li>
        <span class="label"> Sinal Instagram:</span>
        <a href="https://instagram.com/davi" target="_blank" rel="noopener noreferrer">
          instagram.com/davi
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

.contact {
  margin: 5rem auto;
  max-width: 700px;
  padding: 0 1.5rem;
  color: #d1f0e6;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 2px;
  background: linear-gradient(to right, transparent, #00ffe0, transparent);
  animation: pulse-line 3s infinite;
}

@keyframes pulse-line {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.contact h2 {
  font-size: 2.2rem;
  color: #7fff00;
  text-shadow: 0 0 12px #00ffae;
  margin-bottom: 2rem;
  animation: flicker 2s infinite alternate;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact li {
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #ccffee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.contact .label {
  font-weight: 600;
  color: #00ffd9;
  font-size: 1.05rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.contact a {
  color: #7fffd4;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.contact a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #00bfa6, #00ffe0);
  bottom: -4px;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.contact a:hover {
  color: #00ffae;
}

.contact a:hover::after {
  transform: scaleX(1);
}

@media (max-width: 600px) {
  .contact h2 {
    font-size: 1.6rem;
  }

  .contact li {
    font-size: 1rem;
  }

  .contact .label {
    font-size: 0.95rem;
  }
}
</style>
