import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Serenity/",
  build: {
    sourcemap: true,
  },
});

//Default port 4173
