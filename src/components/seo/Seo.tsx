import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE_PATH,
  absoluteUrl,
} from "@/lib/site";

export type SeoProps = {
  /** Page title (brand suffix added unless `titleTemplate` is false). */
  title: string;
  description?: string;
  /** Path only, e.g. `/menu` or `/menu/juices-cocktails` */
  path: string;
  /** Set when `path` is not a real URL (e.g. 404) — omits canonical. */
  skipCanonical?: boolean;
  noIndex?: boolean;
  /** Absolute URL or site-relative path to og:image */
  ogImage?: string;
  /** Structured data objects (serialized as JSON-LD) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** If false, title is used as-is (for homepage). Default: append ` | Drinkat` when missing brand. */
  titleTemplate?: boolean;
};

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function buildTitle(title: string, useTemplate: boolean): string {
  if (!useTemplate) return title;
  const t = title.trim();
  if (/\bDrinkat\b/i.test(t) && (t.includes("—") || t.includes("|"))) return t;
  if (t.toLowerCase().endsWith("drinkat")) return t;
  return `${t} | ${SITE_NAME}`;
}

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  skipCanonical = false,
  noIndex = false,
  ogImage,
  jsonLd,
  titleTemplate = true,
}: SeoProps) {
  const pathname = normalizePath(path);
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  /** Avoid advertising a fake URL for error pages in Open Graph. */
  const shareUrl = skipCanonical ? SITE_URL : canonical;
  const fullTitle = buildTitle(title, titleTemplate);
  const ogImageUrl = ogImage ? absoluteUrl(ogImage) : absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  const jsonLdBlocks = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {!skipCanonical && <link rel="canonical" href={canonical} />}

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_JO" />
      <meta property="og:locale:alternate" content="ar_JO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@drinkatjo" />
      <meta name="twitter:url" content={shareUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {jsonLdBlocks.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </Helmet>
  );
}
