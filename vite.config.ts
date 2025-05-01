import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/bloque-test/',
  plugins: [
    preact(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html}"],
      },
    }),
  ],
});
