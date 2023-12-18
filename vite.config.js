// vite.config.js
import { defineConfig } from "vite";
import ViteReact from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteReact()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Your proxy server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
