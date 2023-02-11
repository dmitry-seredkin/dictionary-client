import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), sveltekit()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "./src/shared/styles"),
    },
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
