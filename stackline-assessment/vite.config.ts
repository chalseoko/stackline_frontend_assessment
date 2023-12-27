import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    origin: "http://127.0.0.1:3000"
  },
  build: {
    manifest: true,
    ssrManifest: true,
    emptyOutDir: true,
    outDir: "build",
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
  },
  json: {
    stringify: true,
  },
  optimizeDeps: {
    force: true
  }
})
