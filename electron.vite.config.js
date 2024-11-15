import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    entry: resolve(__dirname, 'src/main/index.js')
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    input: resolve(__dirname, 'src/preload/index.js')
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    input: resolve(__dirname, 'src/renderer/index.html'),
    plugins: [react()]
  }
})
