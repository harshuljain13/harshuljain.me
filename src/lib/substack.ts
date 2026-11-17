import { XMLParser } from 'fast-xml-parser';

export type Post = {
  title: string;
  url: string;
  date: string;
  dek: string;
  /** cover image pulled from the RSS enclosure or post body */
  image?: string;
};

const FEED = 'https://harshuljain.substack.com/feed';

export async function fetchPosts(limit = 6): Promise<Post[]> {
  try {
    const res = await fetch(FEED, { headers: { 'User-Agent': 'harshuljain.me/1.0' } });
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const data = parser.parse(xml);
    const items = data?.rss?.channel?.item ?? [];
    const arr = Array.isArray(items) ? items : [items];
    return arr.slice(0, limit).map((item: any) => ({
      title: String(item.title ?? '').trim(),
      url: String(item.link ?? '').trim(),
      date: String(item.pubDate ?? '').trim(),
      dek: stripHtml(String(item.description ?? '')).slice(0, 180),
      image: extractImage(item),
    }));
  } catch {
    return [];
  }
}

/** Substack puts the cover art in <enclosure>, else the first <img> in the body. */
function extractImage(item: any): string | undefined {
  const enclosure = item?.enclosure?.['@_url'];
  if (typeof enclosure === 'string' && enclosure.startsWith('http')) return enclosure;
  const body = String(item?.['content:encoded'] ?? item?.description ?? '');
  const match = body.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export function formatDate(d: string): string {
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
