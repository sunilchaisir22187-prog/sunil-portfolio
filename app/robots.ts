import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
 return { rules: { userAgent:'*', allow:'/' }, sitemap:'https://sunil-human-variable.rarefern512.chatgpt.site/sitemap.xml' };
}
