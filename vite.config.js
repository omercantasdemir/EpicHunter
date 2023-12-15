import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
server: {
  proxy: [
    {
      context: '/',
      target: 'https://store-site-backend-static.ak.epicgames.com',
    }
  ]
}

})
