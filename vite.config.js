import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Process is not defined issue
  // https://prathapreddy-mudium.medium.com/vite-react-project-uncaught-referenceerror-process-is-not-defined-at-aa624e343a88
  // define: {
  //   "process.env": {},
  // },
});
