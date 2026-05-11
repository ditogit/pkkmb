import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    integrations: [tailwind()],
    devToolbar: { enabled: false },
    vite: {
        plugins: [
            VitePWA({
                registerType: 'autoUpdate',

                manifest: {
                    name: 'PKK UPNYK',
                    short_name: 'PKK',
                    description: 'Pusat Informasi Mahasiswa Baru',
                    theme_color: '#0f172a',
                    background_color: '#ffffff',
                    display: 'standalone',
                    scope: '/',
                    start_url: '/',

                    icons: [
                        {
                            src: '/icons/icon-192.png',
                            sizes: '192x192',
                            type: 'image/png'
                        },
                        {
                            src: '/icons/icon-512.png',
                            sizes: '512x512',
                            type: 'image/png'
                        }
                    ]
                }
            })
        ]
    }
});
