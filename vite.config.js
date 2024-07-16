import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      vue(),
    ],
    define: {
      VITE_API_BASE_URL: JSON.stringify(env.VITE_API_BASE_URL),
      VITE_LISTING_API_KEY: JSON.stringify(env.VITE_LISTING_API_KEY)
    }
    ,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
