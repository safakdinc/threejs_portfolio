// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://i.ibb.co/jRrmZQt/panter.png' // Path to your custom PNG icon
        }
      ],
      title: 'Yazılım Panteri',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'tr'
      }
    }
  },
  experimental: {
    emitRouteChunkError: true
  },
  plugins: ['@/plugins/lottie.js'],
  modules: ['v-wave/nuxt'],
  css: ['@/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
