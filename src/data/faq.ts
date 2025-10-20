export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Wie schnell können Sie bei mir sein?",
    answer:
      "In München sind wir oft innerhalb von 2 Stunden vor Ort. Für Termine im Umland stimmen wir eine Anfahrt nach Verfügbarkeit ab. Alternativ unterstützen wir per Fernwartung noch schneller.",
  },
  {
    question: "Sind Ihre Services für Senior:innen geeignet?",
    answer:
      "Ja, wir sind auf Senior:innen spezialisiert: langsame Erklärung, Übungsblätter, Schritt-für-Schritt-Anleitungen und auf Wunsch direkte Abstimmung mit Angehörigen.",
  },
  {
    question: "Wie läuft die Fernwartung ab?",
    answer:
      "Sie installieren unsere sichere Support-App, wir verbinden uns nach Freigabe und lösen das Problem gemeinsam. Danach wird die Verbindung wieder getrennt.",
  },
  {
    question: "Welche Bezahlmöglichkeiten bieten Sie an?",
    answer:
      "Sie können bar, per EC-Karte oder auf Rechnung bezahlen. Für regelmäßige Betreuung bieten wir auch Servicepakete im Abo an.",
  },
];
