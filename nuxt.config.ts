export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/aos.client.js' // Adicionando AOS como plugin do lado do cliente
  ]
});