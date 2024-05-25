// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-swiper", "nuxt-aos"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {
        configPath: "~/tailwind.config.ts",
      },
      autoprefixer: {},
    },
  },
  aos: {
    duration: 1000,
  },
});
