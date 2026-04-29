import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { allCategories, type Category } from "@/components/menu/menuData";

const SOCIAL_LINKS = [
  "https://instagram.com/drinkatjo",
  "https://www.facebook.com/Jodrinkat/",
  "https://www.tiktok.com/@drinkat.jo",
];

const LOCATION_NODES = [
  {
    id: "location-airport",
    name: `${SITE_NAME} — Airport Road`,
    streetAddress: "Airport Road",
    addressLocality: "Amman",
  },
  {
    id: "location-hu",
    name: `${SITE_NAME} — Hashemite University`,
    streetAddress: "Hashemite University",
    addressLocality: "Zarqa",
  },
  {
    id: "location-meu",
    name: `${SITE_NAME} — Middle East University`,
    streetAddress: "Middle East University",
    addressLocality: "Amman",
  },
];

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/cup.png"),
    image: absoluteUrl("/featured-item1.jpeg"),
    sameAs: SOCIAL_LINKS,
  };
}

function locationNodes() {
  return LOCATION_NODES.map((location) => ({
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE_URL}/#${location.id}`,
    name: location.name,
    url: `${SITE_URL}/visit`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressCountry: "JO",
    },
    servesCuisine: ["Coffee", "Juices", "Beverages", "Burgers"],
    sameAs: SOCIAL_LINKS,
  }));
}

function breadcrumbJsonLd(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

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
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/menu`,
          "query-input": "required name=menu_query",
        },
      },
      organizationNode(),
      ...locationNodes(),
      breadcrumbJsonLd([
        { name: "Home", item: `${SITE_URL}/` },
      ]),
    ],
  };
}

export function menuPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/menu#collection`,
        url: `${SITE_URL}/menu`,
        name: `${SITE_NAME} Menu`,
        description:
          "Browse Drinkat menu categories including juices, mocktails, coffee, burgers, fries, and more.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        hasPart: allCategories.map((category) => ({
          "@type": "WebPage",
          name: category.title,
          url: absoluteUrl(`/menu/${category.id}`),
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", item: `${SITE_URL}/` },
        { name: "Menu", item: `${SITE_URL}/menu` },
      ]),
    ],
  };
}

export function visitPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/visit#webpage`,
        url: `${SITE_URL}/visit`,
        name: "Visit Drinkat Branches",
        description:
          "Find Drinkat branches in Amman and Zarqa, including Airport Road, Hashemite University, and Middle East University.",
        about: { "@id": `${SITE_URL}/#organization` },
      },
      ...locationNodes(),
      breadcrumbJsonLd([
        { name: "Home", item: `${SITE_URL}/` },
        { name: "Visit us", item: `${SITE_URL}/visit` },
      ]),
    ],
  };
}

export function socialsPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/socials#webpage`,
        url: `${SITE_URL}/socials`,
        name: "Drinkat Social Channels",
        description: "Official Drinkat social media channels and community updates.",
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization-socials`,
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: SOCIAL_LINKS,
      },
      breadcrumbJsonLd([
        { name: "Home", item: `${SITE_URL}/` },
        { name: "Socials", item: `${SITE_URL}/socials` },
      ]),
    ],
  };
}

export function menuCategoryBreadcrumbJsonLd(category: Category, path: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: `${category.title} menu`,
        description:
          category.subtitle ??
          `${category.title} drinks and food category at Drinkat.`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      breadcrumbJsonLd([
        { name: "Home", item: `${SITE_URL}/` },
        { name: "Menu", item: `${SITE_URL}/menu` },
        { name: category.title, item: absoluteUrl(path) },
      ]),
    ],
  };
}
