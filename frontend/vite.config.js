import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/Kalkunlus/',
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/api-python': {
                target: 'http://localhost:8001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api-python/, '')
            }
        }
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    }
})
