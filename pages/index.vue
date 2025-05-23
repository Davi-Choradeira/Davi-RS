<script setup>
import About from '@/components/About.vue'
import Project from '@/components/Project.vue'
import Skill from '@/components/Skill.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'

</script>

<template>
  <main>
    <Hero />
    <About />
    <Project />
    <Skill />
    <Contact />
    <Footer />
    
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}
</style>