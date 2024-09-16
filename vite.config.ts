import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@assets-images": "/src/assets/images",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@controller": "/src/controller",
      "@hook": "/src/hook",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@modules": "/src/modules",
      "@models": "/src/models",
      "@utils": "/src/utils",
      "@type": "/src/type",
      "@others": "/src/others",
      "@configs": "/src/configs",
      "@helpers": "/src/helpers",
    },
  },
});
