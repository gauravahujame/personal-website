import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/profile';

// One-page site: a hand-written sitemap avoids adding @astrojs/sitemap.
const PAGES = ['/'];

export const GET: APIRoute = () => {
  const urls = PAGES.map((path) => `  <url><loc>${new URL(path, SITE_URL).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
