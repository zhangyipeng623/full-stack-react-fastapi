import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite"; /* 倒入tailwindcss */

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    /* 设置别名*/

    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
