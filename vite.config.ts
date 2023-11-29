import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig as defaultViteConfig, mergeConfig } from 'vite'
import { defineConfig as vitestConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default mergeConfig(
  defaultViteConfig({
    plugins: [react()],
    server: {
      port: 3000
    },
    css: {
      devSourcemap: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }),
  vitestConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts']
    }
  })
)
