export interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

export const services: ServiceItem[] = [
  {
    title: "PC & Laptop Unterstützung",
    description:
      "Reparatur, Performance-Optimierung, Virenschutz und Datensicherung für alle Geräte.",
    href: "/service/pc-notdienst",
  },
  {
    title: "Netzwerk & WLAN",
    description:
      "Schnelles WLAN im ganzen Zuhause, Router-Setup, Mesh-Systeme und Smart-Home-Anbindung.",
    href: "/service/wlan-optimierung",
  },
  {
    title: "Smartphone & Tablet",
    description:
      "Einrichtung, Synchronisation, sichere Nutzung und Datenschutz für mobile Geräte.",
    href: "/schulung/tablet-schulung",
  },
  {
    title: "Drucker & Scanner",
    description:
      "Installation, Fehlerbehebung und Integration in Ihr Heimnetzwerk.",
    href: "/service/drucker-einrichten",
  },
  {
    title: "Digitale Sicherheit",
    description:
      "Phishing-Schutz, Passwort-Strategien, Zwei-Faktor-Authentifizierung, Update-Management.",
    href: "/beratung/it-sicherheit",
  },
  {
    title: "Individuelle Schulungen",
    description:
      "Geduldige Unterstützung für Senior:innen und Familien – Schritt für Schritt erklärt.",
    href: "/schulung/individuelle-schulung",
  },
];
