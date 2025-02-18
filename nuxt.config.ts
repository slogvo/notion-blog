import fs from "fs";
import path from "path";
import { tailwindcss, runtimeConfig, shadcn } from "./configs/index";

export default {
  devtools: { enabled: true },
  runtimeConfig,
  ssr: true,
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.crt")),
    },
    port: 3000,
  },
  build: {
    transpile: ["vue-remix-icons"],
  },
  css: ["~/assets/styles/index.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxt/content",
  ],
  components: true,
  tailwindcss,
  shadcn,
  content: {
    highlight: {
      theme: "github-dark",
    },
    markdown: {
      toc: { depth: 3, searchDepth: 3 },
    },
  },
  compatibilityDate: "2024-08-03",
};
