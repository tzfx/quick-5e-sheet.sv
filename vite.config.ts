import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    server: {
        port: 9047
    },
    plugins: [svelte()],
});
