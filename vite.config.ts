import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      // Google Fonts API V2
      google: {
        /**
         * enable preconnect link injection
         *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
         * default: true
         */
        preconnect: true,

        /**
         * values: auto, block, swap(default), fallback, optional
         * default: 'swap'
         */
        display: "swap",

        /**
         * define which characters to load
         * default: undefined (load all characters)
         */
        text: undefined,

        /**
         * define where the font load tags should be inserted
         * default: 'head-prepend'
         *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
         */
        injectTo: "head-prepend",

        /**
         * Fonts families lists
         */
        families: [
          // families can be either strings (only regular 400 will be loaded)
          // 'Source Sans Pro',

          // or objects
          {
            /**
             * Family name (required)
             */
            name: "Epilogue",

            /**
             * Family styles
             */
            styles: "ital,wght@0,100..900;1,100..900",

            /**
             * enable non-blocking renderer
             *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
             * default: true
             */
            defer: true,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
