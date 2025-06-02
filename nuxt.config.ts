export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/aos.client.js' // Adicionando AOS como plugin do lado do cliente
  ],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }
      ]
    }
  }
})