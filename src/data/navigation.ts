import { company } from "./company";

export interface NavLink {
  href: string;
  label: string;
}

export interface CTAConfig {
  label: string;
  href: string;
}

export interface PhoneConfig {
  label: string;
  href?: string;
}

export const primaryNavigation: NavLink[] = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/standort", label: "Standort" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export const defaultCTA: CTAConfig = {
  label: "Termin buchen",
  href: "/kontakt",
};

export const defaultPhone: PhoneConfig = {
  label: company.phone.label,
  href: company.phone.href,
};
