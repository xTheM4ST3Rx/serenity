import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/serenity/",
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
});

//Default port 4173
//git subtree push --prefix dist github gh-pages
