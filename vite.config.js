import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/5hare/",
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true, filename: "bundle-analysis.html" }),
  ],
});
