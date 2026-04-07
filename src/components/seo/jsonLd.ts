import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import type { Category } from "@/components/menu/menuData";

/** Organization + WebSite for the homepage */
export function homePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description:
          "Jordanian coffee shop — juices, mocktails, coffee, and food. Three branches in Jordan.",
        inLanguage: ["en-JO", "ar-JO"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/cup.png"),
        image: absoluteUrl("/featured-item1.jpeg"),
        sameAs: [
          "https://instagram.com/drinkatjo",
          "https://www.facebook.com/Jodrinkat/",
        ],
      },
      {
        "@type": "CafeOrCoffeeShop",
        "@id": `${SITE_URL}/#location-airport`,
        name: `${SITE_NAME} — Airport Road`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Airport Road",
          addressLocality: "Amman",
          addressCountry: "JO",
        },
        servesCuisine: ["Coffee", "Juices", "Beverages", "Arabic"],
      },
      {
        "@type": "CafeOrCoffeeShop",
        "@id": `${SITE_URL}/#location-hu`,
        name: `${SITE_NAME} — Hashemite University`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Zarqa",
          addressCountry: "JO",
        },
        servesCuisine: ["Coffee", "Juices", "Beverages"],
      },
      {
        "@type": "CafeOrCoffeeShop",
        "@id": `${SITE_URL}/#location-meu`,
        name: `${SITE_NAME} — Middle East University`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amman",
          addressCountry: "JO",
        },
        servesCuisine: ["Coffee", "Juices", "Beverages"],
      },
    ],
  };
}

export function menuCategoryBreadcrumbJsonLd(category: Category, path: string) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: `${SITE_URL}/menu`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: url,
      },
    ],
  };
}
