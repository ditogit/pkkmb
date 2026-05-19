import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/pkkmb/",
  integrations: [tailwind()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",

        // Ensure SW takes control immediately without waiting for page reload
        workbox: {
          clientsClaim: true,
          skipWaiting: true,
          cleanupOutdatedCaches: true,
          // Precache all static assets Astro generates
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest,woff2}"],
          // navigateFallback: all pages are static HTML, no fallback needed
          // but we must scope workbox to the subfolder
          navigateFallback: "/pkkmb/",
          navigateFallbackAllowlist: [/^\/pkkmb\//],
        },

        manifest: {
          name: "PKKMB 2026 - Universitas Merah Putih",
          short_name: "PKKMB",
          description: "Pusat Informasi Mahasiswa Baru Universitas Merah Putih",
          theme_color: "#0f172a",
          background_color: "#ffffff",
          display: "standalone",
          scope: "/pkkmb/",
          start_url: "/pkkmb/",
          icons: [
            {
              src: "icons/icon-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "icons/icon-512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  },
});
