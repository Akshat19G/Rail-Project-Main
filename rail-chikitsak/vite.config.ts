import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: { port: 8080 },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Custom SSR entry (src/server.ts) wraps errors in a friendly page.
      server: { entry: "server" },
    }),
    nitro({ preset: process.env["NITRO_PRESET"] || "vercel" }),
    viteReact(),
  ],
});
