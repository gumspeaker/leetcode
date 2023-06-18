import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["leet-code-answer"],
  },
  build: {
    commonjsOptions: {
      include: [/leet-code-answer/, /node_modules/],
    },
  },
});
