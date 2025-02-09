import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ insertTypesEntry: true })],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry point untuk library
      name: "CustomMultipleCombobox", // Nama global untuk library
      fileName: (format) => `custom-multiple-combobox.${format}.js`, // Nama file output
    },
    rollupOptions: {
      // Pastikan untuk mengeksternalkan dependensi yang tidak perlu di-bundle
      external: ["react", "react-dom", "downshift"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          downshift: "Downshift",
        },
      },
    },
  },
});
