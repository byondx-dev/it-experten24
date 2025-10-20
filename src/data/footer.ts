export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export const footerServiceLinks: LinkItem[] = [
  { href: "/service/pc-notdienst", label: "PC & Laptop Notdienst" },
  { href: "/beratung/smart-home", label: "Smart Home Beratung" },
  { href: "/schulung/tablet-schulung", label: "Tablet & Smartphone Schulung" },
  { href: "/service/drucker-einrichten", label: "Drucker einrichten" },
];

export const footerUtilityLinks: LinkItem[] = [
  { href: "https://maps.google.com", label: "Anfahrt", external: true },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];
