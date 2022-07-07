import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Serenity/",
  server: {
    port: 5001,
  },
  preview: {
    port: 5002,
  },
});
