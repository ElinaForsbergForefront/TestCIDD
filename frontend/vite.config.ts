import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // @ts-expect-error Vitest config option 'test' is not recognized by Vite's types, but required for testing
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "/src/test/vitest.setup.ts",
    },
});