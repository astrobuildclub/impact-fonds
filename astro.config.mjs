import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icons from 'astro-icon'; // Zorg ervoor dat je dit correct importeert als het bestaat

// https://astro.build/config
export default defineConfig({
  integrations: [icons(), mdx(), tailwind({ applyBaseStyles: false })],
});
