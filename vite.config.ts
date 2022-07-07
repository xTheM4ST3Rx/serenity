import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Serenity/",
  plugins: [react()],
});

//Default port 4173
//git subtree push --prefix dist github gh-pages
