// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: '',
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['nuxt-purgecss', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@vueuse/motion/nuxt', 'nuxt-simple-sitemap'],
    googleFonts: {
        families: {
            Inter: [100, 300, 400, 600, 700, 900],
        },
        display: 'fallback',
        download: true,
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    site: {
        url: 'https://arthursegato.dev',
    },
})
