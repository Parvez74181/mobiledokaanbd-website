import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  output: "server",
  adapter: vercel(),
  prefetch: true,
  experimental: {
    contentCollectionCache: true,
  },
});
