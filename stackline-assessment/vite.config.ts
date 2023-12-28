import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    // origin: "http://127.0.0.1:3000"
  },
  build: {
    manifest: true,
    ssrManifest: true,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    force: true,
  }
})
