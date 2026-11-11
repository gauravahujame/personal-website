// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.gauravahuja.dev',
  trailingSlash: 'ignore',
  // One page with ~35 KB of CSS: inlining it removes two render-blocking requests.
  build: { inlineStylesheets: 'always' }
});
