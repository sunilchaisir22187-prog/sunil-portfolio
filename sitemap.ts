import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
 return ['', '/work/nirmala-home-kitchen/', '/work/muso/', '/work/sabera/'].map(path => ({ url: `https://sunil-human-variable.rarefern512.chatgpt.site${path}`, changeFrequency: 'monthly', priority: path ? 0.8 : 1 }));
}
