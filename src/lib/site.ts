/** Production site origin (no trailing slash). Used for canonical URLs and Open Graph. */
export const SITE_URL = "https://drinkat.jo";

export const SITE_NAME = "Drinkat";

export const DEFAULT_DESCRIPTION =
  "Jordanian coffee shop with three branches: Airport Road Amman, Hashemite University Zarqa, and Middle East University Amman. درينك ناو!";

/** Path under `public/` for default share image */
export const DEFAULT_OG_IMAGE_PATH = "/featured-item1.jpeg";

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
