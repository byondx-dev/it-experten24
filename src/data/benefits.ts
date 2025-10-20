export interface BenefitStep {
  title: string;
  description: string;
}

export interface BenefitHighlight {
  title: string;
  description: string;
}

export const benefitSteps: BenefitStep[] = [
  {
    title: "Vor-Ort & Remote",
    description:
      "Wir kommen kurzfristig vorbei oder helfen per Fernwartung – flexibel, sicher verschlüsselt und DSGVO-konform.",
  },
  {
    title: "Geduldige Schulung",
    description:
      "Gerade für Senior:innen nehmen wir uns Zeit, mit anschaulichen Beispielen und einfachen Schritt-für-Schritt-Anleitungen.",
  },
  {
    title: "Transparente Preise",
    description:
      "Klare Pakete ohne versteckte Kosten. Faire Abrechnung nach Aufwand und individuelle Lösungen für jede Situation.",
  },
];

export const benefitHighlights: BenefitHighlight[] = [
  {
    title: "Zertifizierte Expert:innen",
    description:
      "Unsere Techniker:innen sind zertifiziert für Microsoft, Apple und gängige Netzwerk-Hersteller. Regelmäßige Fortbildungen garantieren stets aktuelles Wissen.",
  },
  {
    title: "Bewertungen aus München",
    description:
      "\"Super verständlich erklärt, mein Drucker funktioniert wieder einwandfrei!\" – Monika S., 68 Jahre, München Schwabing.",
  },
  {
    title: "Sicherheit & Datenschutz",
    description:
      "Wir sichern Ihre Daten, bieten Backup-Konzepte und schulen in sicherer Nutzung von Passwörtern, E-Mail und Online-Banking.",
  },
];
