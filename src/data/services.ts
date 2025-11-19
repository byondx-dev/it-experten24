export type ServiceCategory = "Service" | "Schulung" | "Beratung";

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  category: ServiceCategory;
}

export interface ServiceCategoryMeta {
  id: ServiceCategory;
  title: string;
  description: string;
  href: string;
  pageTitle: string;
  pageDescription: string;
  heading: string;
  intro: string;
}

export const services: ServiceItem[] = [
  {
    title: "PC & Laptop Unterstützung",
    description:
      "Reparatur, Performance-Optimierung, Virenschutz und Datensicherung für alle Geräte.",
    href: "/service/pc-notdienst",
    category: "Service",
  },
  {
    title: "Netzwerk & WLAN",
    description:
      "Schnelles WLAN im ganzen Zuhause, Router-Setup, Mesh-Systeme und Smart-Home-Anbindung.",
    href: "/service/wlan-optimierung",
    category: "Service",
  },
  {
    title: "Smartphone & Tablet",
    description:
      "Einrichtung, Synchronisation, sichere Nutzung und Datenschutz für mobile Geräte.",
    href: "/schulung/tablet-schulung",
    category: "Schulung",
  },
  {
    title: "Drucker & Scanner",
    description:
      "Installation, Fehlerbehebung und Integration in Ihr Heimnetzwerk.",
    href: "/service/drucker-einrichten",
    category: "Service",
  },
  {
    title: "Digitale Sicherheit",
    description:
      "Phishing-Schutz, Passwort-Strategien, Zwei-Faktor-Authentifizierung, Update-Management.",
    href: "/beratung/it-sicherheit",
    category: "Beratung",
  },
  {
    title: "Individuelle Schulungen",
    description:
      "Geduldige Unterstützung für Senior:innen und Familien – Schritt für Schritt erklärt.",
    href: "/schulung/individuelle-schulung",
    category: "Schulung",
  },
];

export const serviceCategories: ServiceCategoryMeta[] = [
  {
    id: "Service",
    title: "Service",
    description: "Schnelle Hilfe für PC, Netzwerk und Drucker – vor Ort oder aus der Ferne.",
    href: "/service",
    pageTitle: "IT-Service für Zuhause und Büro in München",
    pageDescription:
      "PC- und Laptop-Hilfe, WLAN-Optimierung und Druckerservice: Wir lösen Ihre IT-Probleme in München zuverlässig und transparent.",
    heading: "IT-Service, der Probleme wirklich löst",
    intro:
      "Wenn Computer, Netzwerk oder Drucker streiken, muss es schnell gehen. Unser Serviceteam kommt zu Ihnen nach Hause oder ins Büro und sorgt dafür, dass alles wieder läuft — verständlich erklärt und ohne Fachchinesisch.",
  },
  {
    id: "Schulung",
    title: "Schulung",
    description: "Individuelle Digital-Schulungen für Einsteiger:innen, Familien und Teams.",
    href: "/schulung",
    pageTitle: "Digitale Schulungen mit persönlicher Begleitung",
    pageDescription:
      "Wir machen Sie fit für den digitalen Alltag: Smartphone, Tablet, Online-Sicherheit und mehr – Schritt für Schritt erklärt.",
    heading: "Schulungen, die genau zu Ihrem Tempo passen",
    intro:
      "Ob erster Umgang mit Smartphone und Tablet oder Auffrischung für den Büroalltag: Wir nehmen uns Zeit, erklären geduldig und gestalten jeden Termin nach Ihren Fragen und Zielen.",
  },
  {
    id: "Beratung",
    title: "Beratung",
    description: "Strategische IT-Beratung für Sicherheit, moderne Technik und smarte Lösungen.",
    href: "/beratung",
    pageTitle: "IT-Beratung für sichere und zukunftsfähige Technik",
    pageDescription:
      "Von IT-Sicherheit bis Smart-Home: Wir beraten Sie individuell, planen Projekte und setzen Technik sinnvoll für Sie ein.",
    heading: "Beratung mit Weitblick und Praxisnähe",
    intro:
      "Wir analysieren Ihre Anforderungen, empfehlen passende Lösungen und begleiten Sie bei der Umsetzung — für mehr Sicherheit, Komfort und Effizienz im Alltag oder Unternehmen.",
  },
];
