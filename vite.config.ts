import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default {
  plugins: [react()],
  test: {
    globals: true,
    enviroment: "jsdom",
    setupFiles: "./src/setupTest.js",
    css: true,
  },
};
