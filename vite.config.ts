import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',  // 👈 关键：必须设置为 '/'，不能是空字符串
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false,
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'pwa-64x64.png', 'pwa-192x192.png', 'pwa-512x512.png'],
      devOptions: {
        enabled: false
      }
    })
  ]
})